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
