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

			<Layout breadcrumbTitle="AI & Machine Learning">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">AI & Machine Learning</span>
											<h2 className="title">From image processing to intelligent predictions</h2>
											<p className="des">
We embrace a flexible approach and support innovation within our team. In the field of AI and machine learning, we explore image and video processing, object and face recognition, and computer vision. We use these technologies to automate routine data analysis, forecast trends and risks, and help businesses streamline processes, improve prediction accuracy, and build intelligent products</p>
										</div>
										<img src="/assets/images/page/dvl-deatils_new.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Pattern Recognition</h4>
												</div>
												<p>Recognize faces, voices, and other patterns with high accuracy. Ideal for security, authentication, and personalized user experiences</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Predictive Analytics</h4>
												</div>
												<p>Forecast trends, risks, and outcomes in finance, marketing, and healthcare. Make data-driven decisions before events happen</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Natural Language Processing</h4>
												</div>
												<p>Power chatbots, translators, and text analysis systems. Understand, interpret, and generate human language automatically</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Autonomous Systems</h4>
												</div>
												<p>Build self-driving vehicles, drones, and robotics that perceive, decide, and act without human intervention</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="feature-home2 pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center w-650 m0-auto mb-130">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Industries We Serve</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Tailored automation solutions for your industry</h2>
							</div>
						</div>
					</div>
					<div className="feature-h2-wrap">
						<div className="row mt--70 mb-70">
							<div className=" col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".2s">
								<div className="icon-box3">
									<div className="flex-two icon-box-wrap">
										<span className="number">01</span>
										<div className="icons">
											<i className="icon-vector-dev" />
										</div>
									</div>
									<h3 className="title">E-commerce</h3>
									<div className="inner-bottom">
										<p className="des font-man">Auto-filling product cards, purchase flow customization, and advanced product search
										</p>
										<div className="icon-bottom">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".3s">
								<div className="icon-box3">
									<div className="flex-two icon-box-wrap">
										<span className="number">02</span>
										<div className="icons">
											<i className="icon-cloud-computing" />
										</div>
									</div>
									<h3 className="title">EdTech</h3>
									<div className="inner-bottom">
										<p className="des font-man">Personalized educational journeys, simplified administrative workflows
										</p>
										<div className="icon-bottom">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".4s">
								<div className="icon-box3">
									<div className="flex-two icon-box-wrap">
										<span className="number">03</span>
										<div className="icons">
											<i className="icon-planning-2" />
										</div>
									</div>
									<h3 className="title">Big Data Processing</h3>
									<div className="inner-bottom">
										<p className="des font-man">Information retrieval, intelligent data processing, and sorting in a user-friendly format
										</p>
										<div className="icon-bottom">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".5s">
								<div className="icon-box3">
									<div className="flex-two icon-box-wrap">
										<span className="number">04</span>
										<div className="icons">
											<i className="icon-vector-dev" />
										</div>
									</div>
									<h3 className="title">Business Automation</h3>
									<div className="inner-bottom">
										<p className="des font-man">Automate document workflows — from accounting to contracts
										</p>
										<div className="icon-bottom">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					</section>

					<section className="section-it-manager pt-130 pb-130">
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
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="approach-tab" data-bs-toggle="tab" data-bs-target="#approach-tab-pane" type="button" role="tab" aria-controls="approach-tab-pane" aria-selected="true">Analysis</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="goals-tab" data-bs-toggle="tab" data-bs-target="#goals-tab-pane" type="button" role="tab" aria-controls="goals-tab-pane" aria-selected="false">Training</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="advisory-tab" data-bs-toggle="tab" data-bs-target="#advisory-tab-pane" type="button" role="tab" aria-controls="advisory-tab-pane" aria-selected="false">Implementation</button>
											</li>
										</ul>
										<div className="tab-content" id="myTabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="approach-tab-pane" role="tabpanel" aria-labelledby="approach-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">We study your business and apply intelligent data mining methods to deliver high-quality datasets for ML models. Our Data Scientists classify and analyze sequences using modern programming tools, extracting valuable insights from large volumes of raw data. We prepare clean, structured data to power accurate and reliable machine learning algorithms
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Intelligent Data Mining</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">High-Quality Datasets</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Sequence Analysis</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Data Insights</p>
														</li>
													</ul>
													{/* <Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link> */}
												</div>
											</div>
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="goals-tab-pane" role="tabpanel" aria-labelledby="goals-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">We build and train machine learning models for AI-powered software development. Our team uses pre-trained models or creates custom ML solutions from scratch. We test frameworks, validate business outcomes, and train models in the cloud or on your own infrastructure — whatever fits your needs
													</p>
													
												</div>
											</div>
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="advisory-tab-pane" role="tabpanel" aria-labelledby="advisory-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">The WiaTech team thoroughly researches the ML model implementation process to build modern AI solutions and seamlessly integrate them into enterprise software products. Our ML engineers collect and prepare data, train models, and handle deployment. We ensure high model accuracy through real-world testing, continuous error correction, and ongoing refinement.
													</p>
												
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/page/dvl-deatils2_new.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
					
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
											<p>We're ready to help. Let's discuss your goals and build something great together</p>
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