'use client'
import CounterNumber from "@/components/elements/CounterNumber"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Service2() {
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

			<Layout breadcrumbTitle="Popular Services">
				<div>
					<section className="pd-section feature-service2">
						<div className="tf-container">
							<div className="row align-center">
								<div className="col-md-6">
									<div className="feature-service2-content">
										<div className="heading-title mb-26">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title mb-30">Best Features We Provide For Our IT Solutions</h2>
											<p className="des">At veroeos accusamus dignissimos ducimus blanditiis volupta
												delenite atque
												corrupti quos dolores et quas molestias excepturi sint occaecatie</p>
										</div>
										<ul className="icon-listing mb-50">
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
										</ul>
										<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>
									</div>
								</div>
								<div className="col-md-6">
									<div className="feature-service2-image relative">
										<img src="/assets/images/service/service-list.jpg" alt="image" className="service2-image" />
										<div className="testimonial-avt-box relative bg-5">
											<p>5m+ Trusted Global Clients</p>
											<div className="icon">
												<svg width={132} height={5} viewBox="0 0 132 5" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M121.533 0.615385C118.67 0.5 115.758 0.384615 112.845 0.269231C111.908 0.230769 110.92 0.230769 109.982 0.192308C107.909 0.153846 105.836 0.115385 103.763 0.0769231C102.627 0.0384615 101.442 0.0384615 100.307 0C99.9615 0 99.616 0 99.3198 0C98.5793 0 97.8389 0 97.049 0C93.6429 0 90.2368 0 86.8307 0C86.0409 0 85.2018 0 84.4119 0.0384615C82.388 0.0769231 80.4135 0.0769231 78.3896 0.115385C76.1188 0.153846 73.8481 0.153846 71.5774 0.192308C67.9245 0.269231 64.2222 0.346154 60.5693 0.423077C58.4466 0.461538 56.324 0.5 54.2013 0.538462C50.5484 0.653846 46.8955 0.769231 43.2426 0.884615C41.2187 0.961538 39.2441 1 37.2202 1.07692C33.4192 1.26923 29.6182 1.42308 25.8172 1.57692C23.7933 1.65385 21.7694 1.73077 19.7455 1.84615C15.9938 2.07692 12.1928 2.34615 8.44119 2.61538C7.65137 2.65385 6.81219 2.73077 5.97301 2.76923C4.39337 2.88462 2.76437 3.07692 1.13537 3.23077C1.03664 3.23077 0.93791 3.26923 0.839183 3.26923C0.641728 3.26923 0.493637 3.34615 0.345546 3.46154C0.0987274 3.65385 0 3.88462 0 4.11539C0 4.34615 0.0987274 4.57692 0.345546 4.73077C0.543001 4.88462 0.888547 5 1.13537 5C3.10991 4.84615 5.0351 4.65385 7.00965 4.5C8.8361 4.38462 10.6626 4.26923 12.489 4.15385C14.4636 4.03846 16.4381 3.88462 18.462 3.76923C19.2518 3.73077 20.0417 3.65385 20.8808 3.61538C23.9908 3.5 27.0513 3.34615 30.1612 3.23077C32.0864 3.15385 34.0116 3.07692 35.9368 3C36.7266 2.96154 37.5164 2.92308 38.3062 2.88462C41.3668 2.76923 44.4273 2.69231 47.4879 2.57692C49.3637 2.53846 51.1902 2.46154 53.066 2.42308C53.7077 2.42308 54.3001 2.38462 54.9418 2.38462C58.2492 2.30769 61.5565 2.26923 64.8639 2.19231C66.6904 2.15385 68.5662 2.11538 70.3926 2.07692C71.0344 2.07692 71.7255 2.03846 72.3672 2.03846C75.7733 2 79.1794 2 82.6348 1.96154C84.7575 1.96154 86.8801 1.92308 89.0028 1.92308C92.6063 1.92308 96.2592 1.92308 99.8628 1.96154C100.554 1.96154 101.294 2 101.985 2C104.009 2.03846 105.984 2.07692 108.008 2.15385C109.489 2.19231 111.019 2.23077 112.5 2.26923C113.586 2.30769 114.623 2.34615 115.709 2.38462C118.818 2.5 121.978 2.65385 125.088 2.80769C125.877 2.84615 126.667 2.88462 127.457 2.92308C128.296 2.96154 129.185 3 130.024 3.07692C130.172 3.07692 130.271 3.11539 130.419 3.15385C130.764 3.19231 131.061 3.19231 131.357 3.03846C131.653 2.92308 131.85 2.69231 131.949 2.46154C132.147 1.96154 131.752 1.42308 131.061 1.26923C130.468 1.15385 129.876 1.11538 129.333 1.03846C128.938 1 128.543 0.961538 128.148 0.961538C127.358 0.884615 126.569 0.884615 125.828 0.807692C124.446 0.769231 122.965 0.692308 121.533 0.615385Z" fill="currentcolor" />
												</svg>
											</div>
											<ul className="image-list flex-three ">
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
										</div>
										<div className="cycle" />
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Marque text */}
					<section className="marque-text-style bg-6">
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
					{/*  Service */}
					<section className="pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title center w-680 m0-auto">
										<span className="sub-title texts-blue font-man">What We Provide</span>
										<h2 className="title mb-30">We Are Specialist We Offer for Grow Your <span className="texts-blue">Business</span></h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 mb-70">
									<div className="service-item-list">
										<div className="service-item flex-three">
											<div className="image">
												<img src="/assets/images/service/service-bu1.jpg" alt="image" />
											</div>
											<div className="content">
												<p className="category">Design <span className="number">01</span></p>
												<h3 className="title"><Link href="/service-details">Provide Professional Web Design</Link></h3>
											</div>
											<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
												doloremque laudantium, totam rem aperiam</p>
											<div className="btn-main">
												<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
											</div>
										</div>
										<div className="service-item flex-three">
											<div className="image">
												<img src="/assets/images/service/service-bu2.jpg" alt="image" />
											</div>
											<div className="content">
												<p className="category">Development <span className="number">02</span></p>
												<h3 className="title"><Link href="/service-details">Provide Professional Web Development</Link></h3>
											</div>
											<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
												doloremque laudantium, totam rem aperiam</p>
											<div className="btn-main">
												<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
											</div>
										</div>
										<div className="service-item flex-three">
											<div className="image">
												<img src="/assets/images/service/service-bu3.jpg" alt="image" />
											</div>
											<div className="content">
												<p className="category">Marketing <span className="number">03</span></p>
												<h3 className="title"><Link href="/service-details">Digital Marketing Strategy</Link></h3>
											</div>
											<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
												doloremque laudantium, totam rem aperiam</p>
											<div className="btn-main">
												<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
											</div>
										</div>
										<div className="service-item flex-three">
											<div className="image">
												<img src="/assets/images/service/service-bu4.jpg" alt="image" />
											</div>
											<div className="content">
												<p className="category">Motion Design <span className="number">04</span></p>
												<h3 className="title"><Link href="/service-details">3D Design, Motions &amp; Animations</Link></h3>
											</div>
											<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
												doloremque laudantium, totam rem aperiam</p>
											<div className="btn-main">
												<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
											</div>
										</div>
										<div className="service-item flex-three">
											<div className="image">
												<img src="/assets/images/service/service-bu5.jpg" alt="image" />
											</div>
											<div className="content">
												<p className="category">Content <span className="number">05</span></p>
												<h3 className="title"><Link href="/service-details">Content Writing &amp; Email Marketing</Link></h3>
											</div>
											<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
												doloremque laudantium, totam rem aperiam</p>
											<div className="btn-main">
												<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 center">
									<Link href="/service1" className="button-src">View All Services <i className="icon-angle-right" /></Link>
								</div>
							</div>
						</div>
					</section>
					{/* Pricing */}
					<section className="pricing-h5 pt-122 pb-130 bg-2">
						<div className="tf-container">
							<div className="row mb-60">
								<div className="col-md-7">
									<div className="heading-title">
										<span className="sub-title texts-blue font-man">Pricing Package</span>
										<h2 className="title">Choose Latest <span className="texts-blue">Pricing</span></h2>
									</div>
								</div>
								<div className="col-md-5">
									<p className="des">Sed ut perspiciatis unde omniste natus sit voluptatem accus antiume
										doloremque laudantium totam aperiame abillo inventore</p>
									<ul className="nav nav-tabs-pricing nav-tabs-pricing-service" id="myTab" role="tablist">
										<li className="nav-item" onClick={() => handleTab(1)}>
											<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly-tab-pane" type="button" role="tab" aria-controls="monthly-tab-pane" aria-selected="true">Monthly Plan <i className="icon-right-icon" /></button>
										</li>
										<li className="nav-item" onClick={() => handleTab(2)}>
											<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly-tab-pane" type="button" role="tab" aria-controls="yearly-tab-pane" aria-selected="false">Yearly Plan <i className="icon-right-icon" /></button>
										</li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="tab-content" id="myTabContent">
										<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="monthly-tab-pane" role="tabpanel" aria-labelledby="monthly-tab" tabIndex={0}>
											<div className="row">
												<div className="col-md-4">
													<div className="tf-pricing style-01 text-service">
														<div className="pricing-header">
															<span className="plan">Basic Plan</span>
															<h3 className="title">Startup Agency </h3>
															<p className="price">15<span className="per">/per month</span></p>
														</div>
														<ul className="icon-listing">
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Website Design &amp; Development</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Digital Marketing Solutions</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">SEO Optimizations</p>
															</li>
															<li className="flex-three ">
																<i className="icon-Check" />
																<p className="font-man">Branding and Design Identity</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">IT Consultancy Manage</p>
															</li>
														</ul>
														<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
													</div>
												</div>
												<div className="col-md-4">
													<div className="tf-pricing style-01 text-service">
														<div className="popular">
															<i className="icon-start" />
															<span>popular</span>
															<i className="icon-start" />
														</div>
														<div className="pricing-header">
															<span className="plan">Standard Plan</span>
															<h3 className="title">Corporate Agency </h3>
															<p className="price">49<span className="per">/per month</span></p>
														</div>
														<ul className="icon-listing">
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Website Design &amp; Development</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Digital Marketing Solutions</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">SEO Optimizations</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Branding and Design Identity</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">IT Consultancy Manage</p>
															</li>
														</ul>
														<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
													</div>
												</div>
												<div className="col-md-4">
													<div className="tf-pricing style-01 text-service">
														<div className="pricing-header">
															<span className="plan">Premium Plan</span>
															<h3 className="title">Advance Package </h3>
															<p className="price">93<span className="per">/per month</span></p>
														</div>
														<ul className="icon-listing">
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Website Design &amp; Development</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Digital Marketing Solutions</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">SEO Optimizations</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Branding and Design Identity</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">IT Consultancy Manage</p>
															</li>
														</ul>
														<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
													</div>
												</div>
											</div>
										</div>
										<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="yearly-tab-pane" role="tabpanel" aria-labelledby="yearly-tab" tabIndex={0}>
											<div className="row">
												<div className="col-md-4">
													<div className="tf-pricing style-01 text-service">
														<div className="pricing-header">
															<span className="plan">Basic Plan</span>
															<h3 className="title">Startup Agency </h3>
															<p className="price">150<span className="per">/per year</span></p>
														</div>
														<ul className="icon-listing">
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Website Design &amp; Development</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Digital Marketing Solutions</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">SEO Optimizations</p>
															</li>
															<li className="flex-three ">
																<i className="icon-Check" />
																<p className="font-man">Branding and Design Identity</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">IT Consultancy Manage</p>
															</li>
														</ul>
														<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
													</div>
												</div>
												<div className="col-md-4">
													<div className="tf-pricing style-01 text-service">
														<div className="popular">
															<i className="icon-start" />
															<span>popular</span>
															<i className="icon-start" />
														</div>
														<div className="pricing-header">
															<span className="plan">Standard Plan</span>
															<h3 className="title">Corporate Agency </h3>
															<p className="price">149<span className="per">/per year</span></p>
														</div>
														<ul className="icon-listing">
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Website Design &amp; Development</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Digital Marketing Solutions</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">SEO Optimizations</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Branding and Design Identity</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">IT Consultancy Manage</p>
															</li>
														</ul>
														<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
													</div>
												</div>
												<div className="col-md-4">
													<div className="tf-pricing style-01 text-service">
														<div className="pricing-header">
															<span className="plan">Premium Plan</span>
															<h3 className="title">Advance Package </h3>
															<p className="price">193<span className="per">/per year</span></p>
														</div>
														<ul className="icon-listing">
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Website Design &amp; Development</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Digital Marketing Solutions</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">SEO Optimizations</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">Branding and Design Identity</p>
															</li>
															<li className="flex-three">
																<i className="icon-Check" />
																<p className="font-man">IT Consultancy Manage</p>
															</li>
														</ul>
														<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
													</div>
												</div>
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
												<span>Trustpoint</span>
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