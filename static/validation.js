function validate(name, id) {
	var regex = [/^[a-z ,.'-]+$/i, /^[0-9]{10}$/i];
	return regex[id].test(name);
}

function raiseError(fieldName) {
	console.log("Error in " + fieldName);
	$("#" + fieldName + "-error").slideDown();
}

function hideErrors() {
	$(".errorText").slideUp();
}

$(document).ready(function() {
	$('#addPatientForm').submit(function(event) {
		hideErrors();

		var fields = ["firstname", "lastname", "phno"];
		var fieldIds = [0, 0, 1];
		var flag = true;
		for (var i = 0; i < fields.length; i++) {
			if (!validate($('#' + fields[i]).val(), fieldIds[i])) {
				raiseError(fields[i]);
				flag = false;
			}
		}

		if (moment().diff(moment($("#dob").val(), "MM/DD/YYYY"), "days") < 0) {
			raiseError("dob");
			flag = false;
		}
		return flag;
	});
});