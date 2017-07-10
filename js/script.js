$(function() {
   $('.slide_type_a').slick({
	fade: true,
	cssEase: 'linear',
	arrows: false,
	lazyLoad: "progressive"
	});
});

$(function() {
    $(window).scroll(function() {
            var dy = $(this).scrollTop();
            $('#nav').css('top', dy < 80 ? 80-dy : 0);
    });
});