'use client'
import Link from "next/link"
import { useState } from "react"

export default function Service4() {
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

			<section className="service-section-4 pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-760 mb-70">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Best Features Development</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Best Features We Provide For Our Mobile Apps
									<span className="text-black mask">Development</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="nav nav-tabs-service nav-justified mb-70" id="myTab" role="tablist">
								<li className="nav-item" onClick={() => handleTab(1)}>
									<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target="#financial-tab-pane" type="button" role="tab" aria-controls="financial-tab-pane" aria-selected="true"><i className="icon-deposit" /> Financial
										services</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(2)}>
									<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="retail-tab" data-bs-toggle="tab" data-bs-target="#retail-tab-pane" type="button" role="tab" aria-controls="retail-tab-pane" aria-selected="false"><i className="icon-store-management" /> Retail
										Services</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(3)}>
									<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false"><i className="icon-graduated" /> Education
										Services</button>
								</li>
								<li className="nav-item" onClick={() => handleTab(4)}>
									<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="healthcare-tab" data-bs-toggle="tab" data-bs-target="#healthcare-tab-pane" type="button" role="tab" aria-controls="healthcare-tab-pane" aria-selected="false"><i className="icon-healthcare" /> Healthcare
										Services</button>
								</li>
							</ul>
							<div className="tab-content" id="myTabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="financial-tab-pane" role="tabpanel" aria-labelledby="financial-tab" tabIndex={0}>
									<div className="row tab-service-wrap">
										<div className="col-lg-7">
											<div className="tab-service-content">
												<div className="heading-title">
													<h2 className="title">Innovate Finance Pioneering Tomorrow's Digital
														Wealth Experience</h2>
													<p className="des mb-30">At veroeos accusamus tusto dignissimos
														ducimus
														blanditiis voluptatum delenite atque
														corrupti quos dolores et quas molestias excepturi sint
														occaecatie</p>
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
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="retail-tab-pane" role="tabpanel" aria-labelledby="retail-tab" tabIndex={0}>
									<div className="row tab-service-wrap">
										<div className="col-lg-7">
											<div className="tab-service-content">
												<div className="heading-title">
													<h2 className="title">Innovate Finance Pioneering Tomorrow's Digital
														Wealth Experience</h2>
													<p className="des mb-30">At veroeos accusamus tusto dignissimos
														ducimus
														blanditiis voluptatum delenite atque
														corrupti quos dolores et quas molestias excepturi sint
														occaecatie</p>
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
													<h2 className="title">Innovate Finance Pioneering Tomorrow's Digital
														Wealth Experience</h2>
													<p className="des mb-30">At veroeos accusamus tusto dignissimos
														ducimus
														blanditiis voluptatum delenite atque
														corrupti quos dolores et quas molestias excepturi sint
														occaecatie</p>
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
													<h2 className="title">Innovate Finance Pioneering Tomorrow's Digital
														Wealth Experience</h2>
													<p className="des mb-30">At veroeos accusamus tusto dignissimos
														ducimus
														blanditiis voluptatum delenite atque
														corrupti quos dolores et quas molestias excepturi sint
														occaecatie</p>
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
		</>
	)
}
