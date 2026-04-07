// Swiper
if (window.Swiper) {
	const swiperSlider = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 0,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			1200: {
				slidesPerView: 'auto',
				spaceBetween: 0,
			},
		},
	});
}

// Mobile Nav
const mobileNavBtn = document.getElementById('mobile-nav-btn');
const mobileNavIcon = mobileNavBtn ? mobileNavBtn.querySelector('img') : null;
const nav = document.querySelector('.nav');
const mobileNavPanel = document.getElementById('mobile-nav-panel');

if (mobileNavBtn && mobileNavIcon && nav && mobileNavPanel) {
	const closedIcon = './img/svg/mobile-nav-btn-closed.svg';
	const openedIcon = './img/svg/mobile-nav-btn-opened.svg';

	const setMobileNavState = (isOpen) => {
		nav.classList.toggle('nav--mobile-open', isOpen);
		mobileNavBtn.setAttribute('aria-expanded', String(isOpen));
		mobileNavPanel.setAttribute('aria-hidden', String(!isOpen));
		mobileNavIcon.src = isOpen ? openedIcon : closedIcon;
		mobileNavIcon.alt = isOpen ? 'Close mobile nav' : 'Open mobile nav';
	};

	setMobileNavState(false);

	mobileNavBtn.addEventListener('click', () => {
		const isOpen = !nav.classList.contains('nav--mobile-open');
		setMobileNavState(isOpen);
	});

	mobileNavPanel.addEventListener('click', (event) => {
		const link = event.target.closest('a');
		if (link) {
			setMobileNavState(false);
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 767) {
			setMobileNavState(false);
		}
	});
}