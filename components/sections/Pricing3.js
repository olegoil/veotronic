'use client'
import Link from "next/link"
import { useState } from "react"

export default function Pricing3() {
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

			<section className="pricing-h5 pt-122 pb-130 bg-9">
				<div className="tf-container">
					<div className="row mb-60">
						<div className="col-md-7">
							<div className="heading-title">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Pricing Package</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Choose Latest <span className="text-blue2 mask">Pricing</span></h2>
							</div>
						</div>
						<div className="col-md-5">
							<p className="des text-white wow fadeInUpSmall" data-wow-delay=".2s">Sed ut perspiciatis unde omniste natus sit voluptatem accus antiume
								doloremque laudantium totam aperiame abillo inventore</p>
							<ul className="nav nav-tabs-pricing nav-tabs-pricing-white" id="myTab" role="tablist">
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
										<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".2s">
											<div className="tf-pricing style-01 pricing-dark">
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
										<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
											<div className="tf-pricing style-01 pricing-dark">
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
										<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
											<div className="tf-pricing style-01 pricing-dark">
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
										<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".2s">
											<div className="tf-pricing style-01 pricing-dark">
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
										<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
											<div className="tf-pricing style-01 pricing-dark">
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
										<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
											<div className="tf-pricing style-01 pricing-dark">
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
		</>
	)
}
