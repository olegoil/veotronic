
'use client'
import { mySwiperTes3 } from "@/utils/swiperOptions"
import { Swiper, SwiperSlide } from "swiper/react"
import TextAnimation from "../elements/TextAnimation"
export default function Testimonial2() {
	return (
		<>

			<section className="pt-130 testimonial-h3">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-5">
							<div className="testimonial-h3-image relative">
								<img src="/assets/images/testimonial/tes-h3.jpg" alt="image" />
								<div className="testimonial-avt-box relative bg-8">
									<p>5m+ Trusted Global Clients</p>
									<div className="icon">
										<svg width={132} height={5} viewBox="0 0 132 5" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M121.533 0.615385C118.67 0.5 115.758 0.384615 112.845 0.269231C111.908 0.230769 110.92 0.230769 109.982 0.192308C107.909 0.153846 105.836 0.115385 103.763 0.0769231C102.627 0.0384615 101.442 0.0384615 100.307 0C99.9615 0 99.616 0 99.3198 0C98.5793 0 97.8389 0 97.049 0C93.6429 0 90.2368 0 86.8307 0C86.0409 0 85.2018 0 84.4119 0.0384615C82.388 0.0769231 80.4135 0.0769231 78.3896 0.115385C76.1188 0.153846 73.8481 0.153846 71.5774 0.192308C67.9245 0.269231 64.2222 0.346154 60.5693 0.423077C58.4466 0.461538 56.324 0.5 54.2013 0.538462C50.5484 0.653846 46.8955 0.769231 43.2426 0.884615C41.2187 0.961538 39.2441 1 37.2202 1.07692C33.4192 1.26923 29.6182 1.42308 25.8172 1.57692C23.7933 1.65385 21.7694 1.73077 19.7455 1.84615C15.9938 2.07692 12.1928 2.34615 8.44119 2.61538C7.65137 2.65385 6.81219 2.73077 5.97301 2.76923C4.39337 2.88462 2.76437 3.07692 1.13537 3.23077C1.03664 3.23077 0.93791 3.26923 0.839183 3.26923C0.641728 3.26923 0.493637 3.34615 0.345546 3.46154C0.0987274 3.65385 0 3.88462 0 4.11539C0 4.34615 0.0987274 4.57692 0.345546 4.73077C0.543001 4.88462 0.888547 5 1.13537 5C3.10991 4.84615 5.0351 4.65385 7.00965 4.5C8.8361 4.38462 10.6626 4.26923 12.489 4.15385C14.4636 4.03846 16.4381 3.88462 18.462 3.76923C19.2518 3.73077 20.0417 3.65385 20.8808 3.61538C23.9908 3.5 27.0513 3.34615 30.1612 3.23077C32.0864 3.15385 34.0116 3.07692 35.9368 3C36.7266 2.96154 37.5164 2.92308 38.3062 2.88462C41.3668 2.76923 44.4273 2.69231 47.4879 2.57692C49.3637 2.53846 51.1902 2.46154 53.066 2.42308C53.7077 2.42308 54.3001 2.38462 54.9418 2.38462C58.2492 2.30769 61.5565 2.26923 64.8639 2.19231C66.6904 2.15385 68.5662 2.11538 70.3926 2.07692C71.0344 2.07692 71.7255 2.03846 72.3672 2.03846C75.7733 2 79.1794 2 82.6348 1.96154C84.7575 1.96154 86.8801 1.92308 89.0028 1.92308C92.6063 1.92308 96.2592 1.92308 99.8628 1.96154C100.554 1.96154 101.294 2 101.985 2C104.009 2.03846 105.984 2.07692 108.008 2.15385C109.489 2.19231 111.019 2.23077 112.5 2.26923C113.586 2.30769 114.623 2.34615 115.709 2.38462C118.818 2.5 121.978 2.65385 125.088 2.80769C125.877 2.84615 126.667 2.88462 127.457 2.92308C128.296 2.96154 129.185 3 130.024 3.07692C130.172 3.07692 130.271 3.11539 130.419 3.15385C130.764 3.19231 131.061 3.19231 131.357 3.03846C131.653 2.92308 131.85 2.69231 131.949 2.46154C132.147 1.96154 131.752 1.42308 131.061 1.26923C130.468 1.15385 129.876 1.11538 129.333 1.03846C128.938 1 128.543 0.961538 128.148 0.961538C127.358 0.884615 126.569 0.884615 125.828 0.807692C124.446 0.769231 122.965 0.692308 121.533 0.615385Z" fill="currentcolor" />
										</svg>
									</div>
									<ul className="image-list flex-three ">
										<li>
											<img src="/assets/images/avata/avt1.jpg" alt="Image list" />
										</li>
										<li>
											<img src="/assets/images/avata/avt2.jpg" alt="Image list" />
										</li>
										<li>
											<img src="/assets/images/avata/avt3.jpg" alt="Image list" />
										</li>
										<li>
											<img src="/assets/images/avata/avt4.jpg" alt="Image list" />
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-7 relative">
							<div className="testimonial-h3-content">
								<div className="heading-title">
									<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Our Testimonials</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">1250+ People Say About
										Our Tech
										<span className=" text-blue1 mask">
											<TextAnimation text1="Services" text2="Wetech" />
										</span>
									</h2>
								</div>
								<Swiper {...mySwiperTes3} className="swiper mySwipertes3 overflow-hiden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="testimonial-style3">
												<div className="testimonial-top flex-three">
													<i className="icon-des" />
													<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span></p>
												</div>
												<p className="des">Climb the mountain not to plant your flag but to
													embrace
													the ways challenge, enjoy the air, and behold the. Climb it
													see the world, not so the world can see you.
												</p>
												<div className="testimonial-bottom flex-two">
													<img src="/assets/images/brand/linktree-black.png" alt="image" />
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
													<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span></p>
												</div>
												<p className="des">Climb the mountain not to plant your flag but to
													embrace
													the ways challenge, enjoy the air, and behold the. Climb it
													see the world, not so the world can see you.
												</p>
												<div className="testimonial-bottom flex-two">
													<img src="/assets/images/brand/linktree-black.png" alt="image" />
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
													<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span></p>
												</div>
												<p className="des">Climb the mountain not to plant your flag but to
													embrace
													the ways challenge, enjoy the air, and behold the. Climb it
													see the world, not so the world can see you.
												</p>
												<div className="testimonial-bottom flex-two">
													<img src="/assets/images/brand/linktree-black.png" alt="image" />
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
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
