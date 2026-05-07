'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { sliderSwiperIt } from "@/utils/swiperOptions"

export default function MainSlider1() {
	return (
		<>

			<section className="swiper slider-Swiper-it relative">
				<Swiper {...sliderSwiperIt} className="swiper-wrapper">
					<SwiperSlide>
						<div className="slider-it-main relative over overflow-hiden">
							<div className="slider-image-it">
								<img src="/assets/images/slide/slider_ai.jpg" alt="" />
							</div>
							<span className="it-solution fw-600">IT Solutions</span>
							<img src="/assets/images/slide/mask.png" alt="image" className="mask-slider" />
							<div className="tf-container">
								<div className="slider-content-it relative z-index-3">
									<div className="sub-title-slider wow fadeInUpSmall">
										<span className="text-white font-man">
											<a href="https://www.linkedin.com/company/113454316" className='text-white'>
											<i className="icon-ins" />LinkedIn</a>
										</span>
										&nbsp;
										&nbsp;
										&nbsp;
										<span className="text-white font-man">
											<a href="https://www.facebook.com/veotronic/" className='text-white'>
											<i className="icon-fb" />Facebook</a>
										</span>
									</div>
									<h1 className="title-slider text-white wow fadeInUpSmall" data-wow-delay=".2s">AI Development &amp; Implementation <br /> for Business Automation
									</h1>
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">10+ Years Of Experience In Tech
										Services
									</p>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service-ai" className="button-src ">Explore Our Service
											<i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-it-main relative over overflow-hiden">
							<div className="slider-image-it">
								<img src="/assets/images/slide/slider_workflow.jpg" alt="" />
							</div>
							<span className="it-solution fw-600">IT Solutions</span>
							<img src="/assets/images/slide/mask.png" alt="image" className="mask-slider" />
							<div className="tf-container">
								<div className="slider-content-it relative z-index-3">
									<div className="sub-title-slider wow fadeInUpSmall">
										<span className="text-white font-man">
											<a href="https://www.linkedin.com/company/113454316" className='text-white'>
											<i className="icon-ins" />LinkedIn</a>
										</span>
										&nbsp;
										&nbsp;
										&nbsp;
										<span className="text-white font-man">
											<a href="https://www.facebook.com/veotronic/" className='text-white'>
											<i className="icon-fb" />Facebook</a>
										</span>
									</div>
									<h1 className="title-slider text-white wow fadeInUpSmall" data-wow-delay=".2s">Business Process Automation
										<br />When Your Business Runs Itself
									</h1>
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">10+ Years Of Experience In Tech
										Services
									</p>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service-auto" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-it-main relative over overflow-hiden">
							<div className="slider-image-it">
								<img src="/assets/images/slide/slider_api.jpg" alt="" />
							</div>
							<span className="it-solution fw-600">IT Solutions</span>
							<img src="/assets/images/slide/mask.png" alt="image" className="mask-slider" />
							<div className="tf-container">
								<div className="slider-content-it relative z-index-3">
									<div className="sub-title-slider wow fadeInUpSmall">
										<span className="text-white font-man">
											<a href="https://www.linkedin.com/company/113454316" className='text-white'>
											<i className="icon-ins" />LinkedIn</a>
										</span>
										<span className="text-white font-man">
											<a href="https://www.facebook.com/veotronic/" className='text-white'>
											<i className="icon-fb" />Facebook</a>
										</span>
									</div>
									<h1 className="title-slider text-white wow fadeInUpSmall" data-wow-delay=".2s">API Integration Platform
										<br />Connecting Disparate Systems into One
									</h1>
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">10+ Years Of Experience In Tech
										Services
									</p>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service-api" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-it-main relative over overflow-hiden">
							<div className="slider-image-it">
								<img src="/assets/images/slide/slider_software.jpg" alt="" />
							</div>
							<span className="it-solution fw-600">IT Solutions</span>
							<img src="/assets/images/slide/mask.png" alt="image" className="mask-slider" />
							<div className="tf-container">
								<div className="slider-content-it relative z-index-3">
									<div className="sub-title-slider wow fadeInUpSmall">
										<span className="text-white font-man">
											<a href="https://www.linkedin.com/company/113454316" className='text-white'>
											<i className="icon-ins" />LinkedIn</a>
										</span>
										&nbsp;
										&nbsp;
										&nbsp;
										<span className="text-white font-man">
											<a href="https://www.facebook.com/veotronic/" className='text-white'>
											<i className="icon-fb" />Facebook</a>
										</span>
									</div>
									<h1 className="title-slider text-white wow fadeInUpSmall" data-wow-delay=".2s">Custom Software Solutions
										<br />for Business & Industrial Operations
									</h1>
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">10+ Years Of Experience In Tech
										Services
									</p>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service-development" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="button-swiper">
					<div className="swiper-button-next" />
					<div className="swiper-button-prev" />
				</div>
			</section>
		</>
	)
}
