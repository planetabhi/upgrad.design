$(function () {
	$('.marquee').marquee({
		//If you wish to always animate using jQuery
		allowCss3Support: true,

		//works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
		css3easing: 'linear',

		//requires jQuery easing plugin. Default is 'linear'
		easing: 'linear',

		//pause time before the next animation turn in milliseconds
		delayBeforeStart: 3000,
		//'left', 'right', 'up' or 'down'
		direction: 'left',

		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,

		//speed in milliseconds of the marquee in milliseconds
		duration: 12000,

		//gap in pixels between the tickers
		gap: 40,

		//on cycle pause the marquee
		pauseOnCycle: true,

		//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
		pauseOnHover: true,

		//the marquee is visible initially positioned next to the border towards it will be moving
		startVisible: true,
	});
});

document.getElementById('fluid').play();

// var timer;
// $(document).mousemove(function () {
// 	if (timer) {
// 		clearTimeout(timer);
// 		timer = 0;
// 	}

// 	$('div.right, div.footer').fadeIn();
// 	timer = setTimeout(function () {
// 		$('div.right, div.footer').fadeOut();
// 	}, 3000);
// });

$('.body').mousemove(function (event) {
	var eye = $('.eye');
	var x = eye.offset().left + eye.width() / 2;
	var y = eye.offset().top + eye.height() / 2;
	var rad = Math.atan2(event.pageX - x, event.pageY - y);
	var rot = rad * (180 / Math.PI) * -1 + 180;
	eye.css({
		'-webkit-transform': 'rotate(' + rot + 'deg)',
		'-moz-transform': 'rotate(' + rot + 'deg)',
		'-ms-transform': 'rotate(' + rot + 'deg)',
		transform: 'rotate(' + rot + 'deg)',
	});
});
