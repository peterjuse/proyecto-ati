import psycopg2
import re

class Filter: # Filtrar pasties por tags
	def __init__(self, pastie=None):
		self.pastie = None
		self.tag = None
		if pastie:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('select * from filters where pastie_id=%d;',(pastie,))
			result = ref_database.fetchone()
			if result:
				self.pastie = result[0]
				self.tag = result[1]
			ref_database.close()
			connection.close()

	def create(self, pastie=None, tag=None):
		if (pastie and tag):
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			self.pastie =  pastie
			self.tag = tag
			ref_database.execute('insert into filters values(%d,%d);',(self.pastie,self.tag,))
			connection.commit()
			ref_database.close()
			connection.close()
			return True
		return False

	def get(self):
		return self

 	# retornar todos los pasties publicos de un tag en particular
	def pasties(self):
		result = None
		if self.tag:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('select pasties.* from pasties, filters where filters.tag_id = %d and filters.pastie_id = pasties.id and pasties.private = false order by pasties.last_modified asc;',(self.pastie,))
			result = ref_database.fetchall()
			ref_database.close()
			connection.close()
		return result

	# retornar todos los tags de un pastie
	def tags(self):
		result = None
		if self.pastie:
			connection = psycopg2.connect(database = 'mypastie_database', user = 'developer', password = 'developer', host = 'localhost')
			ref_database = connection.cursor()
			ref_database.execute('select tags.* from tags, filters where filters.pastie_id = %d and filters.tag_id = tags.id order by tags.last_occurrence asc;',(self.tag,))
			result = ref_database.fetchall()
			ref_database.close()
			connection.close()
		return result