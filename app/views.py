from app import app
from flask import render_template, flash, redirect, session, url_for, request, g

@app.route('/')
def  home():
	return redirect(url_for('index'))

@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/user/<username>')
def user(username):
        return  render_template('user.html')

@app.route('/pastie/id')
def pastie(id):
        return  render_template('pastie.html')


