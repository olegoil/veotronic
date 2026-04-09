'use client'
import CounterNumber from "@/components/elements/CounterNumber"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { collection1, collection2, myTeamMember, myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function AboutCompany() {

	return (
		<>

			<Layout breadcrumbTitle="About Company">
				
				<div>
					<section className="section-about-us about-us-page pd-section relative">
						<div className="tf-container">
							<div className="row">
								<div className="col-12 col-md-6 col-lg-6 col-xl-4">
									<div className="about-us-content">
										<div className="heading-title">
											<span className="sub-title texts-blue font-man">About Company</span>
											<h2 className="title">Make your life easier with help
												from <span className="texts-blue">Wiatech</span></h2>
										</div>
										<ul className="icon-listing">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Professional Team Member</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Awards Winning IT Solutions Company</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Dedicated Tech Services</p>
											</li>
										</ul>
										{/* <Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link> */}
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-6 col-xl-4">
									<div className="about-us-images relative">
										<img src="/assets/images/page/about1.jpg" alt="image" />
									</div>
								</div>
								<div className="col-12 col-md-12 col-lg-12 col-xl-4">
									<div className="about-us-counter">
										<h3 className="title">We’ve <Link href="/#">25+ Years</Link> Of Experience <br />
											In Tech Services
										</h3>
										<p className="des">Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremque laudantium
											totam rem aperiam, eaque epsa inventore
										</p>
										<div className="line" />
										{/* <div className="flex-one">
											<div className="counter-style1 tf-counters">
												<div className="icon">
													<i className="icon-costumer-11" />
												</div>
												<div className="number-counter number-kplus numbers" data-to={56} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={56} /></div>
												<p className="des">Satisfied Customers</p>
											</div>
											<div className="counter-style1 tf-counters">
												<div className="icon">
													<i className="icon-costumer-11" />
												</div>
												<div className="number-counter number-mplus numbers" data-to={56} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={56} /></div>
												<p className="des">Project Complete</p>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</section>
					
					{/* Feature */}
					<section>
						<div className="tf-container full">
							<div className="row feature-about-wrap">
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-expert" />
										</div>
										<h2 className="title"><Link href="/#">Passionate</Link></h2>
										<p className="des">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque
										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-hands" />
										</div>
										<h2 className="title"><Link href="/#">Respectful</Link></h2>
										<p className="des">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque
										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-ownership" />
										</div>
										<h2 className="title"><Link href="/#">Ownership</Link></h2>
										<p className="des">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque
										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-wrench" />
										</div>
										<h2 className="title"><Link href="/#">Clients Services</Link></h2>
										<p className="des">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  quote */}
					<section className=" pd-section">
						<div className="tf-container">
							<div className="row quote-style">
								<div className="col-md-4">
									<div className="image">
										<img src="/assets/images/page/about2.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-8">
									<div className="content">
										<p className="des">" Every great dream begins with a dreamer. Always remember, you have
											within you the strength, the patience, and the passion to reach for the stars to
											change the world. "
										</p>
										<div className="flex-three name">
											<span>--- Harriet Tubman</span>
											<img src="/assets/images/testimonial/name.png" alt="image" />
										</div>
										<div className="flex-three image-wrap">
											<ul className="image-list flex-three">
												<li>
													<img src="/assets/images/avata/avt-team1.jpg" alt="Image list" />
												</li>
												<li>
													<img src="/assets/images/avata/avt-team2.jpg" alt="Image list" />
												</li>
												<li>
													<img src="/assets/images/avata/avt-team3.jpg" alt="Image list" />
												</li>
												<li>
													<img src="/assets/images/avata/avt-team4.jpg" alt="Image list" />
												</li>
											</ul>
											<div className="content-image">
												<p>10m+ Trusted Global Customers</p>
												<div className="icon-shape">
													<svg width={124} height={5} viewBox="0 0 124 5" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M114.168 0.615385C111.478 0.5 108.742 0.384615 106.006 0.269231C105.125 0.230769 104.198 0.230769 103.317 0.192308C101.369 0.153846 99.4215 0.115385 97.4739 0.0769231C96.4073 0.0384615 95.2944 0.0384615 94.2278 0C93.9032 0 93.5786 0 93.3004 0C92.6048 0 91.9092 0 91.1673 0C87.9676 0 84.7679 0 81.5683 0C80.8263 0 80.038 0 79.2961 0.0384615C77.3948 0.0769231 75.5399 0.0769231 73.6387 0.115385C71.5056 0.153846 69.3725 0.153846 67.2393 0.192308C63.8078 0.269231 60.3299 0.346154 56.8984 0.423077C54.9044 0.461538 52.9104 0.5 50.9164 0.538462C47.4849 0.653846 44.0534 0.769231 40.6218 0.884615C38.7206 0.961538 36.8657 1 34.9645 1.07692C31.3938 1.26923 27.8232 1.42308 24.2525 1.57692C22.3513 1.65385 20.45 1.73077 18.5488 1.84615C15.0245 2.07692 11.4539 2.34615 7.92961 2.61538C7.18765 2.65385 6.39933 2.73077 5.61101 2.76923C4.1271 2.88462 2.59683 3.07692 1.06656 3.23077C0.973811 3.23077 0.881067 3.26923 0.788323 3.26923C0.602836 3.26923 0.46372 3.34615 0.324604 3.46154C0.0927439 3.65385 0 3.88462 0 4.11539C0 4.34615 0.0927439 4.57692 0.324604 4.73077C0.510092 4.88462 0.834695 5 1.06656 5C2.92143 4.84615 4.72994 4.65385 6.58482 4.5C8.30058 4.38462 10.0163 4.26923 11.7321 4.15385C13.587 4.03846 15.4419 3.88462 17.3431 3.76923C18.0851 3.73077 18.827 3.65385 19.6153 3.61538C22.5368 3.5 25.4118 3.34615 28.3333 3.23077C30.1418 3.15385 31.9503 3.07692 33.7588 3C34.5007 2.96154 35.2427 2.92308 35.9846 2.88462C38.8597 2.76923 41.7348 2.69231 44.6098 2.57692C46.372 2.53846 48.0877 2.46154 49.8499 2.42308C50.4527 2.42308 51.0092 2.38462 51.612 2.38462C54.7189 2.30769 57.8258 2.26923 60.9328 2.19231C62.6485 2.15385 64.4107 2.11538 66.1264 2.07692C66.7293 2.07692 67.3785 2.03846 67.9813 2.03846C71.181 2 74.3806 2 77.6267 1.96154C79.6207 1.96154 81.6147 1.92308 83.6087 1.92308C86.9938 1.92308 90.4253 1.92308 93.8105 1.96154C94.4597 1.96154 95.1553 2 95.8045 2C97.7057 2.03846 99.5606 2.07692 101.462 2.15385C102.853 2.19231 104.291 2.23077 105.682 2.26923C106.702 2.30769 107.676 2.34615 108.696 2.38462C111.617 2.5 114.585 2.65385 117.507 2.80769C118.249 2.84615 118.99 2.88462 119.732 2.92308C120.521 2.96154 121.355 3 122.144 3.07692C122.283 3.07692 122.376 3.11539 122.515 3.15385C122.839 3.19231 123.118 3.19231 123.396 3.03846C123.674 2.92308 123.86 2.69231 123.952 2.46154C124.138 1.96154 123.767 1.42308 123.118 1.26923C122.561 1.15385 122.005 1.11538 121.495 1.03846C121.124 1 120.753 0.961538 120.382 0.961538C119.64 0.884615 118.898 0.884615 118.202 0.807692C116.904 0.769231 115.513 0.692308 114.168 0.615385Z" fill="currentcolor" />
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Marque text */}
					<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">Web Design</span><i className="icon-asterisk" />
													<span className="text-slider">Digital Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Product Design</span><i className="icon-asterisk" />
													<span className="text-slider">Email Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Branding &amp; Design</span><i className="icon-asterisk" />
													<span className="text-slider">SEO</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
													<span className="text-slider">Data Security</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
													<span className="text-slider">Data Security</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  team */}
					<section className="pt-122 bg-1">
						<div className="tf-container full">
							<div className="row mb-60">
								<div className="col-lg-12">
									<div className="heading-title center m0-auto w-680">
										<span className="sub-title texts-blue font-man">Meet Our Team</span>
										<h2 className="title text-white">We’ve Exclusive Team member Meet our Professionals</h2>
										<h2>
										</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<Swiper {...myTeamMember} className="swiper myteam-member">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Tommie J. Saruman</Link></h4>
														<p className="job">Senior Consultant</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team1.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Tommie J. Saruman</Link></h4>
														<p className="job">Senior Consultant</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team2.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
														<p className="job">Apps Designer</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team3.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
														<p className="job">Apps Designer</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team4.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Kenneth V. Stutler</Link></h4>
														<p className="job">Designer Manager</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team5.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Robert B. Zellmer</Link></h4>
														<p className="job">Apps Designer</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team6.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
														<p className="job">Apps Designer</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team7.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-team">
													<div className="content">
														<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
														<p className="job">Apps Designer</p>
													</div>
													<div className="image relative">
														<Link href="/team-details">
															<img src="/assets/images/team/team8.jpg" alt="image" />
														</Link>
														<ul className="social-team flex-five">
															<li>
																<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
															</li>
															<li>
																<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
															</li>
														</ul>
													</div>
													<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
						</div>
					</section>
					{/*  fact */}
					<section className="pt-122 pb-130 bg-1 ">
						<div className="tf-container">
							<div className="fact-widget fact-about-us">
								<div className="heading-title">
									<span className="sub-title text-white font-man">Company Fun Fact</span>
									<h2 className="title text-white">Behind the Scenes <br /> Surprising Fun Facts <br /> About
										Wiatech</h2>
								</div>
								<div className="counter-area flex">
									<div className="counter-items tf-counters">
										<div className="icon">
											<i className="icon-verified" />
										</div>
										<div className="content">
											<div className="number kplus  numbers" data-speed={2000} data-to={5} data-inviewport="yes"><CounterNumber count={5} />
											</div>
											<p>Project Complete</p>
										</div>
									</div>
									<div className="counter-items tf-counters">
										<div className="icon">
											<i className="icon-reviews" />
										</div>
										<div className="content">
											<div className="number kplus numbers" data-speed={2000} data-to={3} data-inviewport="yes"><CounterNumber count={3} />
											</div>
											<p>Satisficed Clients</p>
										</div>
									</div>
									<div className="counter-items tf-counters">
										<div className="icon">
											<i className="icon-medal-gif" />
										</div>
										<div className="content">
											<div className="number plus numbers" data-speed={2000} data-to={85} data-inviewport="yes"><CounterNumber count={85} />
											</div>
											<p>Awards Winning</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="video-about-us bg-1">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="video-about">
										<img src="/assets/images/page/video-about.jpg" alt="image" />
										<VideoPopup />
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Testimonial */}
					<section className="testimonial-video pb-130">
						<div className="tf-container">
							<div className="row mb-70">
								<div className="col-lg-12">
									<div className="heading-title center">
										<span className="sub-title text-blue1 font-man">Our Testimonials</span>
										<h2 className="title">1250+ Clients Say <span className="text-blue1">About Us</span></h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 relative">
									<div className="myteshome5-wrap overflow-hiden">
										<Swiper {...myTesHome5} className="swiper myteshome5 ">
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
					{/*  Partner */}
					<section className="section-partner-h2 style-white pt-122 pb-130 bg-4 ">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title center mb-60">
										<span className="sub-title text-blue1 font-man">Global Partners</span>
										<h2 className="title">We’ve 1250+ Global <span className="text-blue1">partners</span></h2>
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
				</div>

			</Layout>
		</>
	)
}