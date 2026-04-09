'use client'
import Layout from "@/components/layout/Layout"
import { brandLogo2 } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function TeamDetails() {

	return (
		<>

			<Layout breadcrumbTitle="Team Details">
				<section className="team-member-details pt-122 pb-130">
					<div className="tf-container">
						<div className="row mb-70">
							<div className="col-md-6">
								<div className="heading-title">
									<span className="sub-title texts-blue font-man">Hello i’m</span>
									<h2 className="title">Dennis A. McFadden Web Developer</h2>
									<p className="des">We’ve 25+ Years Of Experience In Tech Services</p>
								</div>
							</div>
							<div className="col-md-6">
								<p className="des-team-details">" Every great dream begins dreamer Always remember you have within you the strength to
									patience, and the passion to reach " </p>
								<div className="flex-three name">
									<span>--- Harriet Tubman</span>
									<img src="/assets/images/testimonial/name.png" alt="image" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<img src="/assets/images/team/team-single.jpg" alt="image" />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="team-member-details-wrap">
									<div className="widget-team-single bb-blog">
										<span>Learn Something Us</span>
										<p>We denounce with righteous indignation and dislike men
											who are so beguiled and <Link href="/#">demoralize</Link> by the charms pleasure
											the moment blinded desire that they cannot foresee the pain
											and trouble that bounded to ensue and equal blame</p>
									</div>
									<div className="widget-team-single bb-blog">
										<div className="row">
											<div className="col-md-6">
												<div className="skill">
													<h3 className="title">Skills</h3>
													<div className="progress-area ">
														<div className="progress-wrap">
															<div className="pro-items">
																<div className="pro-head">
																	<h6 className="title">
																		Development
																	</h6>
																	<span className="point">
																		85%
																	</span>
																</div>
																<div className="progress">
																	<div className="progress-value" />
																</div>
															</div>
															<div className="pro-items">
																<div className="pro-head">
																	<h6 className="title">
																		Marketing
																	</h6>
																	<span className="point">
																		93%
																	</span>
																</div>
																<div className="progress">
																	<div className="progress-value style-two" />
																</div>
															</div>
															<div className="pro-items">
																<div className="pro-head">
																	<h6 className="title">
																		IT Management
																	</h6>
																	<span className="point">
																		72%
																	</span>
																</div>
																<div className="progress">
																	<div className="progress-value style-three" />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="experience">
													<h3 className="title">Experience</h3>
													<div className="experience-wrap">
														<div className="experience-item">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">UI/UX Lead Designer</Link></h5>
																<span className="date-skill">2022 - PRESENT</span>
															</div>
															<p className="browser">Google</p>
														</div>
														<div className="experience-item">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">Senior Engineer (CSE)</Link></h5>
																<span className="date-skill">2020 - 2022</span>
															</div>
															<p className="browser">Awards.com</p>
														</div>
														<div className="experience-item">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">IT Manager &amp; Consultant</Link></h5>
																<span className="date-skill">2018 - 2019</span>
															</div>
															<p className="browser">Microsoft</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="widget-team-single bb-blog">
										<div className="row">
											<div className="col-md-6">
												<div className="education">
													<h3 className="title">Education</h3>
													<div className="experience-wrap">
														<div className="experience-item">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">Global University</Link><span className="of">of California</span></h5>
																<span className="date-skill">2018</span>
															</div>
															<p className="browser">BSC in CSE</p>
														</div>
														<div className="experience-item">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">Stanford University</Link><span className="of">of USA</span></h5>
																<span className="date-skill">2015</span>
															</div>
															<p className="browser">Diploma in CSE</p>
														</div>
														<div className="experience-item">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">Kolom University</Link><span className="of">of UK</span></h5>
																<span className="date-skill">2013</span>
															</div>
															<p className="browser">Business Study</p>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="awards">
													<h3 className="title">Awards</h3>
													<div className="awards-wrap">
														<div className="awards-item bb-blog hover-images">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">UX Designer</Link></h5>
																<span className="date-skill">2022</span>
															</div>
															<p className="browser">Best designer awards</p>
															<div className="team-hover" style={{ backgroundImage: 'url("./assets/images/team/team-hover.jpg")' }} />
														</div>
														<div className="awards-item bb-blog hover-images">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">Product Designer</Link></h5>
																<span className="date-skill">2020</span>
															</div>
															<p className="browser">Best designer awards</p>
															<div className="team-hover" style={{ backgroundImage: 'url("./assets/images/team/team-hover.jpg")' }} />
														</div>
														<div className="awards-item bb-blog hover-images">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">Lead Designer</Link></h5>
																<span className="date-skill">2018</span>
															</div>
															<p className="browser">Best designer awards</p>
															<div className="team-hover" style={{ backgroundImage: 'url("./assets/images/team/team-hover.jpg")' }} />
														</div>
														<div className="awards-item bb-blog hover-images">
															<div className="flex-two">
																<h5 className="title"><Link href="/#">UX Project Manager</Link></h5>
																<span className="date-skill">2016</span>
															</div>
															<p className="browser">Best designer awards</p>
															<div className="team-hover" style={{ backgroundImage: 'url("./assets/images/team/team-hover.jpg")' }} />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="widget-team-brand">
										<h3 className="title mb-50">Global Clients</h3>
										<Swiper {...brandLogo2} className="swiper brand-logo2 overflow-hiden mb-40">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<img src="/assets/images/brand/br1.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br2.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br3.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br4.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br5.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br6.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br7.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br8.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br9.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br10.png" alt="image" />
												</SwiperSlide>
											</div>
										</Swiper>
										<Swiper {...brandLogo2} className="swiper brand-logo2 overflow-hiden">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<img src="/assets/images/brand/br5.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br6.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br7.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br8.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br9.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br10.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br1.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br2.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br3.png" alt="image" />
												</SwiperSlide>
												<SwiperSlide>
													<img src="/assets/images/brand/br4.png" alt="image" />
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}