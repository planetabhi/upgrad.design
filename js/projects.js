ScrollReveal().reveal('.card-1', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 1500,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	afterReveal: function cleanAnimation() {
		ScrollReveal().clean('card-2');
	},
});

ScrollReveal().reveal('.card-2', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 1700,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	afterReveal: function cleanAnimation() {
		ScrollReveal().clean('card-2');
	},
});

ScrollReveal().reveal('.card-3', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-4', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-5', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-6', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-7', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-8', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-9', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

ScrollReveal().reveal('.card-10', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
});

$(document).on('scroll', function () {
	if ($(this).scrollTop() >= $('#project-cards').position().top) {
		document.getElementById('header').style.background = '#fff';
		document.getElementById('gradients').style.opacity = 0;
	}
});

$(document).on('scroll', function () {
	if ($(this).scrollTop() < $('#project-cards').position().top) {
		document.getElementById('header').style.background = 'none';
		document.getElementById('gradients').style.opacity = 1;
	}
});

function overlayInit() {
	var e = document.getElementById('overlay');
	if (e.style.opacity == '0.8') {
		e.style.opacity = '0';
		e.style.display = 'none';
	} else {
		e.style.opacity = '0.8';
		e.style.display = 'block';
	}
}
