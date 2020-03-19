$(function() {

	$('body').on('click', '.btn-inscribete', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: ($($anchor.attr('href')).offset().top - 20)
	    }, 1500);
	    event.preventDefault();
	});

});