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
		var d = Date.parse($(this).val());
		if(d)
			$("#age").val(Math.round(((new Date()).getTime() - (new Date(d)).getTime())/(1000*60*60*24*365.25)));
	});
});