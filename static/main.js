$(document).ready(function() {
	// to Display eror text on wrong input
	$(".errorText").each(function(index, el) {
		$(el).on('click', function(event) {
			$(this).slideUp();
		});
	});

	// To add animation and clickToHide effect to alert
	$(".alert").each(function(index, el) {
		$(this).slideDown();
		$(el).on('click', function(event) {
			$(this).slideUp();
		});
	});

	// so that birthdate is less than today
	$("#dob").prop('max', function(){
		return new Date().toJSON().split('T')[0];
	});

	$("#dob").on('focusout', function(){
		var age = moment().diff(moment($(this).val(), "MM/DD/YYYY"), "years");
		$("#age").val(age ? age : 0);
	});
});