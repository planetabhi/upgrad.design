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
