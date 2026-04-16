'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ProjectGrid() {
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

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Grid">
				<section className="project-section pt-122 pb-130">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<ul className="nav nav-tabs-project justify-content-center mb-50" id="myTab" role="tablist">
									<li className="nav-item" onClick={() => handleTab(1)}>
										<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="show-all-tab" data-bs-toggle="tab" data-bs-target="#show-all-tab-pane" type="button" role="tab" aria-controls="show-all-tab-pane" aria-selected="true">Show All</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(2)}>
										<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="business-tab" data-bs-toggle="tab" data-bs-target="#business-tab-pane" type="button" role="tab" aria-controls="business-tab-pane" aria-selected="false">Business</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(3)}>
										<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="cyber-tab" data-bs-toggle="tab" data-bs-target="#cyber-tab-pane" type="button" role="tab" aria-controls="cyber-tab-pane" aria-selected="false">Cyber
											Security</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(4)}>
										<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="develope-tab" data-bs-toggle="tab" data-bs-target="#develope-tab-pane" type="button" role="tab" aria-controls="develope-tab-pane" aria-selected="false">Development</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(5)}>
										<button className={isTab == 5 ? "nav-link active" : "nav-link"} id="brand-tab" data-bs-toggle="tab" data-bs-target="#brand-tab-pane" type="button" role="tab" aria-controls="brand-tab-pane" aria-selected="false">Branding</button>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="show-all-tab-pane" role="tabpanel" aria-labelledby="show-all-tab" tabIndex={0}>
										<div className="grid-col-project">
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid1.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">01</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid2.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">02</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Digital Product Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid3.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">03</span>
															<div className="line" />
															<span className="category font-man">Mobile Apps</span>
														</div>
														<h3 className="title"><Link href="/project-details">Mobile Apps Development</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid4.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">04</span>
															<div className="line" />
															<span className="category font-man">Product</span>
														</div>
														<h3 className="title"><Link href="/project-details">Marketing For Digital Product</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid5.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">05</span>
															<div className="line" />
															<span className="category font-man">Engineering</span>
														</div>
														<h3 className="title"><Link href="/project-details">Private Trust Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid6.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">06</span>
															<div className="line" />
															<span className="category font-man">Software</span>
														</div>
														<h3 className="title"><Link href="/project-details">Website Design &amp; Development </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid7.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">07</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">IT Management &amp; Research</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid8.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">08</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid9.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">09</span>
															<div className="line" />
															<span className="category font-man">Strategy</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Development Strategy </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="business-tab-pane" role="tabpanel" aria-labelledby="business-tab" tabIndex={0}>
										<div className="grid-col-project">
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid1.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">01</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid2.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">02</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Digital Product Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid3.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">03</span>
															<div className="line" />
															<span className="category font-man">Mobile Apps</span>
														</div>
														<h3 className="title"><Link href="/project-details">Mobile Apps Development</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid4.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">04</span>
															<div className="line" />
															<span className="category font-man">Product</span>
														</div>
														<h3 className="title"><Link href="/project-details">Marketing For Digital Product</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid5.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">05</span>
															<div className="line" />
															<span className="category font-man">Engineering</span>
														</div>
														<h3 className="title"><Link href="/project-details">Private Trust Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid6.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">06</span>
															<div className="line" />
															<span className="category font-man">Software</span>
														</div>
														<h3 className="title"><Link href="/project-details">Website Design &amp; Development </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid7.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">07</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">IT Management &amp; Research</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid8.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">08</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid9.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">09</span>
															<div className="line" />
															<span className="category font-man">Strategy</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Development Strategy </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="cyber-tab-pane" role="tabpanel" aria-labelledby="cyber-tab" tabIndex={0}>
										<div className="grid-col-project">
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid1.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">01</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid2.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">02</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Digital Product Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid3.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">03</span>
															<div className="line" />
															<span className="category font-man">Mobile Apps</span>
														</div>
														<h3 className="title"><Link href="/project-details">Mobile Apps Development</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid4.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">04</span>
															<div className="line" />
															<span className="category font-man">Product</span>
														</div>
														<h3 className="title"><Link href="/project-details">Marketing For Digital Product</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid5.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">05</span>
															<div className="line" />
															<span className="category font-man">Engineering</span>
														</div>
														<h3 className="title"><Link href="/project-details">Private Trust Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid6.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">06</span>
															<div className="line" />
															<span className="category font-man">Software</span>
														</div>
														<h3 className="title"><Link href="/project-details">Website Design &amp; Development </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid7.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">07</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">IT Management &amp; Research</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid8.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">08</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid9.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">09</span>
															<div className="line" />
															<span className="category font-man">Strategy</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Development Strategy </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="develope-tab-pane" role="tabpanel" aria-labelledby="develope-tab" tabIndex={0}>
										<div className="grid-col-project">
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid1.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">01</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid2.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">02</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Digital Product Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid3.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">03</span>
															<div className="line" />
															<span className="category font-man">Mobile Apps</span>
														</div>
														<h3 className="title"><Link href="/project-details">Mobile Apps Development</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid4.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">04</span>
															<div className="line" />
															<span className="category font-man">Product</span>
														</div>
														<h3 className="title"><Link href="/project-details">Marketing For Digital Product</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid5.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">05</span>
															<div className="line" />
															<span className="category font-man">Engineering</span>
														</div>
														<h3 className="title"><Link href="/project-details">Private Trust Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid6.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">06</span>
															<div className="line" />
															<span className="category font-man">Software</span>
														</div>
														<h3 className="title"><Link href="/project-details">Website Design &amp; Development </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid7.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">07</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">IT Management &amp; Research</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid8.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">08</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid9.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">09</span>
															<div className="line" />
															<span className="category font-man">Strategy</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Development Strategy </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="brand-tab-pane" role="tabpanel" aria-labelledby="brand-tab" tabIndex={0}>
										<div className="grid-col-project">
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid1.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">01</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid2.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">02</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Digital Product Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid3.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">03</span>
															<div className="line" />
															<span className="category font-man">Mobile Apps</span>
														</div>
														<h3 className="title"><Link href="/project-details">Mobile Apps Development</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid4.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">04</span>
															<div className="line" />
															<span className="category font-man">Product</span>
														</div>
														<h3 className="title"><Link href="/project-details">Marketing For Digital Product</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid5.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">05</span>
															<div className="line" />
															<span className="category font-man">Engineering</span>
														</div>
														<h3 className="title"><Link href="/project-details">Private Trust Management</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid6.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">06</span>
															<div className="line" />
															<span className="category font-man">Software</span>
														</div>
														<h3 className="title"><Link href="/project-details">Website Design &amp; Development </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid7.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">07</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">IT Management &amp; Research</Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid8.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">08</span>
															<div className="line" />
															<span className="category font-man">Research</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Website Design </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
											<div className="tf-image-box">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-grid9.jpg" alt="image" />
												</Link>
												<div className="content flex-two">
													<div className="relative">
														<div className="flex-three">
															<span className="number font-man">09</span>
															<div className="line" />
															<span className="category font-man">Strategy</span>
														</div>
														<h3 className="title"><Link href="/project-details">Business Development Strategy </Link></h3>
													</div>
													<Link href="/project-details" className="icon flex-five">
														<i className="icon-angle-downs" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}