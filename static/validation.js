function validate(name, id) {
	var regex = [/^[a-z ,.'-]+$/i, /^[0-9]{10}$/i];
	return regex[id].test(name);
}

function raiseError(fieldName) {
	console.log("Error in " + fieldName);
	$("#" + fieldName + "-error").slideDown();
}

$(document).ready(function() {
	$('#addPatientForm').submit(function(event) {
		var fields = ["firstname", "lastname", "phno"];
		var fieldIds = [0, 0, 1];
		var flag = true;
		for (var i = 0; i < fields.length; i++) {
			if (!validate($('#' + fields[i]).val(), fieldIds[i])) {
				raiseError(fields[i]);
				flag = false;
			}
		}
		return flag;
	});
});