$(document).ready(function() {
	$(".errorText").each(function(index, el) {
		$(el).on('click', function(event) {
			$(this).slideUp();
		});
	});

	$(".alert").each(function(index, el) {
		$(this).slideDown();
		$(el).on('click', function(event) {
			$(this).slideUp();
		});
	});
});