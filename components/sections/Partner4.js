
'use client'
import { collection1, collection2 } from "@/utils/swiperOptions"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Partner4() {
	return (
		<>

			<section className="section-partner-h2 style-white pt-122 pb-130 bg-4 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center mb-60">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Global Partners</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We’ve 1250+ Global <span className="text-blue1 mask">partners</span></h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 mb-10">
							<Swiper {...collection1} className="swiper collection-1 overflow-hiden">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br1.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br2.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br3.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br4.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br5.png" alt="image" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
						<div className="col-md-12">
							<Swiper {...collection2} className="swiper collection-2 overflow-hiden">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br6.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br7.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br9.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br10.png" alt="image" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="image-partner-logo">
											<img src="/assets/images/brand/br8.png" alt="image" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
