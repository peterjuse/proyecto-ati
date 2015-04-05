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
			ref_database.execute('insert into tags values(%d,%s,%d,%s);',(self.id,self.name,self.occurrences,self.last_occurrence,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def get(self,id):
		connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
		ref_database = connection.cursor()
		ref_database.execute('select * from tags where id=%d;',(id,))
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
			ref_database.execute('update tags set occurrences=%d,last_occurrence=%s where id=%d;',(self.occurrences,self.last_occurrence,self.id,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def delete(self):
		if self.id:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('delete from tags where id=%d;',(self.id,))
			connection.commit()
			self.id = None
			self.name = None
			self.occurrences = None
			self.last_occurrence = None
			ref_database.close()
			connection.close()
			return True
		return False
	
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