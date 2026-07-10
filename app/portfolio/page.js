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
					
					<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
													<span className="text-slider">AI Product Studio</span><i className="icon-asterisk" />
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
						<div className="col-lg-12 col-xl-5">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall">From photo to shelf in seconds</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">AI Product Studio
</h2>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">The system revolutionizes content creation. Just upload photos and specify a category — AI does the rest.</p>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">We use state-of-the-art computer vision and NLP models to extract maximum information from visual data.</p>
								</div>
								<div className="flex progres-wrap mb-50  wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="progress-box1 flex-three">
										<div className="progress-skill">
											<div className="couter2">
											<CircleProgress percentage={30} />
											</div>
										</div>
										<div className="content-progress">
											<h5>Instant <br />Generation</h5>
										</div>
									</div>
									<div className="progress-box2 flex-three">
										<div className="progress-skill">
											<div className="couter2">
											<CircleProgress percentage={25} />
											</div>
										</div>
										<div className="content-progress">
											<h5>Thousands of products <br />In the flow</h5>
										</div>
									</div>
								</div>
								{/* <div className="btn-wrap-about flex-three wow fadeInUpSmall" data-wow-delay=".5s">
									<Link href="/service-api" className="button-src">Read More <i className="icon-angle-right" /></Link>
								</div> */}
							</div>
						</div>
						<div className="col-lg-12 col-xl-7">
							<div className="image relative">
								<img src="/assets/images/page/reteil_ai1.jpg" alt="image" />
							
							</div>
						</div>
					</div>
				</div>
					</section>

					<section className="pt-130 pb-130 wcus-section4">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="wcus-section4-content">
										<div className="heading-title">
											<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Technology cycle</span>
											{/* <h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Технологический цикл 
												<span className="text-black mask"> Challenge</span>
											</h2> */}
										</div>
										<div className="icon-list-wcus-wrap">
											<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".3s">
												<div className="icons">
													<i className="icon-ai" />
												</div>
												<div className="content">
													<h3 className="title">01. Analysis & Collection</h3>
													<p className="des font-man">The system processes thousands of incoming photos in parallel, selecting optimal shots for each listing. The neural network generates a complete data package: from name to complex technical attributes.
													</p>
												</div>
											</div>
											<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".4s">
												<div className="icons">
													<i className="icon-contract" />
												</div>
												<div className="content ">
													<h3 className="title">02. Product Card Generation</h3>
													<p className="des font-man">Intelligent assembly and optimization. AI structures data, performs retouching, and adjusts parameters to meet platform and category requirements.
													</p>
												</div>
											</div>
											<div className="icon-box7 flex bb-blog wow fadeInUpSmall" data-wow-delay=".5s">
												<div className="icons">
													<i className="icon-milestones" />
												</div>
												<div className="content ">
													<h3 className="title">03. Publishing & Control</h3>
													<p className="des font-man">Seamless export to stores. The system automatically publishes ready-made listings to multiple seller accounts and syncs their status.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="wcus-section4-image relative">
										<img src="/assets/images/page/mob_ret2.jpg" alt="image" className="wcus-h41" />
										{/* <img src="/assets/images/page/wcus-h4-2_new.jpg" alt="image" className="wcus-h42" /> */}
										<div className="clip" />
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
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
													<span className="text-slider">System for Automated Transport Logistics
</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="can-do-it pt-130 pb-130">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="can-do-it-image relative">
									<div className="elip" />
									<img src="/assets/images/page/portfolio_satl11.jpg" alt="Veotronic unified API platform integration diagram" className="cdit-image" />
									<img src="/assets/images/page/portfolio_satl2.jpg" alt="API connectivity and system integration visualization" className="cdit-image1" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="can-do-it-content">
									<h2 className="title mb-50">System for Automated Transport Logistics
										<span className="text-black mask ms-2"></span>
									</h2>
									<p className="cdit-text mb-40">
									A program for maps, a complete replacement for a human logistician. The system independently makes resource allocation decisions based on cargo data, distance, and staff availability.
										
									</p>
									<div className="flex icon-wrap-cdit">
										<div className="icon-can-do-it flex">
											<div className="icon">
												<i className="icon-product-development" />
											</div>
											<h5 className="title">Replacing human factor in planning</h5>
										</div>
										<div className="icon-can-do-it flex">
											<div className="icon">
												<i className="icon-nanotechnology" />
											</div>
											<h5 className="title">Perfect route planning</h5>
										</div>
									</div>
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
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">Intelligence instead of a logistician.
											</h3>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">SATL ensures transport is used at maximum capacity. AI predicts delays and adjusts loading plans before they become a problem. This turns chaotic shipping into synced, smooth operations.
											</p>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">Real-time calculation of the shortest and most economical routes considering traffic and road conditions. Fuel optimization algorithms based on terrain and cargo weight. Intelligent loading and unloading planning to minimize downtime.
											</p>
										</div>Customer Workflow System
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

				{/* <section className="pt-130 pb-130 wcus-section4">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="wcus-section4-content">
										<div className="heading-title">
											<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">System for Automated Transport Logistics</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">SATL Technology Cycle
												<span className="text-black mask"> Challenge</span>
											</h2>
										</div>
										<div className="icon-list-wcus-wrap">
											<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".3s">
												<div className="icons">
													<i className="icon-ai" />
												</div>
												<div className="content">
													<h3 className="title">01. Analytics & Resources</h3>
													<p className="des font-man">Collecting data on current cargo, fleet availability, and driver schedules. Assessment of distance and time windows.
													</p>
												</div>
											</div>
											<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".4s">
												<div className="icons">
													<i className="icon-contract" />
												</div>
												<div className="content ">
													<h3 className="title">02. Optimal Planning</h3>
													<p className="des font-man">Route calculation and fuel optimization. The system builds a logistics model, replacing manual calculations with mathematical precision.
													</p>
												</div>
											</div>
											<div className="icon-box7 flex bb-blog wow fadeInUpSmall" data-wow-delay=".5s">
												<div className="icons">
													<i className="icon-milestones" />
												</div>
												<div className="content ">
													<h3 className="title">03. Execution & Control</h3>
													<p className="des font-man">Automated vehicle assignment and monitoring every mile. Ensuring perfect loading and unloading at destinations.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="wcus-section4-image relative">
										<img src="/assets/images/page/w-c-us-home4_new.jpg" alt="image" className="wcus-h41" />
										<img src="/assets/images/page/wcus-h4-2_new.jpg" alt="image" className="wcus-h42" />
										<div className="clip" />
									</div>
								</div>
							</div>
						</div>
					</section> */}

					<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
													<span className="text-slider">Customer Workflow System</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-benefit pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">CRM with Autopilot</span>
											<h2 className="title">Customer Workflow System</h2>
											<p className="des">
The system automatically sends personalized offers to potential customers and creates a personal account upon first interaction. When a lead becomes a customer, all correspondence, documents, and order tracking move into their personal account automatically.</p>
										</div>
										<div className="image relative">
										<img src="/assets/images/page/cmr_work1.jpg" alt="image" />
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Auto-offers</h4>
												</div>
												<p>The system creates and sends a personalized offer based on the client's interests and actions</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Personal account</h4>
												</div>
												<p>The client automatically gets access to their account — with correspondence, documents, and order status</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Single interface</h4>
												</div>
												<p>All interactions with the client are visible to any employee in real time — from first contact to deal closure</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>End-to-end control</h4>
												</div>
												<p>Management and team see the current status of each client without unnecessary meetings or reports</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative pb-130 pt-130">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-5">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">CRM with Autopilot</span>
											<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">One Place. Full Control.
											</h3>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">The system sends an offer based on the client's interests and immediately creates a personal account. After the status changes to "customer," all correspondence, documents, and orders are already in place — no data migration is needed.
											</p>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">Employees see the history, tasks, and status of each client in real time. Management can check the deal's stage without asking — everything is in one place.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-7">
									<div className="image relative">
										<img src="/assets/images/page/case-h1_new5.jpg" alt="image" />
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
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
													<span className="text-slider">Veotronic API Gateway</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

						<section className="pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680 mb-80">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Simple. Secure. Interconnected.</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Veotronic API Gateway
									
								</h2>
							</div>
						</div>
					</div>
					<div className="row service-wrap-h3">
						<div className="col-lg-4">
							<div className="service-h3-left">
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="icons">
										<i className="icon-infrastructure" />
									</div>
									<h3 className="title"><Link href="/#">AI Models</Link></h3>
									<p className="des font-man">Seamless integration of your neural networks</p>
								</div>
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="icons">
										<i className="icon-local-area-network" />
									</div>
									<h3 className="title"><Link href="/#">Databases</Link></h3>
									<p className="des font-man">Instant data access without separate queries for each system.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="service-image-h3 layer">
								<img src="/assets/images/page/portfolio2.jpg" alt="image" />
							</div>
						</div>
						<div className="col-lg-4">
							<div className="service-h3-right ">
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="icons">
										<i className="icon-smart-grid" />
									</div>
									<h3 className="title"><Link href="/#">All payments</Link></h3>
									<p className="des font-man">Connect any payment gateway via a single API</p>
								</div>
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="icons">
										<i className="icon-backup" />
									</div>
									<h3 className="title"><Link href="/#">Single control</Link></h3>
									<p className="des font-man">Uniting all devices — from sensors to industrial equipment</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-feature bg-2 relative">
				<div className="tf-container full">
					<div className="row">
						<div className="col-lg-12 col-xl-5">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall">From photo to shelf in seconds</span>
									<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">Automatic Content Generation</h3>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">A single entry point for your entire IT infrastructure. Unifying CRM, ERP, marketplaces, and accounting into one seamless flow.</p>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s"> This is not just integration — it's building a foundation for digital transformation where every system "hears" each other and data works for you 24/7.</p>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s"> End-to-end real-time data flow. Automatic exchange between CRM, ERP, and AI. Lower maintenance costs and faster business processes.</p>
								</div>
								<div className="flex progres-wrap mb-50  wow fadeInUpSmall" data-wow-delay=".4s">
							
								</div>
								{/* <div className="btn-wrap-about flex-three wow fadeInUpSmall" data-wow-delay=".5s">
									<Link href="/service-api" className="button-src">Read More <i className="icon-angle-right" /></Link>
								</div> */}
							</div>
						</div>
						<div className="col-lg-12 col-xl-7">
							<div className="image relative">
								<img src="/assets/images/page/portfolio_sustem1.jpg" alt="image" />
							
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
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
													<span className="text-slider">Automated Data Collection & Processing System</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

						<section className="can-do-it pt-130 pb-130">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="can-do-it-image relative">
									<div className="elip" />
									<img src="/assets/images/page/portfolio_information1.jpg" alt="Veotronic unified API platform integration diagram" className="cdit-image" />
									<img src="/assets/images/page/portfolio_robot1.jpg" alt="API connectivity and system integration visualization" className="cdit-image1" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="can-do-it-content">
									<h2 className="title mb-50">Automated Data Collection & Processing System
										<span className="text-black mask ms-2"></span>
									</h2>
									<p className="cdit-text mb-40">
									The system automatically collects necessary information from the internet — texts, images, structured and unstructured data. It transforms this information into a predefined format and delivers it to the end user in the most convenient way.
										
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
				
	<section className="section-feature bg-2 relative">
				<div className="tf-container full">
					<div className="row">
						<div className="col-lg-12 col-xl-5">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall">Configured for your tasks</span>
									<h3 className="title wow fadeInUpSmall" data-wow-delay=".3s">Full Data Collection Automation</h3>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">The system automatically scans specified sources, extracts relevant information, filters out "noise", and normalizes it. Works with any data type: text documents, images, tables, multimedia.</p>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s"> The client configures sources, output format, and collection frequency. Results can be delivered as dashboards, reports, API responses, or downloadable files. Information arrives at the right time, in the right place, and in the right format — without delays or extra effort.</p>
								
								</div>
								<div className="flex progres-wrap mb-50  wow fadeInUpSmall" data-wow-delay=".4s">
							
								</div>
								
							</div>
						</div>
						<div className="col-lg-12 col-xl-7">
							<div className="image relative">
								<img src="/assets/images/page/n8n1.jpg" alt="image" />
							
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