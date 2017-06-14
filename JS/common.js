$(document).ready(function() {
	$(window).scroll(function(event) {
		var st = $(this).scrollTop();
		$('.header_text').css({
			"transform" : "translate(0%, " + st/5 + "%"
	});

		$('.sect_2 img').css({
			"transform" : "translate(0%, " + st/30 + "%"

	});
});

});