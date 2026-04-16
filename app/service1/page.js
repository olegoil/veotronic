'use client'
import { useState } from 'react';
import CircleProgress from "@/components/elements/CircleProgress"
import CounterNumber from "@/components/elements/CounterNumber"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service1() {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Popular Services">
				<div>
					<section className="pt-122 pb-130 ">
						<div className="tf-container">
							<div className="row relative z-index-3 mb-60">
								<div className="col-md-8">
									<div className="heading-title optimize-olutions-left w-650">
										<span className="sub-title text-blue2 font-man">Optimize Security Solutions</span>
										<h2 className="title">Comprehensive Protection
											for your <span className="text-blue2">Business</span></h2>
									</div>
								</div>
								<div className="col-md-4">
									<div className="optimize-olutions-right">
										<p className="mb-20">Metrics for improving your site's performance over
											time security measures like systems
										</p>
										<ul className="icon-listing">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Professional Team Member</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Awards Winning IT Solutions Company</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row relative z-index-3">
								<div className="col-md-4">
									<div className="tf-image-box2 style-dark">
										<Link href="/#" className="image">
											<img src="/assets/images/image-box/os-h31.jpg" alt="image" />
										</Link>
										<div className="content">
											<span className="category">Startup Business</span>
											<div className="image-box-inner flex-three">
												<span className="number">
													1
												</span>
												<h3 className="title">
													<Link href="/#">Defense Arsenal Unveiling Our Cyber Security Suite</Link>
												</h3>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="tf-image-box2 style-dark">
										<Link href="/#" className="image">
											<img src="/assets/images/image-box/os-h32.jpg" alt="image" />
										</Link>
										<div className="content">
											<span className="category">Small Business</span>
											<div className="image-box-inner flex-three">
												<span className="number">
													2
												</span>
												<h3 className="title">
													<Link href="/#">Fortified Protection Explore Our
														Robust Security Features</Link>
												</h3>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="tf-image-box2 style-dark">
										<Link href="/#" className="image">
											<img src="/assets/images/image-box/os-h33.jpg" alt="image" />
										</Link>
										<div className="content">
											<div className="category">Entrepreneur</div>
											<div className="image-box-inner flex-three">
												<span className="number">3</span>
												<h3 className="title">
													<Link href="/#">Empowering Digital Safety at
														Every Level Protection</Link>
												</h3>
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
					{/*  Feature */}
					<section className="feature-home2 pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title center w-680 m0-auto mb-130">
										<span className="sub-title text-blue2 font-man">Popular Services</span>
										<h2 className="title">Services We Provide</h2>
									</div>
								</div>
							</div>
							<div className="feature-h2-wrap feature-service-page">
								<div className="row mt--70 mb-40">
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3 active">
											<div className="flex-two icon-box-wrap">
												<span className="number">01</span>
												<div className="icons">
													<i className="icon-vector-dev" />
												</div>
											</div>
											<h3 className="title">Product Design</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">02</span>
												<div className="icons">
													<i className="icon-cloud-computing" />
												</div>
											</div>
											<h3 className="title">IT Management</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">03</span>
												<div className="icons">
													<i className="icon-planning-2" />
												</div>
											</div>
											<h3 className="title">Data Security</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">04</span>
												<div className="icons">
													<i className="icon-vector-dev" />
												</div>
											</div>
											<h3 className="title">Infrastructure Plan</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className=" col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">05</span>
												<div className="icons">
													<i className="icon-start-up" />
												</div>
											</div>
											<h3 className="title">Firewall Advancement</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">06</span>
												<div className="icons">
													<i className="icon-cloud-network" />
												</div>
											</div>
											<h3 className="title">Desktop Computing</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">07</span>
												<div className="icons">
													<i className="icon-market-share" />
												</div>
											</div>
											<h3 className="title">Market research</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-3">
										<Link href="/service-details" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">08</span>
												<div className="icons">
													<i className="icon-software-development-1" />
												</div>
											</div>
											<h3 className="title">Web Development</h3>
											<div className="inner-bottom">
												<p className="des font-man">We approached Veotronic with complex project deliver</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12 center">
										<div className="feature-cta ">
											<div className="flex-three feature-cta-wrap">
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
												<div className="content">
													<span>Ready to Get </span>
													<p>Consultations to Our Expertise</p>
													<div className="icon-shape">
														<svg width={124} height={5} viewBox="0 0 124 5" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M114.168 0.615385C111.478 0.5 108.742 0.384615 106.006 0.269231C105.125 0.230769 104.198 0.230769 103.317 0.192308C101.369 0.153846 99.4215 0.115385 97.4739 0.0769231C96.4073 0.0384615 95.2944 0.0384615 94.2278 0C93.9032 0 93.5786 0 93.3004 0C92.6048 0 91.9092 0 91.1673 0C87.9676 0 84.7679 0 81.5683 0C80.8263 0 80.038 0 79.2961 0.0384615C77.3948 0.0769231 75.5399 0.0769231 73.6387 0.115385C71.5056 0.153846 69.3725 0.153846 67.2393 0.192308C63.8078 0.269231 60.3299 0.346154 56.8984 0.423077C54.9044 0.461538 52.9104 0.5 50.9164 0.538462C47.4849 0.653846 44.0534 0.769231 40.6218 0.884615C38.7206 0.961538 36.8657 1 34.9645 1.07692C31.3938 1.26923 27.8232 1.42308 24.2525 1.57692C22.3513 1.65385 20.45 1.73077 18.5488 1.84615C15.0245 2.07692 11.4539 2.34615 7.92961 2.61538C7.18765 2.65385 6.39933 2.73077 5.61101 2.76923C4.1271 2.88462 2.59683 3.07692 1.06656 3.23077C0.973811 3.23077 0.881067 3.26923 0.788323 3.26923C0.602836 3.26923 0.46372 3.34615 0.324604 3.46154C0.0927439 3.65385 0 3.88462 0 4.11539C0 4.34615 0.0927439 4.57692 0.324604 4.73077C0.510092 4.88462 0.834695 5 1.06656 5C2.92143 4.84615 4.72994 4.65385 6.58482 4.5C8.30058 4.38462 10.0163 4.26923 11.7321 4.15385C13.587 4.03846 15.4419 3.88462 17.3431 3.76923C18.0851 3.73077 18.827 3.65385 19.6153 3.61538C22.5368 3.5 25.4118 3.34615 28.3333 3.23077C30.1418 3.15385 31.9503 3.07692 33.7588 3C34.5007 2.96154 35.2427 2.92308 35.9846 2.88462C38.8597 2.76923 41.7348 2.69231 44.6098 2.57692C46.372 2.53846 48.0877 2.46154 49.8499 2.42308C50.4527 2.42308 51.0092 2.38462 51.612 2.38462C54.7189 2.30769 57.8258 2.26923 60.9328 2.19231C62.6485 2.15385 64.4107 2.11538 66.1264 2.07692C66.7293 2.07692 67.3785 2.03846 67.9813 2.03846C71.181 2 74.3806 2 77.6267 1.96154C79.6207 1.96154 81.6147 1.92308 83.6087 1.92308C86.9938 1.92308 90.4253 1.92308 93.8105 1.96154C94.4597 1.96154 95.1553 2 95.8045 2C97.7057 2.03846 99.5606 2.07692 101.462 2.15385C102.853 2.19231 104.291 2.23077 105.682 2.26923C106.702 2.30769 107.676 2.34615 108.696 2.38462C111.617 2.5 114.585 2.65385 117.507 2.80769C118.249 2.84615 118.99 2.88462 119.732 2.92308C120.521 2.96154 121.355 3 122.144 3.07692C122.283 3.07692 122.376 3.11539 122.515 3.15385C122.839 3.19231 123.118 3.19231 123.396 3.03846C123.674 2.92308 123.86 2.69231 123.952 2.46154C124.138 1.96154 123.767 1.42308 123.118 1.26923C122.561 1.15385 122.005 1.11538 121.495 1.03846C121.124 1 120.753 0.961538 120.382 0.961538C119.64 0.884615 118.898 0.884615 118.202 0.807692C116.904 0.769231 115.513 0.692308 114.168 0.615385Z" fill="currentcolor" />
														</svg>
													</div>
												</div>
												<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Feature */}
					<section className="pb-130 feature-home3">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="feature-h3-content">
										<div className="heading-title mb-60">
											<span className="sub-title text-blue2 font-man">Cyber Security Solutions</span>
											<h2 className="title">Highly Tailored IT Design, Management
												&amp; Support <span className="text-blue2">Services</span></h2>
										</div>
										<div className="accordion accordion-h3" id="accordionExample">
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(1)}>
													<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														Network Security &amp; Protection
													</span>
												</h5>
												<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Accelerate innovation with world-class tech teams We’ll
														match you to an entire remote team .
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														Browser Safety &amp; Farewell
													</span>
												</h5>
												<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Accelerate innovation with world-class tech teams We’ll
														match you to an entire remote team .
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Infrastructure Technology
													</span>
												</h5>
												<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Accelerate innovation with world-class tech teams We’ll
														match you to an entire remote team .
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
														Management &amp; Support Services
													</span>
												</h5>
												<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Accelerate innovation with world-class tech teams We’ll
														match you to an entire remote team .
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="feature-h3-image relative">
										<img src="/assets/images/service/image-solution.jpg" alt="image" />
										<div className="counting-feature bg-5">
											<div className="progress-box2 flex-three">
												<div className="progress-skill">
													<div className="couter2">
														<CircleProgress percentage={98} />
													</div>
												</div>
												<div className="content-progress">
													<span className="percent2 text-white">98%</span>
													<h5 className="text-white">Project Success</h5>
												</div>
											</div>
											<div className="progress-box2 flex-three ">
												<div className="progress-skill">
													<div className="couter2">
														<CircleProgress percentage={93} />
													</div>
												</div>
												<div className="content-progress">
													<span className="percent2 text-white">63%</span>
													<h5 className="text-white">Happy Clients</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Why chose us*/}
					<section className="pb-130 wcus-home3 bb-blog">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="image-wrapper-wcus3 relative">
										<div className="image-wcus3 flex">
											<img src="/assets/images/service/cta-list1.jpg" alt="imge" className="wcus-pt" />
											<img src="/assets/images/service/cta-list2.jpg" alt="imge" />
										</div>
										<div className="quote-wcus-3 flex bg-5">
											<div className="icon">
												<i className="icon-medals-gif" />
											</div>
											<div className="content">
												<h5 className="title">Certified Company</h5>
												<p>Accelerate innovation with world match entire remote team</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="content-wrapper-wcus3">
										<div className="heading-title mb-40">
											<span className="sub-title text-blue2 font-man">Why Choose Us</span>
											<h2 className="title">Innovative Strategies for
												Maximum <span className="text-blue2">SEO Impact</span></h2>
											<p className="des">We are at the forefront of technological innovation, dedicated to
												providing comprehensive IT solutions that empower businesses</p>
										</div>
										<div className="row">
											<div className="col-sm-6">
												<div className="icon-box-wcus style2">
													<div className="icon">
														<i className="icon-icon-dev" />
													</div>
													<h4 className="title">Robotics software</h4>
													<p className="des">We are a dynamic and forward
														dedicated revolution</p>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="icon-box-wcus style2">
													<div className="icon">
														<i className="icon-artificial-intelligence" />
													</div>
													<h4 className="title">Smart AI &amp; chatbots</h4>
													<p className="des">Passion lies creating solution
														not only meet but excee</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Cta*/}
					<section className="pt-130 pb-130 cta-service">
						<div className="tf-container">
							<div className="row align-center">
								<div className="col-md-7">
									<div className="heading-title">
										<span className="sub-title text-blue2 font-man">Get Consultations</span>
										<h2 className="title mb-40">We believe in smart design,
											trust &amp; collaboration.</h2>
										<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>
									</div>
								</div>
								<div className="col-md-5">
									<div className="image-cta-service">
										<img src="/assets/images/service/cta-list3.jpg" alt="image" />
										<div className="quote-feature-wrap">
											<div className="counter  tf-counters">
												<div className="numbers number-style" data-speed={2000} data-to={25} data-inviewport="yes"><CounterNumber count={25} /></div>
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
												<span>customer reviews</span>
											</div>
											<div className="start">
												<span>4.9</span>
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