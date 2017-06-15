$(document).ready(function() {
	$(window).scroll(function(event) {
		var st = $('html').scrollTop() || $('body').scrollTop();
		$('.header_text').css({"-webkit-transform":"translate(0%," + st/5 + "%)"
		// $('.header_text').css({
		// 	"transform" : "translate(0%, " + st/5 + "%"
	});

		$('.sect_2').css({
			"-webkit-transform" : "translate(0%, " + st/30 + "%)"

	});

				$('.sect_3_txt').css({
			"-webkit-transform" : "translate(0%, " + st/7 + "%)"

	});


				$('.sect_2_txt').css({
			"-webkit-transform" : "translate(0%, -" + st/2 + "%)"

	});
});

});