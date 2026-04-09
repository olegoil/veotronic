'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
export default function ServiceDetails() {
	const [isTab, setIsTab] = useState(1)
	const [isVisible, setIsVisible] = useState(true)
	const handleTab = (i) => {
		setIsTab(i)
		setIsVisible(false)
		setTimeout(() => {
			setIsVisible(true)
		}, 200)
	}
	return (
		<>

			<Layout breadcrumbTitle="Process Automation">
				<div>
					<section className="section-benefit pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Business Process Automation</span>
											<h2 className="title">Complete Digital Transformation of Your Company</h2>
											<p className="des">
This is clear business logic — digitized. Imagine orders from your website automatically landing in your CRM and accounting system, while the customer receives a personalized email. Imagine a payment reminder triggering exactly on the right day, and a management report generating with a single click. Automation connects your disconnected tools into a single, logical, self-managing workflow. The result: speed, zero errors, and complete transparency at every stage</p>
										</div>
										<img src="/assets/images/page/dvl-deatils3_new.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Smart Process Automation</h4>
												</div>
												<p>AI-powered chatbots, voice assistants, and intelligent request processing that work 24/7. Reduce response time by 80% and free your team from repetitive customer inquiries. Dramatic Cost Savings — Reduce manual labor costs by 15-40%.
												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Smart Workflow Automation</h4>
												</div>
												<p>Your team focuses on high-value work — AI handles the routine.
70% less routine • 90% faster document processing</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>No noise. Just work</h4>
												</div>
												<p>Reduces document overload, endless email threads, response wait times, and unnecessary meetings. Eliminates errors and document duplication. 80% less paperwork • 75% faster responses • Zero duplicates</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Transforming how your business operates.</h4>
												</div>
												<p>It's about transforming how your business operates. Real-Time Visibility — Know exactly what's happening, right now. Smarter Decisions — AI finds patterns humans can't see. Less Burnout — Your team will thank you</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* <section className="section-it-manager pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-7">
									<div className="it-manager-content">
										<div className="heading-title mb-20">
											<span className="sub-title texts-blue font-man">How to Manage</span>
											<h2 className="title">Our Managed IT Services let you Concentrate on What Matters
											</h2>
										</div>
										<ul className="nav nav-tabs-pricing nav-tabs-pricing-service" id="myTab" role="tablist">
											<li className="nav-item" onClick={() => handleTab(1)}>
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="approach-tab" data-bs-toggle="tab" data-bs-target="#approach-tab-pane" type="button" role="tab" aria-controls="approach-tab-pane" aria-selected="true">Our
													Approach</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="goals-tab" data-bs-toggle="tab" data-bs-target="#goals-tab-pane" type="button" role="tab" aria-controls="goals-tab-pane" aria-selected="false">Project
													Goals</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="advisory-tab" data-bs-toggle="tab" data-bs-target="#advisory-tab-pane" type="button" role="tab" aria-controls="advisory-tab-pane" aria-selected="false">Advisory</button>
											</li>
										</ul>
										<div className="tab-content" id="myTabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="approach-tab-pane" role="tabpanel" aria-labelledby="approach-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">At veroeos accusamus dignissimos ducimus blanditiis
														volupta
														delenite atque
														corrupti quos dolores et quas molestias excepturi sint occaecatie
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Efficient Sprint Planning</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Iterative Delivery Approach</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Standups and Demos</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Problem-solving</p>
														</li>
													</ul>
													<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="goals-tab-pane" role="tabpanel" aria-labelledby="goals-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">At veroeos accusamus dignissimos ducimus blanditiis
														volupta
														delenite atque
														corrupti quos dolores et quas molestias excepturi sint occaecatie
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Efficient Sprint Planning</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Iterative Delivery Approach</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Standups and Demos</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Problem-solving</p>
														</li>
													</ul>
													<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="advisory-tab-pane" role="tabpanel" aria-labelledby="advisory-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">At veroeos accusamus dignissimos ducimus blanditiis
														volupta
														delenite atque
														corrupti quos dolores et quas molestias excepturi sint occaecatie
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Efficient Sprint Planning</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Iterative Delivery Approach</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Standups and Demos</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Problem-solving</p>
														</li>
													</ul>
													<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/page/dvl-deatils2.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section> */}
					<section className="section-performance-auto pt-122 bg-2">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title m0-auto w-680 center mb-60">
										<span className="sub-title texts-blue font-man">Who Is Automation For?</span>
										<h2 className="title">Automation works everywhere. But it delivers the most impact in areas like:</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">Sales & Marketing</h4>
										<p className="des">Automated lead processing, trigger-based email campaigns, and real-time customer profile updates.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">Retail & E-commerce</h4>
										<p className="des">Automated processing and maintenance of perfect product data — texts, descriptions, photos, updates, and more</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">Finance & Accounting</h4>
										<p className="des">Automated invoicing, debtor reminders, and payment reconciliation. Keep your cash flow healthy and your books balanced</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">HR & Employee Onboarding</h4>
										<p className="des">Automate hiring workflows, document collection, and probation tracking to get new hires productive faster</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">Manufacturing & Logistics</h4>
										<p className="des">Real-time order status tracking, stage-based notifications, and automated document generation</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">Customer Service</h4>
										<p className="des">Smart ticket routing, automated responses, and feedback collection. Resolve issues faster and keep customers happy</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* <section className="video-service ">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="video-about relative">
										<img src="/assets/images/page/video-dvl.jpg" alt="image" />
										<VideoPopup />
									</div>
								</div>
							</div>
						</div>
					</section> */}
					{/*  Testimonial */}
					<section className="team-member-details pt-30 pb-30">
					<div className="tf-container">						
						<div className="row">
							<div className="col-lg-12">
								<div className="team-member-details-wrap">
									<div className="widget-team-single bb-blog">
										<span>Break free from routine</span>
										<p>How many hours a day does your team spend on routine, repetitive tasks? Data entry, approvals, reports, notifications… Workflow automation is not the future — it's the reality of an efficient business today. We help you identify these bottlenecks, digitize them, and set them to work autonomously. <span class="text-blue2"> Let your processes serve you — not the other way around</span></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
					{/* <section className="pt-122 pb-130">
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
					</section> */}
					{/* Contact */}
					<section className="section-contact contact-service-details bg-5 pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title text-white font-man">Work Inquiry</span>
											<h2 className="title text-white">Let's Work on Your Next Project?</h2>
											<p className="des font-man text-white">Ready to automate your business or build a custom solution? Our team is here to bring your ideas to life. Let's discuss your project</p>
										</div>
										<div className="contact-wrap flex-three mb-40">
											<div className="icon text-white">
												<i className="icon-phones" />
											</div>
											<div className="contact-content">
												<span className="font-man text-white">Call For Inquiry</span>
												<p>+236 (456) 896 22</p>
											</div>
										</div>
										<div className="contact-wrap flex-three">
											<div className="icon text-white">
												<i className="icon-envelopes" />
											</div>
											<div className="contact-content">
												<span className="font-man text-white">Send Us Email</span>
												<p>infotech@gmail.com</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="form-contact-home1 style2">
										<div className="inner-title-form center mb-30">
											<h3 className="title-form">Need Help With Your Project?</h3>
											<p>We're ready to help. Let's discuss your goals and build something great together.</p>
										</div>
										<form action="/" className="form-contact-home">
											<div className="input-group flex-one">
												<fieldset className="relative mb-20">
													<input type="text" className="form-control" id="name-input" placeholder="Name" />
													<i className="icon-user" />
												</fieldset>
												<fieldset className="relative mb-20">
													<input type="email" className="form-control" id="email-input" placeholder="Email" />
													<i className="icon-envelopes" />
												</fieldset>
											</div>
											<fieldset className="mb-20">
												<div className="nice-select" tabIndex={0}>
													<span className="current">Choose Services</span>
													<ul className="list">
														<li data-value className="option selected focus">Choose Services</li>
														<li data-value="service" className="option">Choose Services</li>
														<li data-value="service" className="option">Choose Services</li>
														<li data-value="service" className="option">Choose Services</li>
													</ul>
												</div>
											</fieldset>
											<fieldset className=" mb-15">
												<textarea id="mess" name="mess" rows={4} cols={50} placeholder="Message" />
											</fieldset>
											<fieldset className="center">
												<button className="btn-submit" type="submit">Send Message Us <i className="icon-right-icon" /></button>
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}