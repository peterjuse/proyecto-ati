import psycopg2

class Pastie:
	def __init__(self):
		self.id = None
		self.private = None
		self.content = None
		self.title = None
		self.status = None
		self.creation = None
		self.last_modified = None
		self.owner = None
			
	def create(self, private=None, content, title=None, owner):
		if(content and owner):
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute("select nextval('pastie_seq');") 
			self.id =  ref_database.fetchone()[0]
			if private:
				self.private = private
			else:
				self.private = False
			if title:
				self.title = title
			else:
				self.title = '(sin titulo)'
			self.content = content
			self.status = 'creado'
			ref_database.execute('select now();')
			self.creation = self.last_modified = ref_database.fetchone()[0]
			self.owner = owner
			ref_database.execute('insert into pasties values(%d,%d,%s,%s,%s,%s,%s,%d);',(self.id,self.private,self.content,self.title,self.status,self.creation,self.last_modified,self.owner,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def get(self,id):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		ref_database.execute('select * from pasties where id=%d;',(id,))
		resultado = ref_database.fetchone()
		if resultado:
			self.id = resultado[0]
			self.private = resultado[1]
			self.content = resultado[2]
			self.title = resultado [3]
			self.status = resultado[4]
			self.creation = resultado[5]
			self.last_modified = resultado[6]
			self.owner = resultado[7]
		ref_database.close()
		connection.close()
		return self

	def set(self,private=None,content=None,title=None,status='modificado'):
		if(private or content or title):
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			if private:
				self.private= private
			if content:
				self.content = content
			if title:
				self.title = title
			self.status = status
			ref_database.execute('select now();')
			tiempo = ref_database.fetchone()
			self.last_modified = tiempo[0]
			ref_database.execute('update pasties set private=%d,content=%s,title=%s,status=%s,last_modified=%s  where id=%d;',(self.private,self.content,self.title,self.status,self.last_modified,self.id,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def delete(self):
		if self.id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('delete from pasties where id=%d;',(self.id,))
			connection.commit()
			self.id = None
			self.private = None
			self.content = None
			self.title = None
			self.status = None
			self.creation = None
			self.last_modified = None
			self.owner = None
			ref_database.close()
			connection.close()
			return True
		return False

	# Retorna todos los pasties publicos
	def publics(self):
		if self.id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			# Consulta:
			ref_database.execute('select * from pasties where private = false order by last_modified asc;')
			result = ref_database.fetchall()
			# Cerrando conexion con BD:
			ref_database.close()
			connection.close()
			return result
		return None
	