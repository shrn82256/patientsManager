from flask import Flask, render_template, request, redirect, url_for, flash, Markup
from database import db
from Patient import patients
app = Flask(__name__)

# Required Config
app.secret_key = 'random1234'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///patients.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# main
@app.route('/')
@app.route('/index')
def patientEntry():
	return render_template('index.html', title="Add Patients")

# add patient form
@app.route('/addPatient', methods = ['POST'])
def addPatient():
	if request.method == 'POST':
		patient = patients(request.form)
		db.session.add(patient)
		try:
			db.session.commit()
			flash(Markup('<div id="successAlert" class="alert alert-success" role="alert"> Patient Information added successfully to record! </div>'))
		except:
			db.session.rollback()
			db.session.flush()
			flash(Markup('<div id="successAlert" class="alert alert-danger" role="alert"> Unable to add Patient Information to Database! </div>'))
		return redirect(url_for('patientEntry'))

# view patients
@app.route('/viewPatients')
def patientDirectory():
	return render_template('view.html', result=patients.query.all(), title="View Patients")

# search patients form
@app.route('/searchPatients', methods = ['GET'])
def searchPatient():
	if request.method == 'GET':
		return render_template('view.html', result=patients.query.filter(patients.name.like("%"+request.args['name']+"%")).all(), title="Search Patients")

if __name__ == '__main__':
	app.run(host="0.0.0.0")
	# app.run(debug=True)
