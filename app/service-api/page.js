'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseStudies1 from "@/components/sections/CaseStudies1"
import { caseStudiesSlider } from "@/utils/swiperOptions"
import Head from "next/head"

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
			<Head>
				{/* Basic meta tags */}
				<title>Unified API Platform — Connect All Your Systems | Veotronic</title>
				<meta name="description" content="Unified API platform for seamless integration of CRM, ERP, marketplaces, AI models, and legacy systems. RESTful APIs with secure data exchange, real-time sync, and enterprise-grade security." />
				<meta name="keywords" content="unified API platform, API integration, RESTful API, data synchronization, legacy system integration, Open Banking, payment aggregator, healthcare API, Veotronic" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Veotronic" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://veotronic.com/services/unified-api-platform" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com/services/unified-api-platform" />
				<meta property="og:title" content="Unified API Platform — Connect All Your Systems | Veotronic" />
				<meta property="og:description" content="Seamless API integration for CRM, ERP, marketplaces, AI models, and legacy systems. Real-time data sync, secure exchange, and turnkey RESTful APIs." />
				<meta property="og:image" content="https://veotronic.com/og-image-api.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://veotronic.com/services/unified-api-platform" />
				<meta name="twitter:title" content="Unified API Platform | Veotronic" />
				<meta name="twitter:description" content="Connect all your systems with one API. Secure, scalable, and turnkey integration for any business." />
				<meta name="twitter:image" content="https://veotronic.com/og-image-api.jpg" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Unified API Platform">
			<div>
				<section className="can-do-it pt-130 pb-130">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="can-do-it-image relative">
									<div className="elip" />
									<img src="/assets/images/page/image-feature-h412_new.jpg" alt="Veotronic unified API platform integration diagram" className="cdit-image" />
									<img src="/assets/images/page/image-feature-h413_new.jpg" alt="API connectivity and system integration visualization" className="cdit-image1" />
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
									<div className="video-background">
										<video autoPlay muted loop playsInline disablePictureInPicture>
											<source src="/assets/videos/faq_headquarter.mp4" type="video/mp4"/>
											Your browser does not support HTML5 video.
										</video>
									</div>
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
									<div className="video-background">
										<video autoPlay muted loop playsInline disablePictureInPicture>
											<source src="/assets/videos/api_integration.mp4" type="video/mp4"/>
											Your browser does not support HTML5 video.
										</video>
									</div>
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
													<img src="/assets/images/service/service-h41_new.jpg" alt="AI platforms and chatbots API integration" />
													<img src="/assets/images/service/service-h42_new.jpg" alt="Unified AI gateway diagram" className="service1" />
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
													<img src="/assets/images/service/api-retail.jpg" alt="Retail and e-commerce API integration" />
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
													<img src="/assets/images/service/api-finans.jpg" alt="Finance and banking API integration" />
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
													<img src="/assets/images/service/api-med.jpg" alt="Healthcare and medicine API integration" />
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
												<span className="text-slider">RESTful API</span><i className="icon-asterisk" />
												<span className="text-slider">API Gateway</span><i className="icon-asterisk" />
												<span className="text-slider">Data Synchronization</span><i className="icon-asterisk" />
												<span className="text-slider">Legacy Integration</span><i className="icon-asterisk" />
												<span className="text-slider">Open Banking</span><i className="icon-asterisk" />
												<span className="text-slider">Payment Aggregator</span><i className="icon-asterisk" />
												<span className="text-slider">HL7 FHIR</span><i className="icon-asterisk" />
												<span className="text-slider">Omnichannel</span><i className="icon-asterisk" />
												<span className="text-slider">AI Gateway</span><i className="icon-asterisk" />
												<span className="text-slider">Real-time Sync</span><i className="icon-asterisk" />
												<span className="text-slider">RESTful API</span><i className="icon-asterisk" />
												<span className="text-slider">API First</span><i className="icon-asterisk" />
											</li>
										</ul>
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