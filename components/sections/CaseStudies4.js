'use client'
import { myPortfolio } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

export default function CaseStudies4() {
	return (
		<>

			<section className="case-studies-h5 pt-122 pb-130 bg-1">
				<div className="tf-container full">
					<div className="row mb-70">
						<div className="col-lg-12">
							<div className="heading-title center w-680 m0-auto">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Latest Case Studies</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Let’s Explore Our Latest Case <span className="text-blue2 mask">Studies</span></h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Swiper {...myPortfolio} className="swiper myportfolio">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="tf-portfolio portfolio-dark">
											<Link href="/project-details" className="image">
												<img src="/assets/images/image-box/case1.jpg" alt="image" />
											</Link>
											<div className="content">
												<div className="inner-title">
													<h3 className="title"><Link href="/project-details">Professional Website Design</Link>
													</h3>
													<p>Web Design &amp; Development</p>
												</div>
												<div className="btn-main">
													<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-portfolio portfolio-dark">
											<Link href="/project-details" className="image">
												<img src="/assets/images/image-box/case2.jpg" alt="image" />
											</Link>
											<div className="content">
												<div className="inner-title">
													<h3 className="title"><Link href="/project-details">Travel &amp; Tour Mobile Apps
														Design</Link></h3>
													<p>Mobile Apps Design</p>
												</div>
												<div className="btn-main">
													<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-portfolio portfolio-dark">
											<Link href="/project-details" className="image">
												<img src="/assets/images/image-box/case3.jpg" alt="image" />
											</Link>
											<div className="content">
												<div className="inner-title">
													<h3 className="title"><Link href="/project-details">Professional Website Design</Link>
													</h3>
													<p>Web Design &amp; Development</p>
												</div>
												<div className="btn-main">
													<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-portfolio portfolio-dark">
											<Link href="/project-details" className="image">
												<img src="/assets/images/image-box/case1.jpg" alt="image" />
											</Link>
											<div className="content">
												<div className="inner-title">
													<h3 className="title"><Link href="/project-details">Professional Website Design</Link>
													</h3>
													<p>Web Design &amp; Development</p>
												</div>
												<div className="btn-main">
													<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-portfolio portfolio-dark">
											<Link href="/project-details" className="image">
												<img src="/assets/images/image-box/case2.jpg" alt="image" />
											</Link>
											<div className="content">
												<div className="inner-title">
													<h3 className="title"><Link href="/project-details">Travel &amp; Tour Mobile Apps
														Design</Link></h3>
													<p>Mobile Apps Design</p>
												</div>
												<div className="btn-main">
													<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-portfolio portfolio-dark">
											<Link href="/project-details" className="image">
												<img src="/assets/images/image-box/case3.jpg" alt="image" />
											</Link>
											<div className="content">
												<div className="inner-title">
													<h3 className="title"><Link href="/project-details">Professional Website Design</Link>
													</h3>
													<p>Web Design &amp; Development</p>
												</div>
												<div className="btn-main">
													<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
