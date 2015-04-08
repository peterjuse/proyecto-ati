import psycopg2
import re

class Tag:
	def __init__(self):
		self.id = None
		self.name = None
		self.occurrences = None
		self.last_occurrence = None
		
	def create(self, name):
		if name:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute("select nextval('tag_seq');") 
			self.id =  ref_database.fetchone()[0]
			self.name = name
			self.occurrences = 1
			ref_database.execute('select now();')
			self.last_occurrence = ref_database.fetchone()[0]
			ref_database.execute('insert into tags values(%s,%s,%s,%s);',(self.id,self.name,self.occurrences,self.last_occurrence,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def get(self,id):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		ref_database.execute('select * from tags where id=%s;',(id,))
		result = ref_database.fetchone()
		if result:
			self.id = result[0]
			self.name = result[1]
			self.occurrences = result[2]
			self.last_occurrence = result[3]
		ref_database.close()
		connection.close()
		return self

	def set(self, id):
		if id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			self.occurrences = self.occurrences+1
			ref_database.execute('select now();')
			self.last_occurrence = ref_database.fetchone()[0]			
			ref_database.execute('update tags set occurrences=%s,last_occurrence=%s where id=%s;',(self.occurrences,self.last_occurrence,self.id,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def delete(self):
		if self.id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('delete from tags where id=%s;',(self.id,))
			connection.commit()
			self.id = None
			self.name = None
			self.occurrences = None
			self.last_occurrence = None
			ref_database.close()
			connection.close()
			return True
		return False

	def all(self):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		# Consulta:
		ref_database.execute('select * from tags;')
		result = ref_database.fetchall()
		# Cerrando conexion con BD:
		ref_database.close()
		connection.close()
		return result

	def trend(self):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		# Consulta:
		ref_database.execute('select * from tags order by occurrences desc limit 10;')
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
		ref_database.execute('select * from tags order by name desc limit %s offset %s;', (size, offset,))
		result = ref_database.fetchall()
		# Cerrando conexion con BD:
		ref_database.close()
		connection.close()
		return result
	
	#Validaciones:
	@staticmethod
	def unique(name):
		result = None
		if name:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('select * from tags where name=%s;',(name,))
			result = ref_database.fetchone()			
			ref_database.close()
			connection.close()
		return result

	@staticmethod
	def valid(name):
		result = None
		if name:
			result = re.match('#[\w-]{3,}', name)
		return result

	@staticmethod
	def most_used(index):
		result = None
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		ref_database.execute('select * from tags limits 10 offset %s;',(index,))
		result = ref_database.fetchall()
		ref_database.close()
		connection.close()
		return result