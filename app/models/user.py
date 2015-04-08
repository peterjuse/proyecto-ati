import psycopg2
import hashlib
from werkzeug.security import generate_password_hash, check_password_hash
import re

class User:
	def __init__(self):
		self.id = None
		self.username = None
		self.password_hash = None
		self.email = None
		self.name = None
		self.lastname = None
		self.country = None
		self.city = None
		self.member_since = None
		self.last_seen = None
		
	# Crea un usuario
	def create(self, username, email, password, name, lastname, city=None, country=None):
		if(username and email and password and name and lastname):			
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute("select nextval('user_seq');")
			self.id = ref_database.fetchone()[0]
			self.username = username
			self.password_hash = generate_password_hash(password)
			self.email = email
			self.name = name
			self.lastname = lastname
			self.city = city
			self.country = country
			ref_database.execute('select now();')
			self.member_since = self.last_seen = ref_database.fetchone()[0]
			ref_database.execute('insert into users values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);', (self.id, self.email, self.password_hash, self.username, self.name, self.lastname, self.city, self.country, self.member_since, self.last_seen,))
			connection.commit()
			# Cerrando conexion con BD:
			ref_database.close()
			connection.close()
			return True
		return False

	def get(self,username,id=None):
 		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		# Consulta:
		if id == None:
			ref_database.execute('select * from users where username = %s;',(username,))
			result = ref_database.fetchone()
			if result:
				self.id = result[0]
				self.username = result[1]
				self.password_hash = result[2]
				self.email = result[3]
				self.name = result[4]
				self.lastname = result[5]
				self.country = result[6]
				self.city = result[7]
				self.member_since = result[8]
				self.last_seen = result[9]
			else:
				return False
		else:
			ref_database.execute('select * from users where id = %s;',(id,))
			result = ref_database.fetchone()
			if result:
				self.id = result[0]
				self.username = result[1]
				self.password_hash = result[2]
				self.email = result[3]
				self.name = result[4]
				self.lastname = result[5]
				self.country = result[6]
				self.city = result[7]
				self.member_since = result[8]
				self.last_seen = result[9]
			else:
				return False
 		# Cerrando conexion con BD:
 		ref_database.close()
 		connection.close()
		return self
	#retorna informacion de un usuario
	def id(self):
		return self.id

	def username(self):
		return self.username

	def email(self):
		return self.email

	def name(self):
		return self.name

	def lastname(self):
		return self.lastname

	def city(self):
		return self.city	

	def country(self):
		return self.country	

	def last_seen(self):
		return self.last_seen

	def nro_pasties_privates(self):
		return len(self.pasties(private=1))

	def nro_pasties_publics(self):
		return len(self.pasties())

	def avatar(self, size, default = 'identicon'):
		if self.id:
			hash = hashlib.md5(self.username.encode('utf-8')).hexdigest()
			return 'http://www.gravatar.com/avatar/%s?s=%d&d=%s' % (hash, size, default)
		return None

	# Actualiza informacion de un usuario
	def set(self, email=None, password=None, name=None, lastname=None, city=None, country=None):
		if (email or password or name or lastname or city or country):
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			if email:
				self.email = email
			if password:
				self.password_hash = generate_password_hash(password)
			if name:
				self.name = name
			if lastname:
				self.lastname = lastname
			if city:
				self.city = city
			if country:
				self.country = country
			ref_database.execute('update users set email=%s, password=%s name=%s, lastname=%s, country=%s, city=%s where id=%s;', (self.email, self.password_hash, self.name, self.lastname, self.country, self.city, self.id,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	# Elimina un usuario
	def delete(self):
		if self.id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('delete from users where id=%s;', (self.id,))
			connection.commit()
			self.id = None
			self.username = None
			self.email = None
			self.name = None
			self.lastname = None
			self.country = None
			self.city = None
			self.member_since = None
			self.last_seen = None
			# Cerrando conexion con BD:
			ref_database.close()
			connection.close()
			return True
		return False

	# Verificacion de password
	def verifyPassword(self, password):
		return check_password_hash(self.password_hash, password)

	#Actualizando la fecha de ultima vista
	def updateLastSeen(self):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		ref_database.execute('select now();')
		self.last_seen = ref_database.fetchone()[0]
		ref_database.execute('update users set last_seen=%s where id=%s;', (self.last_seen,self.id))
		connection.commit()
		# Cerrando conexion con BD:
		ref_database.close()
		connection.close()
		return True

	# Retorna todos los pasties (publicos y privados) de un user
	def pasties(self,private=None):
		if self.id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			# Consulta:
			if private == None:
				ref_database.execute('select * from pasties where owner=%s order by last_modified desc;', (self.id,))
			else:
				ref_database.execute('select * from pasties where owner=%s and private=%s order by last_modified desc;', (self.id,'True',))
			result = ref_database.fetchall()
			# Cerrando conexion con BD:
			ref_database.close()
			connection.close()
			return result
		return None

	def pasties_per_page(self, page, size):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		# Consulta:
		offset = page*size
		ref_database.execute('select * from pasties where owner=%s order by last_modified desc limit %s offset %s;', (size, offset,))
		result = ref_database.fetchall()
		# Cerrando conexion con BD:
		ref_database.close()
		connection.close()
		return result

	# Retorna todos los usuarios
	def all(self):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		# Consulta:
		ref_database.execute('select * from users order by name asc;')
		result = ref_database.fetchall()
		# Cerrando conexion con BD:
		ref_database.close()
		connection.close()
		return result

	def per_page(self, page, size):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		# Consulta:
		offset = page*size
		ref_database.execute('select * from users order by name desc limit %s offset %s;', (size, offset,))
		result = ref_database.fetchall()
		# Cerrando conexion con BD:
		ref_database.close()
		connection.close()
		return result

	# Metodos para autenticacion con flask-login
	def is_authenticated(self): #No hay ningun tipo de bloqueos de cuenta
		return True

	def is_active(self): # No hay desactivacion de cuenta
		return True

	def is_anonymous(self): #Todos los usuarios que realizan acciones directas tienen que ser registrados
		return False

	def get_id(self):
		if self.id:
			return unicode(self.id)
		return None

	# Validaciones username
	@staticmethod
	def unique_username(username):
		result = None
		if username:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			# Verificando unicidad del username:
			ref_database.execute('select username from users where username = %s;',(username,)) 
			resultado = ref_database.fetchone()
			# Cerrando conexion con BD:
			ref_database.close()
			connection.close()
			if resultado==username:
				result= False
			else:
				result=True
		return result

	@staticmethod
	def valid_username(username):
		result = None
		if username:
			result = re.match("@?(\w){3,16}", username)
		return result

	#Validaciones email
	@staticmethod
	def unique_email(email):
		result = None
		if email:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			# Verificando unicidad del username:
			ref_database.execute('select email from users where email = %s;',(email,)) 
			resultado = ref_database.fetchone()
			# Cerrando conexion con BD:
			ref_database.close()
			connection.close()
			if resultado==email:
				result=False
			else:
				result=True
		return result

	@staticmethod
	def valid_email(email):
		result = None
		if email:
			result = re.match("^[\w.\+-]+@[\w-]+\.[\w.-]+$", email)
		return result

	#Validaciones nombre y apellido
	@staticmethod
	def valid_name(name):
		result = None
		if name:
			result = re.match("^[a-zA-Z_]+$", name)
		return result

	#Validacion del password:
	@staticmethod
	def valid_password(password):
		result = None
		if password:
			result = re.match("^[!#\$%&\?\*-\+\(\)\w]){5,}$", password)
		return result