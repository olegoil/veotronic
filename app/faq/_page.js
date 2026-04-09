'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Faq() {
	const [isTab, setIsTab] = useState(1)
	const [isVisible, setIsVisible] = useState(true)
	const handleTab = (i) => {
		setIsTab(i)
		setIsVisible(false)
		setTimeout(() => {
			setIsVisible(true)
		}, 2000)
	}

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<Layout breadcrumbTitle="FAQ">
				<div>
					<section className="faq-section pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="heading-title">
										<span className="sub-title texts-blue font-man">FAQ</span>
										<h2 className="title">Frequently Asked Questions</h2>
										<p className="des mb-40">Sed ut perspiciatis unde omniste natus voluptatem accusantiume
											rem aperia eaque quae abillo inventore
											veritatis quasi architecto beatae vitae</p>
										<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>
									</div>
								</div>
								<div className="col-md-7">
									<div className="tab-faq-content">
										<ul className="nav nav-pills tab-faq-page mb-30" id="pills-tab" role="tablist">
											<li className="nav-item" onClick={() => handleTab(1)}>
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="general-tab" data-bs-toggle="pill" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">General</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="service-tab" data-bs-toggle="pill" data-bs-target="#service" type="button" role="tab" aria-controls="service" aria-selected="false">Service</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="product-tab" data-bs-toggle="pill" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="false">Product</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(4)}>
												<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="team-tab" data-bs-toggle="pill" data-bs-target="#team" type="button" role="tab" aria-controls="team" aria-selected="false">Team</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(5)}>
												<button className={isTab == 5 ? "nav-link active" : "nav-link"} id="pricing-tab" data-bs-toggle="pill" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false">Pricing</button>
											</li>
										</ul>
										<div className="tab-content" id="pills-tabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="general" role="tabpanel" aria-labelledby="general-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionExample">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(16)}>
															<span className={isAccordion == 16 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																How much does it cost to build an app?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 16 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(17)}>
															<span className={isAccordion == 17 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																How do you create an app without any coding?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 17 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(18)}>
															<span className={isAccordion == 18 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																Can you create an app for free?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 18 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(19)}>
															<span className={isAccordion == 19 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
																How can I create my own app?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 19 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(20)}>
															<span className={isAccordion == 20 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
																How do I start an app business?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 20 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="service" role="tabpanel" aria-labelledby="service-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionExample">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(21)}>
															<span className={isAccordion == 21 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																How much does it cost to build an app?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 21 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(22)}>
															<span className={isAccordion == 22 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																How do you create an app without any coding?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 22 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(23)}>
															<span className={isAccordion == 23 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																Can you create an app for free?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 23 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(24)}>
															<span className={isAccordion == 24 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
																How can I create my own app?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 24 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(25)}>
															<span className={isAccordion == 25 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
																How do I start an app business?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 25 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="product" role="tabpanel" aria-labelledby="product-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionExample">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(26)}>
															<span className={isAccordion == 26 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																How much does it cost to build an app?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 26 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(27)}>
															<span className={isAccordion == 27 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																How do you create an app without any coding?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 27 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(28)}>
															<span className={isAccordion == 28 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																Can you create an app for free?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 28 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(29)}>
															<span className={isAccordion == 29 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
																How can I create my own app?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 29 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(30)}>
															<span className={isAccordion == 30 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
																How do I start an app business?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 30 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="team" role="tabpanel" aria-labelledby="team-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionExample">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(1)}>
															<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																How much does it cost to build an app?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
															<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																How do you create an app without any coding?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
															<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																Can you create an app for free?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
															<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
																How can I create my own app?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(5)}>
															<span className={isAccordion == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
																How do I start an app business?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="pricing" role="tabpanel" aria-labelledby="pricing-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionExample">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(6)}>
															<span className={isAccordion == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																How much does it cost to build an app?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(7)}>
															<span className={isAccordion == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																How do you create an app without any coding?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(8)}>
															<span className={isAccordion == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																Can you create an app for free?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(9)}>
															<span className={isAccordion == 9 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
																How can I create my own app?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(10)}>
															<span className={isAccordion == 10 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
																How do I start an app business?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
															<div className="accordion-body">
																We approached WiaTech with complex project Designing a website can
																involve various such
																as layout, graphics, content, and experience more specific response
																elaborate
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pt-122 bg-2">
						<div className="tf-container">
							<div className="row mb-60">
								<div className="col-md-12">
									<div className="heading-title center m0-auto w-680 ">
										<span className="sub-title texts-blue font-man">Watch The Video</span>
										<h2 className="title">Our focus is on Delivering superior value to our clients
											for company modification</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="video-faq relative">
										<img src="/assets/images/page/video-faq.jpg" alt="image" />
										<VideoPopup />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="faq-section faq2-section pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="heading-title">
										<span className="sub-title texts-blue font-man">FAQ</span>
										<h2 className="title">Frequently Asked Questions</h2>
										<p className="des mb-40">Sed ut perspiciatis unde omniste natus voluptatem accusantiume
											rem aperia eaque quae abillo inventore
											veritatis quasi architecto beatae vitae</p>
										<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>
									</div>
								</div>
								<div className="col-md-7">
									<div className="tab-faq-content">
										<div className="accordion accordion-h4" id="accordionExample">
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(11)}>
													<span className={isAccordion == 11 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														How much does it cost to build an app?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(12)}>
													<span className={isAccordion == 12 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														How do you create an app without any coding?
													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(13)}>
													<span className={isAccordion == 13 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Can you create an app for free?
													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 13 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(14)}>
													<span className={isAccordion == 14 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
														How can I create my own app?
													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 14 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(15)}>
													<span className={isAccordion == 15 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
														How do I start an app business?
													</span>
												</h3>
												<div id="collapsefire" className={isAccordion == 15 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
										</div>
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