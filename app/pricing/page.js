'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Pricing() {
	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)
	return (
		<>

			<Layout breadcrumbTitle="Pricing Plan">
				<div>
					<section className="pt-130 bg-2 pricing-plan">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="pricing-plan-content">
										<div className="heading-title">
											<span className="sub-title texts-blue font-man">Pricing Plan</span>
											<h2 className="title">Choose Latest Package</h2>
											<p className="des">Sed ut perspiciatis unde omniste natus voluptatem
												accus antiume doloremque laudantie totam aperiame
												abillo inventore</p>
										</div>
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
									</div>
								</div>
								<div className="col-md-6">
									<img src="/assets/images/page/price.jpg" alt="image" />
								</div>
							</div>
						</div>
					</section>
					<section className="pricing-section pt-122 pb-130 bg-2">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12 center tf-tabs">
									<div className="toggle-btn-over flex-five">
										<div className="text-toggle left">Monthly Plan <i className="icon-right-icon" /></div>
										<div className={`toggle-btn-tabs ${isToggled ? 'active' : ''}`} onClick={handleToggle}>
											<span className={`btn-tog btn-1 ${isToggled ? 'inactive' : 'active'}`} data-tab="tab-1" />
											<span className={`btn-tog btn-2 ${isToggled ? 'active' : 'inactive'}`} data-tab="tab-2" />
										</div>
										<div className="text-toggle right">Yearly Plan <i className="icon-right-icon" /></div>
									</div>
									<div className="tf-tabcontent">
										<div className={`tab-1 tf-tabcontent-inner ${isToggled ? 'inactive' : 'active'}`}>
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
										<div className={`tab-2 tf-tabcontent-inner ${isToggled ? 'active' : 'inactive'}`}>
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
				</div>

			</Layout>
		</>
	)
}