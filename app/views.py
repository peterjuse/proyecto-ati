from app import app
from models.user import *
from models.pastie import *
from models.tag import *
from models.filter import *
from flask import render_template, flash, redirect, session, url_for, request, g , jsonify, Response, Flask
from datetime import timedelta


@app.route('/') #Mejor redirigir que mantener todo bajo una sola funcion
def  home():
	return redirect(url_for('index'))

@app.route('/index',methods=['GET'])
def index():
	pastie = Pastie()
	lista_pasties = pastie.all_pasties()
	return render_template('index.html',pasties = lista_pasties)


@app.route('/user/<username>',methods=['GET'])
def user(username):
	currentUser = User()
	currentUser = currentUser.get(username = username)
	if currentUser:
		pastiesUser = currentUser.pasties()
		return  render_template('user.html', user = currentUser, pasties = pastiesUser)
	else:
		return "Hola"

@app.route('/get_users_json/<int:nro_pagina>')
def users(nro_pagina):
	return "Hola Users"

@app.route('/get_pasties_json/<int:nro_pagina>')
def pasties(nro_pagina):
	return "Hola Pasties"

@app.route('/get_tags_json/<int:nro_pagina>')
def tags(nro_pagina):
	return "Hola Tags"

@app.route('/pastie/<int:id>',methods=['GET','POST'])
def pastie(id):
	return  render_template('pastie.html')


@app.route('/get_pastie_json/<int:id_pastie>')
def return_pastie(id_pastie):
	pastie = Pastie()
	if pastie.id:
		user = User()
		user = user.get(id = pastie.id)
		return Response(pastie.to_json() , status = 200)
	else:
		response = jsonify(error = "Pastie no encontrado")
		return Response(response , status = 404)

## RUTAS PARA EL MANEJO DE FORMULARIO ##
@app.route('/login_request',methods=['POST'])
def login():
	username = request.form['username']
	password = request.form['password']
	remember = request.form['remember']
	currentUser = User()
	currentUser.get(username)
	if currentUser.username!=None:
		if currentUser.verifyPassword(password):
			print "Ha ingresado correctamente"
			session['username'] = username
			g.currentUser = currentUser
			currentUser.updateLastSeen()

	return render_template('index.html')


@app.route('/logout_request')
def logout():
    session.pop('username', None)
    return render_template('index.html')


@app.route('/sigin_request',methods=['POST'])
def sigin():
	firstname = request.form['firstname']
	lastname = request.form['lastname']
	email = request.form['email']
	username = request.form['username']
	password = request.form['password']
	currentUser = User()
	if currentUser.unique_username(username) and currentUser.valid_username(username):
		if currentUser.unique_email(email):
			if currentUser.valid_name(firstname) and currentUser.valid_name(lastname):
				currentUser.create(username,email,password,firstname,lastname)
				print "Usted se ha registrado satisfactoriamente."
			else:
				print "El nombre o el apellido suministrado no son validos."
		else:
			print "El correo sumiministrado ya esta siendo usado o no es valido."
	else:
		print "El usuario sumiministrado ya esta siendo usado o no es valido."

	return render_template("index.html")



@app.route('/pastie/create_pastie',methods=['POST'])
def crear_pastie():
	title = request.form['title']
	private = request.form['privated']
	content = request.form['content']
	tags = request.form['tags']
	user = User()
	user =  user.get(username = session['username'])
	pastie = Pastie()
	pastie.create(content,user.id,private,title)
	tag = Tag()
	tag.create(tags)
	return redirect(url_for('index'))
