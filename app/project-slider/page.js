'use client'
import Layout from "@/components/layout/Layout"
import { myProjectSlider } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function ProjectSlider() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Grid">
				<section className="project-slider pt-122">
					<div className="tf-container">
						<div className="row mb-60 al-i-end">
							<div className="col-md-6">
								<div className="heading-title">
									<span className="sub-title texts-blue font-man">Popular Projects</span>
									<h2 className="title">We’ve More Then 1562+
										Project Complete</h2>
								</div>
							</div>
							<div className="col-md-6 text-end">
								<Link href="/#" className="button-src">View All Project <i className="icon-angle-right" /></Link>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 relative">
								<Swiper {...myProjectSlider} className="swiper my-project-slider">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider1.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider2.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider3.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider4.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider1.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider2.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider3.jpg" alt="image" />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="tf-image-box bd-line">
												<Link href="/project-details" className="image relative overflow-hiden">
													<img src="/assets/images/project/pj-slider4.jpg" alt="image" />
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
										</SwiperSlide>
									</div>
									<div className="swiper-pagination" />
								</Swiper>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}