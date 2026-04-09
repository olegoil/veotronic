import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
export const brandLogo = {
	modules: [Autoplay, Navigation, Pagination],
	loop: true,
	slidesPerView: 2,

	autoplay: {
		delay: 0.3,
		reverseDirection: true,
	},
	freeMode: true,
	speed: 4000,
	disableOnInteraction: true,
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		600: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 90,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 90,
		},
	},
}

export const brandLogo2 = {
	modules: [Autoplay, Navigation, Pagination],
	loop: true,
	slidesPerView: 2,
	autoplay: {
		delay: 0.3,
		reverseDirection: true,
	},
	freeMode: true,
	speed: 4000,
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		600: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 50,
		},
		1300: {
			slidesPerView: 4,
			spaceBetween: 80,
		},
	},
}

export const marqueTextSlide = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 90,
	loop: true,
	slidesPerView: 2,
	spaceBetween: 0,
	observer: true,
	observeParents: true,
	shortSwipes: false,
	longSwipes: false,
	allowTouchMove: true,
	reverseDirection: true,
	autoplay: {
		delay: 0.3,
	},
	freeMode: true,
	speed: 4000,
	disableOnInteraction: true,
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
}

export const caseStudiesSlider = {
	modules: [Autoplay, Navigation, Pagination],
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
}

export const mySwiperTestimonial1 = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1
		},
		600: {
			slidesPerView: 1
		},
		991: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 3
		},
	},
}

export const mySwiperTes3 = {
	modules: [Autoplay, Navigation, Pagination],
	spaceBetween: 30,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
}

export const myProjectSlider = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 2.5,
	spaceBetween: 30,
	freeMode: true,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
}

export const myFeedBack = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 2,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
	loop: true,
	autoplay: {
	},
	breakpoints: {
		0: {
			slidesPerView: 1
		},
		600: {
			slidesPerView: 1
		},
		991: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 2
		},
	},
}

export const collection1 = {
	modules: [Autoplay, Navigation, Pagination],
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5
		},
		600: {
			slidesPerView: 2
		},
		991: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 5
		},
	},
	observer: true,
	observeParents: true,
	shortSwipes: false,
	longSwipes: false,
	allowTouchMove: true,
	reverseDirection: true,
	autoplay: {
		delay: 0.3,
	},
	freeMode: true,
	speed: 4000,
	disableOnInteraction: true
}

export const collection2 = {
	modules: [Autoplay, Navigation, Pagination],
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5
		},
		600: {
			slidesPerView: 2
		},
		991: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 5
		},
	},
	observer: true,
	observeParents: true,
	shortSwipes: false,
	longSwipes: false,
	allowTouchMove: true,
	autoplay: {
		delay: 0.3,
		reverseDirection: true,
	},
	freeMode: true,
	speed: 5000,
	disableOnInteraction: true
}

export const myFeature4 = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 1.75,
	spaceBetween: 30,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		600: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1300: {
			slidesPerView: 1
		},
		1380: {
			slidesPerView: 1.75
		},
	},
}

export const brandHome4 = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 5,
	spaceBetween: 73,
	loop: true,
	speed: 1500,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		600: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1280: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
}

export const myPortfolio = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 2.43,
	spaceBetween: 70,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.2,
			spaceBetween: 30,
		},
		600: {
			slidesPerView: 1.4,
			spaceBetween: 50,
		},
		1200: {
			slidesPerView: 2.4
		},
	},
}

export const myTesHome5 = {
	modules: [Autoplay, Navigation, Pagination],
	spaceBetween: 130,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
}

export const sliderSwiperIt = {
	modules: [Autoplay, Navigation, Pagination, EffectFade],
	slidesPerView: 1,
	effect: "fade",
	// autoplay: {
	//     delay: 6000,
	//     disableOnInteraction: false,
	// },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
}

export const myTeamMember = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 5.8,
	spaceBetween: 30,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.2,
		},
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 5.8
		},
	},
}
