
'use client'
import { mySwiperTestimonial1 } from "@/utils/swiperOptions"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Testimonial1() {
	return (
		<>

			<section className="section-testimonial pt-122 pb-130 relative">
				<img src="/assets/images/testimonial/tes-h1.jpg" alt="image" className="tes-shape" />
				<div className="tf-container">
					<div className="row mb-60 z-index-3 relative">
						<div className="col-lg-12">
							<div className="heading-title w-680">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Clients Testimonials</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Why People Say About Our
									Business Services</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 relative wow fadeInUpSmall" data-wow-delay=".4s">
							<Swiper {...mySwiperTestimonial1} className="swiper mySwiper-testimonial1 overflow-hiden">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="testimonial-style1 bd-rd-10">
											<div className="flex-two testimonial-header">
												<i className="icon-des" />
												<img src="/assets/images/brand/dropbox.png" alt="image" />
											</div>
											<div className="line" />
											<p className="des">With a proven track record delivering
												result we pride ourselve on delivering
												cost effective calable reliable solution
												that not only meet your current needs
												but also position your business
											</p>
											<div className="testimonial-profile relative flex-three">
												<div className="image">
													<img src="/assets/images/avata/avt-profile.jpg" alt="image" />
												</div>
												<div className="content">
													<h5 className="name">Kevin G. Harrison</h5>
													<span className="job font-man">CEO &amp; Founder</span>
													<span className="review"><i className="icon-start" />4.9</span>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style1 bd-rd-10">
											<div className="flex-two testimonial-header">
												<i className="icon-des" />
												<img src="/assets/images/brand/br4.png" alt="image" />
											</div>
											<div className="line" />
											<p className="des">With a proven track record delivering
												result we pride ourselve on delivering
												cost effective calable reliable solution
												that not only meet your current needs
												but also position your business
											</p>
											<div className="testimonial-profile relative">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/avata/avt2.jpg" alt="image" />
													</div>
													<div className="content">
														<h5 className="name">Michael J. Heath</h5>
														<span className="job font-man">Web Designer</span>
														<span className="review"><i className="icon-start" />4.9</span>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style1 bd-rd-10">
											<div className="flex-two testimonial-header">
												<i className="icon-des" />
												<img src="/assets/images/brand/br10.png" alt="image" />
											</div>
											<div className="line" />
											<p className="des">With a proven track record delivering
												result we pride ourselve on delivering
												cost effective calable reliable solution
												that not only meet your current needs
												but also position your business
											</p>
											<div className="testimonial-profile relative">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/avata/avt-team4.jpg" alt="image" />
													</div>
													<div className="content ">
														<h5 className="name">Kevin G. Harrison</h5>
														<span className="job font-man">CEO &amp; Founder</span>
														<span className="review"><i className="icon-start" />4.9</span>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style1 bd-rd-10">
											<div className="flex-two testimonial-header">
												<i className="icon-des" />
												<img src="/assets/images/brand/dropbox.png" alt="image" />
											</div>
											<div className="line" />
											<p className="des">With a proven track record delivering
												result we pride ourselve on delivering
												cost effective calable reliable solution
												that not only meet your current needs
												but also position your business
											</p>
											<div className="testimonial-profile relative flex-three">
												<div className="image">
													<img src="/assets/images/avata/avt-profile.jpg" alt="image" />
												</div>
												<div className="content">
													<h5 className="name">Kevin G. Harrison</h5>
													<span className="job font-man">CEO &amp; Founder</span>
													<span className="review"><i className="icon-start" />4.9</span>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style1 bd-rd-10">
											<div className="flex-two testimonial-header">
												<i className="icon-des" />
												<img src="/assets/images/brand/br4.png" alt="image" />
											</div>
											<div className="line" />
											<p className="des">With a proven track record delivering
												result we pride ourselve on delivering
												cost effective calable reliable solution
												that not only meet your current needs
												but also position your business
											</p>
											<div className="testimonial-profile relative">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/avata/avt2.jpg" alt="image" />
													</div>
													<div className="content">
														<h5 className="name">Michael J. Heath</h5>
														<span className="job font-man">Web Designer</span>
														<span className="review"><i className="icon-start" />4.9</span>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-style1 bd-rd-10">
											<div className="flex-two testimonial-header">
												<i className="icon-des" />
												<img src="/assets/images/brand/br10.png" alt="image" />
											</div>
											<div className="line" />
											<p className="des">With a proven track record delivering
												result we pride ourselve on delivering
												cost effective calable reliable solution
												that not only meet your current needs
												but also position your business
											</p>
											<div className="testimonial-profile relative">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/avata/avt-team4.jpg" alt="image" />
													</div>
													<div className="content ">
														<h5 className="name">Kevin G. Harrison</h5>
														<span className="job font-man">CEO &amp; Founder</span>
														<span className="review"><i className="icon-start" />4.9</span>
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
			</section>
		</>
	)
}
