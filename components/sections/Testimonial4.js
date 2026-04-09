
'use client'
import { myTesHome5 } from "@/utils/swiperOptions"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Testimonial4() {
	return (
		<>

			<section className="pt-122 pb-130 bb-blog">
				<div className="tf-container">
					<div className="row mb-70">
						<div className="col-lg-12">
							<div className="heading-title center">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Our Testimonials</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">1250+ Clients Say <span className="text-blue1 mask">About Us</span></h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 relative">
							<div className="myteshome5-wrap overflow-hiden ">
								<Swiper {...myTesHome5} className="swiper myteshome5  ">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="testimonial-style3 style3-h5 flex-three">
												<div className="image">
													<img src="/assets/images/testimonial/avt.jpg" alt="image" />
												</div>
												<div className="content">
													<p className="des">Climb the mountain not to plant your flag but to
														embrace
														the ways challenge, enjoy the air, and behold the. Climb it
														see the world, not so the world can see you.
													</p>
													<div className="testimonial-bottom flex-two">
														<div className="testimonial-top flex-three">
															<i className="icon-des" />
															<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span>
															</p>
														</div>
														<div className="review">
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonial-style3 style3-h5 flex-three">
												<div className="image">
													<img src="/assets/images/testimonial/avt.jpg" alt="image" />
												</div>
												<div className="content">
													<p className="des">Climb the mountain not to plant your flag but to
														embrace
														the ways challenge, enjoy the air, and behold the. Climb it
														see the world, not so the world can see you.
													</p>
													<div className="testimonial-bottom flex-two">
														<div className="testimonial-top flex-three">
															<i className="icon-des" />
															<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span>
															</p>
														</div>
														<div className="review">
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonial-style3 style3-h5 flex-three">
												<div className="image">
													<img src="/assets/images/testimonial/avt.jpg" alt="image" />
												</div>
												<div className="content">
													<p className="des">Climb the mountain not to plant your flag but to
														embrace
														the ways challenge, enjoy the air, and behold the. Climb it
														see the world, not so the world can see you.
													</p>
													<div className="testimonial-bottom flex-two">
														<div className="testimonial-top flex-three">
															<i className="icon-des" />
															<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span>
															</p>
														</div>
														<div className="review">
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
															<i className="icon-start" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</div>
									<div className="swiper-pagination" />
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
