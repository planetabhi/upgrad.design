ScrollReveal().reveal('.card-1', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-1');
	},
});

ScrollReveal().reveal('.card-2', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-2');
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
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-3');
	},
});

ScrollReveal().reveal('.card-4', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-4');
	},
});

ScrollReveal().reveal('.card-5', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-5');
	},
});

ScrollReveal().reveal('.card-6', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-6');
	},
});

ScrollReveal().reveal('.card-7', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-7');
	},
});

ScrollReveal().reveal('.card-8', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-8');
	},
});

ScrollReveal().reveal('.card-9', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-9');
	},
});

ScrollReveal().reveal('.card-10', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-10');
	},
});

ScrollReveal().reveal('.card-11', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 0,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-11');
	},
});

ScrollReveal().reveal('.card-12', {
	easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
	distance: '8px',
	delay: 200,
	scale: 0.98,
	duration: 400,
	distance: '40px',
	viewFactor: 0.3,
	mobile: true,
	afterReveal: function clean() {
		ScrollReveal().clean('.card-12');
	},
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
