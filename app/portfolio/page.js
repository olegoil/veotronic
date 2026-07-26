'use client'
import CounterNumber from "@/components/elements/CounterNumber"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { collection1, collection2, myTeamMember, myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import { useState } from "react"
import CircleProgress from "../../components/elements/CircleProgress"

export default function ProductsPage() {
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

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products">
				
				<div>
					
					<section className="section-feature bg-2 relative pt-122">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-10">
									<div className="content">
										<div className="heading-title mb-20">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">VEOTRONIC PRODUCT SUITE</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Intelligent Systems for Modern Business Automation</h2>
											<h4 className="des wow fadeInUpSmall" data-wow-delay=".4s">At Veotronic, we build powerful, scalable, and intelligent software solutions designed to streamline operations, reduce manual workload, and unlock new levels of efficiency. Our ecosystem combines ERP capabilities, AI-powered image analysis, automated information processing, and rapid mobile app generation.</h4>
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
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
													<span className="text-slider">YAN – Your Active Network (ERP System)</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative pt-122">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-6">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">A complete, modular ERP system designed for full operational control.</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">YAN – Your Active Network</h2>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">YAN centralizes your business processes into one intelligent platform, giving you full visibility and control across all departments.</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Key Modules</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Dashboard for real-time insights</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Warehouses & Inventory management</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Item Lots tracking</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Supplier management</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Dispatch & Returns handling</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Finance and accounting tools</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>POS (Point of Sale) system</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>POS Orders & Cash Register</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Order management</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Customer database</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Benefits</h3>
											<br/>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Seamless integration across all business operations</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Real-time data synchronization</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Scalable architecture for growing companies</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Reduced manual effort and human error</h4>
												</div>
											</li>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-6">
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yan/yan_dashboard.png" alt="yan erp dashboard" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yan/yan_suppliers.png" alt="yan erp suppliers" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yan/yan_warehouses.png" alt="yan erp warehouses" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
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
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YARS – Your Automated Recognition System (Image Analysis Service)</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative pt-122">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-6">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">AI-powered image intelligence for automated product data generation.</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">YARS – Your Automated Recognition System</h2>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">YARS transforms simple images into structured, ready-to-use product data. Originally built for the fashion industry, it works across all e-commerce sectors.</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Key Modules</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Upload an image or provide an image URL</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Select a product category</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Send a POST request to our webhook</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Automated processing pipeline executes multiple AI and custom models</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Receive structured JSON output with detailed product attributes</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Extracted Data Includes</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Product descriptions</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Color recognition</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Image perspective</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Environment detection</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Custom attributes (e.g. number of items, object comparison)</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Advanced Capabilities</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Custom-trained YOLOv8 model for high-accuracy perspective detection</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Accuracy rates between 92%–97%</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Extended query logic for specialized analysis</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Background removal</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Face blurring</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Document text extraction</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Benefits</h3>
											<br/>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Fully automated product data creation</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Significant time savings for online shops</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Consistent and scalable data quality</h4>
												</div>
											</li>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-6">
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yars/yars_bootrecognition.png" alt="yan erp dashboard" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yars/yars_bootrecognition2.png" alt="yan erp suppliers" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yars/yars_ongirlrecotnition.jpg" alt="yan erp warehouses" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
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
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
													<span className="text-slider">YESS – Your Efficient Summarization Service (Intelligent Information Processing Service)</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative pt-122">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-6">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">Automated data aggregation, analysis, and reporting at scale.</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">YESS – Your Efficient Summarization Service</h2>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">YESS collects, processes, and delivers large volumes of information from multiple sources in a structured, human-readable format.</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Key Features</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Fetches data from websites, portals, news feeds, and APIs</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Automated workflows triggered via webhook or schedule</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>AI-powered summarization and restructuring</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Delivery via email and web portal</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Performance</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Processes work equivalent to 10 employees in one week</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Delivers results within 2 hours</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Requires only one person for final validation</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Real-World Impact</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Ensures business continuity during staff shortages</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Enables fast, high-quality reporting</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Reduces operational costs significantly</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Benefits</h3>
											<br/>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Massive efficiency gains</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Reliable, consistent output</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Scalable for high-volume data environments</h4>
												</div>
											</li>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-6">
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yess/yess_openai.jpg" alt="yan erp dashboard" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yess/yess_complex.png" alt="yan erp suppliers" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yess/yess_images.png" alt="yan erp warehouses" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
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
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
													<span className="text-slider">PROFIFY – Your app production system (Mobile App Generation Platform)
</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative pt-122">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-6">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">Create fully functional mobile apps in minutes.</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">PROFIFY – Your app production system</h2>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">PROFIFY enables rapid development of professional mobile applications with minimal effort and maximum flexibility.</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Core Features</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>App generation in ~20 minutes</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Ready for Google Play & App Store deployment</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Includes 30+ built-in features:</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Shop functionality</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Reservation systems</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Delivery services</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Chat & messaging</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Push notifications</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Surveys</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>User profiles</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>And more</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Workflow</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Add app assets (icon, splash screen)</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Configure basic settings</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Run a single command</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>System auto-installs and configures all modules</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Final app ready after minor adjustments</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Management & Control</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Dedicated dashboard for each app</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Role-based access control</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Full content and feature management</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Benefits</h3>
											<br/>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Rapid deployment with minimal resources</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>High-quality output with reduced development time</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Scalable solution for internal and enterprise use</h4>
												</div>
											</li>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-6">
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/profify/profify1.png" alt="yan erp dashboard" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/profify/profify2.png" alt="yan erp suppliers" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/profify/profify3.png" alt="yan erp warehouses" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
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
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
													<span className="text-slider">SATL – Your Optimal Route Organizer (Automated Transport Logistics System)
</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative pt-122">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-6">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">Automated transport logistics optimization for smarter delivery planning.</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">SATL – Your Optimal Route Organizer</h2>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">SATL is designed to eliminate the heavy mental and administrative workload placed on logisticians by automating route planning, vehicle selection, and delivery organization.</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">The Problem</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Selecting the right truck</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Matching load capacity requirements</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Assigning licensed drivers to vehicles</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Determining the most efficient routes</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Prioritizing urgent deliveries</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Planning optimal loading for correct unloading</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Deciding which deliveries can be completed today</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Our Solution</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>SATL is trained to handle all of these decisions autonomously.</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Key Capabilities</h3>
											<br/>
											<div className="benefit-list">
												<ul className="benefit-list-item">
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Intelligent truck and driver assignment</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Automated route optimization</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Priority-based delivery scheduling</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Smart load planning for efficient unloading</h4>
														</div>
													</li>
													<li>
														<div className="flex-three">
															<i className="icon-Check" />&nbsp;
															<h4>Real-time decision support</h4>
														</div>
													</li>
												</ul>
											</div>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".5s">Benefits</h3>
											<br/>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Reduces dependency on a single logistician</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Eliminates human bottlenecks and errors</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Ensures operational continuity (even during staff shortages)</h4>
												</div>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />&nbsp;
													<h4>Increases delivery efficiency and accuracy</h4>
												</div>
											</li>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-6">
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yoro/yoro_map.png" alt="yan erp dashboard" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yoro/yoro_route.png" alt="yan erp suppliers" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
									<div className="image relative" style={{marginBottom:"1em", marginRight:"auto"}}>
										<img src="/assets/images/project/yoro/yoro_transportation.png" alt="yan erp warehouses" style={{maxWidth: "100%", width: "700px", border: "2px solid #000"}} />
									</div>
								</div>
							</div>
						</div>
					</section>

			

					<section className="section-feature bg-2 relative pt-130 pb-50">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-5">
									<div className="content">
										<div className="heading-title">
											{/* <span className="sub-title texts-blue font-man wow fadeInUpSmall">CRM with Autopilot</span> */}
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">Why Choose Veotronic?
											</h3>
											<p class="des wow fadeInUpSmall" data-wow-delay=".4s">End-to-end automation solutions
											</p>
											<p class="des wow fadeInUpSmall" data-wow-delay=".4s">Cutting-edge AI integration
											</p>
											<p class="des wow fadeInUpSmall" data-wow-delay=".4s">Scalable and modular systems
											</p>
											<p class="des wow fadeInUpSmall" data-wow-delay=".4s">Significant cost and time savings
											</p>
											<p class="des wow fadeInUpSmall" data-wow-delay=".4s">Proven real-world performance
											</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">Transform Your Business Today</h3>
											<p class="des wow fadeInUpSmall" data-wow-delay=".4s">From ERP systems to AI-driven services and mobile app generation, Veotronic provides the tools you need to modernize your operations and stay ahead in a competitive market.</p>
											<br/>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">Let technology do the work – faster, smarter, and more efficiently.</h3>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-7">
									<div className="image relative">
										<img src="/assets/images/page/portfolio_satl10.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="section-performance-auto pt-122 bg-2">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title m0-auto w-680 center">
										<span className="sub-title texts-blue font-man">Beyond what you see</span>
										<h2 className="title">These are just a few of our solutions. We have many more projects ready to launch</h2>
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