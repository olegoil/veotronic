
'use client'
import { collection1, collection2 } from "@/utils/swiperOptions"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Partner2() {
	return (
		<>

			<section className="section-partner-h2 pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title mb-60 center">
								<span className="sub-title texts-blue font-man">Global Partners</span>
								<h2 className="title">We’ve 1250+ Global partners</h2>
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
