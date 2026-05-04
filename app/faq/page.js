'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head"

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
			<Head>
				{/* Основные мета-теги */}
				<title>FAQ — Frequently Asked Questions | Veotronic</title>
				<meta name="description" content="Find answers to common questions about Veotronic's services: business process automation, AI integration, custom software development, mobile apps, API platforms, pricing, and more." />
				<meta name="keywords" content="FAQ, frequently asked questions, Veotronic, automation services, AI integration, custom software, mobile app development, API platform, pricing" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Veotronic" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://veotronic.com/faq" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com/faq" />
				<meta property="og:title" content="FAQ — Frequently Asked Questions | Veotronic" />
				<meta property="og:description" content="Find answers to common questions about Veotronic's services: automation, AI, custom software, mobile apps, API platforms, and pricing." />
				<meta property="og:image" content="https://veotronic.com/og-image-faq.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://veotronic.com/faq" />
				<meta name="twitter:title" content="FAQ | Veotronic" />
				<meta name="twitter:description" content="Answers to common questions about Veotronic's IT services, automation, AI, and software development." />
				<meta name="twitter:image" content="https://veotronic.com/og-image-faq.jpg" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ">
				<div>
					{/* FAQ Section */}
					<section className="faq-section pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="heading-title">
										<span className="sub-title texts-blue font-man">FAQ</span>
										<h2 className="title">Frequently Asked Questions</h2>
										<p className="des mb-40">Have questions about automation, API integration, or custom software development? We've got answers. Here are the most common questions our clients ask.</p>
										<Link href="/contact-us" className="button-src">Contact Us <i className="icon-angle-right" /></Link>
									</div>
								</div>
								<div className="col-md-7">
									<div className="tab-faq-content">
										<ul className="nav nav-pills tab-faq-page mb-30" id="pills-tab" role="tablist">
											<li className="nav-item" onClick={() => handleTab(1)}>
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="general-tab" data-bs-toggle="pill" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">General</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="service-tab" data-bs-toggle="pill" data-bs-target="#service" type="button" role="tab" aria-controls="service" aria-selected="false">Services</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="product-tab" data-bs-toggle="pill" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="false">Development</button>
											</li>
										
											<li className="nav-item" onClick={() => handleTab(5)}>
												<button className={isTab == 5 ? "nav-link active" : "nav-link"} id="pricing-tab" data-bs-toggle="pill" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false">Pricing</button>
											</li>
										</ul>
										<div className="tab-content" id="pills-tabContent">
											
											{/* Tab 1 - General */}
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="general" role="tabpanel" aria-labelledby="general-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionGeneral">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(16)}>
															<span className={isAccordion == 16 ? "accordion-button" : "accordion-button collapsed"} type="button">
																What does Veotronic specialize in?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 16 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Veotronic specializes in business process automation, AI integration, custom software development, mobile app development, and unified API platforms. We help businesses streamline operations, connect disparate systems, and build intelligent products.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(17)}>
															<span className={isAccordion == 17 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Which industries do you serve?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 17 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																We serve a wide range of industries including retail & e-commerce, finance & banking, healthcare, education, logistics, manufacturing, and more. Our solutions are tailored to the specific needs of each industry.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(18)}>
															<span className={isAccordion == 18 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you work with startups or only enterprises?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 18 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Both! We work with startups, SMBs, and large enterprises. Whether you need an MVP to validate your idea or a complex enterprise system, we have the expertise to deliver.
															</div>
														</div>
													</div>
													
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(20)}>
															<span className={isAccordion == 20 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you provide post-launch support?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 20 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Yes. We offer ongoing maintenance, support, and updates after launch. Our team stays with you to ensure your software continues to perform and scale.
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* Tab 2 - Services */}
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="service" role="tabpanel" aria-labelledby="service-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionService">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(21)}>
															<span className={isAccordion == 21 ? "accordion-button" : "accordion-button collapsed"} type="button">
																What automation services do you offer?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 21 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																We offer business process automation, AI-powered chatbots, voice assistants, smart document processing, automated data exchange, and workflow optimization across finance, HR, logistics, and customer service.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(22)}>
															<span className={isAccordion == 22 ? "accordion-button" : "accordion-button collapsed"} type="button">
																What is a Unified API Platform?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 22 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																A Unified API Platform is a single interface that connects multiple systems — CRM, ERP, marketplaces, accounting, and AI models — using one language and protocol. It simplifies integration, reduces costs, and enables real-time data synchronization.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(23)}>
															<span className={isAccordion == 23 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you build mobile apps?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 23 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Yes. We build native iOS (Swift), native Android (Kotlin), cross-platform (Xamarin, React Native, Flutter), and Progressive Web Apps (PWA). We also integrate AI capabilities into mobile apps.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(24)}>
															<span className={isAccordion == 24 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Can you customize third-party software?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 24 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Absolutely. We customize platforms like MS Dynamics, SharePoint, Salesforce, and others to fit your specific business needs — saving you time and money compared to building from scratch.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(25)}>
															<span className={isAccordion == 25 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you offer legacy software migration?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 25 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Yes. We migrate and modernize legacy systems — refactoring outdated code, moving data to the cloud, and upgrading to modern technology stacks. Your business gets faster, more secure software.
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* Tab 3 - Development */}
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="product" role="tabpanel" aria-labelledby="product-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionDevelopment">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(26)}>
															<span className={isAccordion == 26 ? "accordion-button" : "accordion-button collapsed"} type="button">
																How long does it take to build a custom software solution?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 26 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Timeline depends on project complexity. A simple MVP can take 2-3 months, while complex enterprise systems may take 6-12 months. We provide detailed estimates after a discovery phase.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(27)}>
															<span className={isAccordion == 27 ? "accordion-button" : "accordion-button collapsed"} type="button">
																What technologies do you use?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 27 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																We use a wide range of technologies: .NET, Node.js, Python, React, Vue, Angular, Swift, Kotlin, Xamarin, Flutter, React Native, and cloud platforms like AWS, Azure, and Google Cloud.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(28)}>
															<span className={isAccordion == 28 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you build AI-powered applications?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 28 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Yes. We integrate AI capabilities like chatbots, voice recognition, image processing, predictive analytics, and recommendation engines into web and mobile applications.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(29)}>
															<span className={isAccordion == 29 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you provide documentation and source code?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 29 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Absolutely. You own all intellectual property. We provide complete source code, technical documentation, API documentation, and deployment guides.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(30)}>
															<span className={isAccordion == 30 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Can you integrate with my existing systems?
															</span>
														</h3>
														<div id="collapsefire" className={isAccordion == 30 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Yes. We specialize in integrations — connecting CRMs, ERPs, marketplaces, accounting software, payment gateways, and custom systems through robust APIs.
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* Tab 5 - Pricing */}
											<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="pricing" role="tabpanel" aria-labelledby="pricing-tab" tabIndex={0}>
												<div className="accordion accordion-h4" id="accordionPricing">
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(6)}>
															<span className={isAccordion == 6 ? "accordion-button" : "accordion-button collapsed"} type="button">
																How much does it cost to build a custom software solution?
															</span>
														</h3>
														<div id="collapseOne" className={isAccordion == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Cost depends on complexity, features, and timeline. We provide free initial consultations and detailed estimates after understanding your requirements. Contact us for a quote.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(7)}>
															<span className={isAccordion == 7 ? "accordion-button" : "accordion-button collapsed"} type="button">
																What pricing models do you offer?
															</span>
														</h3>
														<div id="collapseTwo" className={isAccordion == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																We offer flexible pricing models: fixed price for well-defined projects, time & material for evolving requirements, and dedicated team monthly contracts.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(8)}>
															<span className={isAccordion == 8 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Is there a free consultation?
															</span>
														</h3>
														<div id="collapseThree" className={isAccordion == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																Yes. We offer a free initial consultation to understand your project, answer questions, and provide a rough estimate — no obligation.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h3 className="accordion-header" onClick={() => handleAccordion(9)}>
															<span className={isAccordion == 9 ? "accordion-button" : "accordion-button collapsed"} type="button">
																Do you require upfront payment?
															</span>
														</h3>
														<div id="collapsefore" className={isAccordion == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
															<div className="accordion-body">
																We typically work with milestone-based payments or monthly invoices. No large upfront payments — you pay as we deliver.
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

					{/* Video Section */}
					<section className="pt-122 bg-2">
						<div className="tf-container">
							<div className="row mb-60">
								<div className="col-md-12">
									<div className="heading-title center m0-auto w-680 ">
										<span className="sub-title texts-blue font-man">Watch The Video</span>
										<h2 className="title">Our focus is on delivering superior value to our clients through automation and innovation</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="video-faq relative">
										<img src="/assets/images/page/video-dvl_new.jpg" alt="Veotronic company overview video" />
										<VideoPopup />
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