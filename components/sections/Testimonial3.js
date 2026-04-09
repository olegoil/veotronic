'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { mySwiperTes3 } from "@/utils/swiperOptions"

export default function Testimonial3() {
	return (
		<>

			<section>
				<div className="tf-container">
					<div className="testimonial-wrap-home4 bg-4 mb--13em">
						<div className="flex testimonial-wrap">
							<div className="testimonial-inner-header">
								<div className="heading-title">
									<span className="sub-title text-blue1 font-man">Our Testimonials</span>
									<h2 className="title">People Say About Our Mobile App
										<span className="text-black mask">  Development</span>
									</h2>
								</div>
							</div>
							<Swiper {...mySwiperTes3} className="swiper mySwipertes3 overflow-hiden relative">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="testimonial-style3">
											<div className="testimonial-top flex-three">
												<i className="icon-des" />
												<p className="name">Robert J. Hare/<span className="job font-man">Graphics
													Designer</span></p>
											</div>
											<p className="des">Climb the mountain not to plant your flag but to embrace
												the ways challenge, enjoy the air, and behold the. Climb it
												see the world, not so the world can see you.
											</p>
											<div className="testimonial-bottom flex-two">
												<img src="/assets/images/brand/test-h4.png" alt="image" />
												<div className="review">
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style3">
											<div className="testimonial-top flex-three">
												<i className="icon-des" />
												<p className="name">Robert J. Hare/<span className="job font-man">Graphics
													Designer</span></p>
											</div>
											<p className="des">Climb the mountain not to plant your flag but to embrace
												the ways challenge, enjoy the air, and behold the. Climb it
												see the world, not so the world can see you.
											</p>
											<div className="testimonial-bottom flex-two">
												<img src="/assets/images/brand/test-h4.png" alt="image" />
												<div className="review">
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style3">
											<div className="testimonial-top flex-three">
												<i className="icon-des" />
												<p className="name">Robert J. Hare/<span className="job font-man">Graphics
													Designer</span></p>
											</div>
											<p className="des">Climb the mountain not to plant your flag but to embrace
												the ways challenge, enjoy the air, and behold the. Climb it
												see the world, not so the world can see you.
											</p>
											<div className="testimonial-bottom flex-two">
												<img src="/assets/images/brand/test-h4.png" alt="image" />
												<div className="review">
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
													<i className="icon-start" />
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
							</Swiper>
						</div>
						<div className="img-cta-wrap flex-three">
							<h3 className="title">5m+ Trusted Customer</h3>
							<ul className="image-list flex-three">
								<li>
									<img src="/assets/images/avata/h215.jpg" alt="Image list" />
								</li>
								<li>
									<img src="/assets/images/avata/h214.jpg" alt="Image list" />
								</li>
								<li>
									<img src="/assets/images/avata/h212.jpg" alt="Image list" />
								</li>
								<li>
									<img src="/assets/images/avata/h210.jpg" alt="Image list" />
								</li>
							</ul>
							<div className="service-cta ">
								<img src="/assets/images/page/chat1.png" alt="image" />
								<p className="font-man">Get Free Consultations For Solutions</p>
								<Link href="/#">Get A Quote <i className="icon-right-icon" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
