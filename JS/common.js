$(document).ready(function() {
	$(window).scroll(function(event) {
		var st = $('html').scrollTop() || $('body').scrollTop();
		$('.header_text').css({
			"transform" : "translate(0%, " + st/5 + "%"
	});

		$('.sect_2').css({
			"transform" : "translate(0%, " + st/30 + "%"

	});
});

});