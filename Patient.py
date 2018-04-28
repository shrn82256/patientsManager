from database import db

class patients(db.Model):

	# Setting model of table
	__tablename__  = "patients"

	id = db.Column('id', db.Integer, primary_key = True)
	name = db.Column('name', db.String(50))
	age = db.Column('age', db.Integer)
	dob = db.Column('dob', db.String(10))
	gender = db.Column('gender', db.String(1))
	phno = db.Column('phno', db.String(10))
	otherinfo = db.Column('otherinfo', db.String(1024))

	def __init__(self, data):
		# Stripping strings
		patientData = {}
		for i in data:
			patientData[i] = data[i].strip()

		# Initializing class variables with data
		self.name = patientData['firstname'] + " " + patientData['lastname']
		self.age = patientData['age']
		self.dob = patientData['dob']
		self.gender = patientData['gender']
		self.phno = patientData['phno']
		self.otherinfo = patientData['otherinfo']
