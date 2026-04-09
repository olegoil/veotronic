'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseStudies1 from "@/components/sections/CaseStudies1"
import { caseStudiesSlider } from "@/utils/swiperOptions"

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

			<Layout breadcrumbTitle="Unified API Platform">
				<div>
					<section className="can-do-it pt-130 pb-130">
						<div className="tf-container">
															<div className="row">
																<div className="col-md-6">
																	<div className="can-do-it-image relative">
																		<div className="elip" />
																		<img src="/assets/images/page/image-feature-h412_new.jpg" alt="image" className="cdit-image" />
																		<img src="/assets/images/page/image-feature-h413_new.jpg" alt="image" className="cdit-image1" />
																		{/* <div className="quote-feature-wrap">
																			<div className="counter tf-counter">
																				<div className="number number-style" data-speed={2000} data-to={10} data-inviewport="yes"><CounterNumber count={10} /></div>
																			</div>
																			<span className="text-white">Years Of Experience</span>
																			<div className="icon-svg">
																				<svg width={148} height={5} viewBox="0 0 148 5" fill="none" xmlns="http://www.w3.org/2000/svg">
																					<path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C116.617 2.03846 118.83 2.07692 121.1 2.15385C122.76 2.19231 124.476 2.23077 126.136 2.26923C127.354 2.30769 128.516 2.34615 129.734 2.38462C133.221 2.5 136.763 2.65385 140.25 2.80769C141.135 2.84615 142.021 2.88462 142.906 2.92308C143.847 2.96154 144.844 3 145.784 3.07692C145.951 3.07692 146.061 3.11539 146.227 3.15385C146.615 3.19231 146.947 3.19231 147.279 3.03846C147.611 2.92308 147.832 2.69231 147.943 2.46154C148.164 1.96154 147.722 1.42308 146.947 1.26923C146.283 1.15385 145.618 1.11538 145.01 1.03846C144.567 1 144.124 0.961538 143.681 0.961538C142.796 0.884615 141.91 0.884615 141.08 0.807692C139.53 0.769231 137.87 0.692308 136.265 0.615385Z" fill="currentcolor" />
																				</svg>
																			</div>
																			<div className="review text-white">
																				<i className="icon-start" />
																				<i className="icon-start" />
																				<i className="icon-start" />
																				<i className="icon-start" />
																				<i className="icon-start" />
																				<span>Trustpoint</span>
																			</div>
																			<div className="start">
																				<span>4.9</span>
																			</div>
																		</div> */}
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="can-do-it-content">
																		<h2 className="title mb-50">Unified API Platform — Connect Everything
																			<span className="text-black mask ms-2"></span>
																		</h2>
																		<p className="cdit-text mb-40">
																		One interface for all your systems: databases, AI models, apps, and devices. We build powerful, scalable, and secure RESTful APIs with clear documentation and seamless integration. Unify your business processes behind a single entry point. Simple. Secure. Connected.
																			
																		</p>
																		<div className="flex icon-wrap-cdit">
																			<div className="icon-can-do-it flex">
																				<div className="icon">
																					<i className="icon-product-development" />
																				</div>
																				<h5 className="title">Automated Data Exchange Between Services</h5>
																			</div>
																			<div className="icon-can-do-it flex">
																				<div className="icon">
																					<i className="icon-nanotechnology" />
																				</div>
																				<h5 className="title">Accelerate Processes with a Unified Connection Standard</h5>
																			</div>
																		</div>
																		{/* <div className="flex-three image-wrap">
																			<ul className="image-list flex-three">
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
																			<div className="content-image">
																				<p><span>10m+</span> Customers</p>
																				<div className="icon-shape">
																					<svg width={124} height={5} viewBox="0 0 124 5" fill="none" xmlns="http://www.w3.org/2000/svg">
																						<path d="M114.168 0.615385C111.478 0.5 108.742 0.384615 106.006 0.269231C105.125 0.230769 104.198 0.230769 103.317 0.192308C101.369 0.153846 99.4215 0.115385 97.4739 0.0769231C96.4073 0.0384615 95.2944 0.0384615 94.2278 0C93.9032 0 93.5786 0 93.3004 0C92.6048 0 91.9092 0 91.1673 0C87.9676 0 84.7679 0 81.5683 0C80.8263 0 80.038 0 79.2961 0.0384615C77.3948 0.0769231 75.5399 0.0769231 73.6387 0.115385C71.5056 0.153846 69.3725 0.153846 67.2393 0.192308C63.8078 0.269231 60.3299 0.346154 56.8984 0.423077C54.9044 0.461538 52.9104 0.5 50.9164 0.538462C47.4849 0.653846 44.0534 0.769231 40.6218 0.884615C38.7206 0.961538 36.8657 1 34.9645 1.07692C31.3938 1.26923 27.8232 1.42308 24.2525 1.57692C22.3513 1.65385 20.45 1.73077 18.5488 1.84615C15.0245 2.07692 11.4539 2.34615 7.92961 2.61538C7.18765 2.65385 6.39933 2.73077 5.61101 2.76923C4.1271 2.88462 2.59683 3.07692 1.06656 3.23077C0.973811 3.23077 0.881067 3.26923 0.788323 3.26923C0.602836 3.26923 0.46372 3.34615 0.324604 3.46154C0.0927439 3.65385 0 3.88462 0 4.11539C0 4.34615 0.0927439 4.57692 0.324604 4.73077C0.510092 4.88462 0.834695 5 1.06656 5C2.92143 4.84615 4.72994 4.65385 6.58482 4.5C8.30058 4.38462 10.0163 4.26923 11.7321 4.15385C13.587 4.03846 15.4419 3.88462 17.3431 3.76923C18.0851 3.73077 18.827 3.65385 19.6153 3.61538C22.5368 3.5 25.4118 3.34615 28.3333 3.23077C30.1418 3.15385 31.9503 3.07692 33.7588 3C34.5007 2.96154 35.2427 2.92308 35.9846 2.88462C38.8597 2.76923 41.7348 2.69231 44.6098 2.57692C46.372 2.53846 48.0877 2.46154 49.8499 2.42308C50.4527 2.42308 51.0092 2.38462 51.612 2.38462C54.7189 2.30769 57.8258 2.26923 60.9328 2.19231C62.6485 2.15385 64.4107 2.11538 66.1264 2.07692C66.7293 2.07692 67.3785 2.03846 67.9813 2.03846C71.181 2 74.3806 2 77.6267 1.96154C79.6207 1.96154 81.6147 1.92308 83.6087 1.92308C86.9938 1.92308 90.4253 1.92308 93.8105 1.96154C94.4597 1.96154 95.1553 2 95.8045 2C97.7057 2.03846 99.5606 2.07692 101.462 2.15385C102.853 2.19231 104.291 2.23077 105.682 2.26923C106.702 2.30769 107.676 2.34615 108.696 2.38462C111.617 2.5 114.585 2.65385 117.507 2.80769C118.249 2.84615 118.99 2.88462 119.732 2.92308C120.521 2.96154 121.355 3 122.144 3.07692C122.283 3.07692 122.376 3.11539 122.515 3.15385C122.839 3.19231 123.118 3.19231 123.396 3.03846C123.674 2.92308 123.86 2.69231 123.952 2.46154C124.138 1.96154 123.767 1.42308 123.118 1.26923C122.561 1.15385 122.005 1.11538 121.495 1.03846C121.124 1 120.753 0.961538 120.382 0.961538C119.64 0.884615 118.898 0.884615 118.202 0.807692C116.904 0.769231 115.513 0.692308 114.168 0.615385Z" fill="currentcolor" />
																					</svg>
																				</div>
																			</div>
																		</div> */}
																	</div>
																</div>
															</div>
							</div>
					</section>
					<section className="section-feature bg-2 relative ">
				<div className="tf-container full">
					<div className="row">
						<div className="col-lg-12 col-xl-5">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall">Unified API Platform</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">RESTful API — Turnkey Development
									</h2>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">A single interface that hides the complexity of multiple systems behind one entry point. Standardize communication across databases, AI models, enterprise applications, and connected devices — using one language and one protocol. Unify all your business processes in a single system.</p>
								</div>
								<div className="heading-title mb-40">
									
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">We build powerful, scalable, and secure RESTful APIs for your business. Optimized architecture, comprehensive documentation, and seamless integration with any system — from legacy software to modern cloud platforms.</p>
								</div>
							
							</div>
						</div>
						<div className="col-lg-12 col-xl-7">
							<div className="image relative">
								<img src="/assets/images/page/feature-h12_new.jpg" alt="image" />
								{/* <div className="quote-feature-wrap">
									<div className="counter  tf-counters">
									</div>
									<span className="text-white">Years Of Experience</span>
									<div className="icon-svg">
										<svg width={148} height={5} viewBox="0 0 148 5" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C116.617 2.03846 118.83 2.07692 121.1 2.15385C122.76 2.19231 124.476 2.23077 126.136 2.26923C127.354 2.30769 128.516 2.34615 129.734 2.38462C133.221 2.5 136.763 2.65385 140.25 2.80769C141.135 2.84615 142.021 2.88462 142.906 2.92308C143.847 2.96154 144.844 3 145.784 3.07692C145.951 3.07692 146.061 3.11539 146.227 3.15385C146.615 3.19231 146.947 3.19231 147.279 3.03846C147.611 2.92308 147.832 2.69231 147.943 2.46154C148.164 1.96154 147.722 1.42308 146.947 1.26923C146.283 1.15385 145.618 1.11538 145.01 1.03846C144.567 1 144.124 0.961538 143.681 0.961538C142.796 0.884615 141.91 0.884615 141.08 0.807692C139.53 0.769231 137.87 0.692308 136.265 0.615385Z" fill="currentcolor" />
										</svg>
									</div>
									<div className="review text-white">
										<i className="icon-start" />
										<i className="icon-start" />
										<i className="icon-start" />
										<i className="icon-start" />
										<i className="icon-start" />
										<span>Trustpoint</span>
									</div>
									<div className="start">
										<span>4.9</span>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
					</section>	
						<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Why?</span>
											<h2 className="title">API integration saves up to 40% of employee time and reduces data transfer errors</h2>
											<p className="des">
Without a unified API platform, your systems work in silos — manual data entry, duplicate records, delayed updates, and costly point-to-point integrations. A single API standard connects everything: CRM, ERP, marketplaces, accounting, and AI models. The result? Real-time data flow, lower costs, faster processes, and a business that runs itself.</p>
										</div>
										<img src="/assets/images/page/dvl-deatils4_new.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Universal Connectivity</h4>
												</div>
												<p>Connect any service — CRM, accounting, logistics — through a single interface. Secure encryption and role-based access control protect your data across every integration</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Data Synchronization</h4>
												</div>
												<p>Automate data exchange between CRM, ERP, marketplaces, and other services. Maintain a single customer database across CRM, email, telephony, and all your business tools</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Scalability</h4>
												</div>
												<p>Add new integrations without rewriting code. Accelerate processes with a unified connection standard that grows with your business.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Cost Reduction</h4>
												</div>
												<p>Replace multiple individual APIs with one unified solution. Significantly reduce development and maintenance costs for custom integrations</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="service-section-4 pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-760 mb-70">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Where Unified API Platform Delivers the Most Value</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Perfect for industries that rely on multiple systems and seamless data flow
									{/* <span className="text-black mask">Development</span> */}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="nav nav-tabs-service nav-justified mb-70" id="myTab" role="tablist">
								<li className="nav-item" onClick={() => handleTab(1)}>
									<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target="#financial-tab-pane" type="button" role="tab" aria-controls="financial-tab-pane" aria-selected="true"><i className="icon-nanotechnology" /> AI Platforms
									</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(2)}>
									<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="retail-tab" data-bs-toggle="tab" data-bs-target="#retail-tab-pane" type="button" role="tab" aria-controls="retail-tab-pane" aria-selected="false"><i className="icon-product-development" /> Retail & E-commerce
										</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(3)}>
									<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false"><i className="icon-deposit" /> Finance & Banking</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(4)}>
									<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="healthcare-tab" data-bs-toggle="tab" data-bs-target="#healthcare-tab-pane" type="button" role="tab" aria-controls="healthcare-tab-pane" aria-selected="false"><i className="icon-healthcare" />Healthcare & Medicine</button>
								</li>
							</ul>
							<div className="tab-content" id="myTabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="financial-tab-pane" role="tabpanel" aria-labelledby="financial-tab" tabIndex={0}>
									<div className="row tab-service-wrap">
										<div className="col-lg-7">
											<div className="tab-service-content">
												<div className="heading-title">
													<h2 className="title">AI Platforms & Chatbots</h2>
													<p className="des mb-30">Businesses want to use the best AI models without being locked into a single vendor.  If one model fails, traffic automatically routes to another — ensuring zero downtime. Simple questions go to cheaper models while complex tasks reach flagship AI. We also ensure security by blocking sensitive data from cloud AI and routing it through your local LLM.</p>
													<ul className="icon-listing mb-50">
														<li className="flex-three">
															<i className="icon-Check" />
															<p >Unified AI Gateway — seamless switching between OpenAI, Anthropic, Google Gemini</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Failover — if ChatGPT goes down, traffic routes to Claude or a local model</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Cost/Speed Load Balancing — simple questions go to cheaper models, complex ones to flagship models</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Audit & Security — block sensitive data from being sent to cloud AI, route through local LLM</p>
														</li>
													</ul>
													
												</div>
											</div>
										</div>
										<div className="col-lg-5">
											<div className="tab-service-image relative">
												<img src="/assets/images/service/service-h41_new.jpg" alt="image" />
												<img src="/assets/images/service/service-h42_new.jpg" alt="image" className="service1" />
												<div className="clip" />
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="retail-tab-pane" role="tabpanel" aria-labelledby="retail-tab" tabIndex={0}>
									<div className="row tab-service-wrap">
										<div className="col-lg-7">
											<div className="tab-service-content">
												<div className="heading-title">
													<h2 className="title">Retail & E-commerce</h2>
													<p className="des mb-30">Retailers and e-commerce businesses manage multiple sales channels, partners, and touchpoints — often with disconnected systems that create inefficiencies. A unified API platform connects everything from marketplaces to store shelves, synchronizing products, stock levels, and customer data in real time.</p>
													<ul className="icon-listing mb-50">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Marketplace Aggregators — single API for product listings across all marketplaces</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Omnichannel — unified stock balance across warehouse, store, shelf, and app</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Loyalty System — single access to bonuses, coupons, and promotions through any channel (website, store, call center)</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-5">
											<div className="tab-service-image relative">
												<img src="/assets/images/service/service-h41.jpg" alt="image" />
												<img src="/assets/images/service/service-h42.jpg" alt="image" className="service1" />
												<div className="clip" />
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabIndex={0}>
									<div className="row tab-service-wrap">
										<div className="col-lg-7">
											<div className="tab-service-content">
												<div className="heading-title">
													<h2 className="title">Finance & Banking</h2>
													<p className="des mb-30">Financial institutions face a unique set of challenges — legacy systems, strict security requirements, and the need to connect with countless partners and payment providers. A unified API platform acts as a modern facade, hiding the complexity of outdated infrastructure like Cobol and AS/400 while exposing clean, secure REST APIs. It also provides a single entry point for payment aggregation and Open Banking, ensuring compliance with PSD2 and other regulations.</p>
													<ul className="icon-listing mb-50">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Payment Aggregators — single entry point to Visa, Mastercard, PayPal, and other payment systems</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Open Banking — unified API for accessing accounts across different banks (PSD2 compliant)</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Legacy System Integration — facade pattern hides Cobol, AS/400 and exposes modern REST APIs</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-5">
											<div className="tab-service-image relative">
												<img src="/assets/images/service/service-h41.jpg" alt="image" />
												<img src="/assets/images/service/service-h42.jpg" alt="image" className="service1" />
												<div className="clip" />
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="healthcare-tab-pane" role="tabpanel" aria-labelledby="healthcare-tab" tabIndex={0}>
									<div className="row tab-service-wrap">
										<div className="col-lg-7">
											<div className="tab-service-content">
												<div className="heading-title">
													<h2 className="title">Healthcare & Medicine</h2>
													<p className="des mb-30">Healthcare data is scattered across laboratories, clinics, pharmacies, insurance companies, and medical devices — each using different formats like HL7, FHIR, and DICOM. A unified API platform brings everything together into a single, accessible ecosystem. Patients get a complete electronic health record. Doctors access real-time data from any source. Telemedicine platforms integrate video calls, scheduling, and payments through one API. Medical devices stream data directly into patient records — automatically.</p>
													<ul className="icon-listing mb-50">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Unified Patient Record — access to data from laboratories, clinics, pharmacies, and insurance</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Telemedicine — single API for video calls, chats, appointment scheduling, and payments</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Medical Device Integration — collect data from multiple devices (blood pressure monitors, ECG, glucometers) through one interface</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-5">
											<div className="tab-service-image relative">
												<img src="/assets/images/service/service-h41.jpg" alt="image" />
												<img src="/assets/images/service/service-h42.jpg" alt="image" className="service1" />
												<div className="clip" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					</section>

				
				
				<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">CNN, R-CNN, YOLO</span><i className="icon-asterisk" />
													<span className="text-slider">Digital Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Web UX/UI Design</span><i className="icon-asterisk" />
													<span className="text-slider">Image Processing</span><i className="icon-asterisk" />
													<span className="text-slider">Machine Learning & AI</span><i className="icon-asterisk" />
													<span className="text-slider">Computer Vision</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">AR/VR Apps</span><i className="icon-asterisk" />
													<span className="text-slider">Deep Learning</span><i className="icon-asterisk" />
													<span className="text-slider">Web UX/UI Design</span><i className="icon-asterisk" />
													<span className="text-slider">CNN, R-CNN, YOLO</span><i className="icon-asterisk" />
													<span className="text-slider">Machine Learning & AI</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Testimonial */}

				</div>

			</Layout>
		</>
	)
}