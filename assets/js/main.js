$(document).ready(function(){
	if ($(window).width() > 1180) {
		$("#header_section").turn({
		    display: 'single',
		    page: 2
		});
	}
	//$("#header_section").turn("peel", "tl");

	$('#slider_box').bxSlider({
		pager: true,
		pagerType: 'short',
		pagerShortSeparator: ' / '
	});

	var bottomCMap = $('.custom_map').offset().top + $('.custom_map').height();
	var hCMap = $('.custom_map').height();

	$(window).scroll(function() {
		var bottomWindow = $(window).scrollTop() + $(window).height();
		if (bottomCMap <= (bottomWindow + (hCMap / 2)) && bottomCMap >= (bottomWindow - 300)) {
			$('.custom_map').addClass('animate');
		}
		else $('.custom_map').removeClass('animate');
	});

	$('.menu_btn').click(function(){
		if ($('.nav_line').hasClass('active')) {
			$('.nav_line').removeClass('active');
		}
		else {
			$('.nav_line').addClass('active');
		}
		return false;
	});
});