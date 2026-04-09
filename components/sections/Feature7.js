'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { myFeature4 } from "@/utils/swiperOptions"

export default function Feature7() {
	return (
		<>

			<section className="section-feature4">
				<div className="tf-container full">
					<div className="row">
						<div className="col-lg-12 relative">
							<Swiper {...myFeature4} className="swiper myFeature-4">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="tf-image-box3 flex">
											<div className="image-box3-content">
												<div className="heading-title">
													<h2 className="title">AI Helps build your project quicker </h2>
													<div className="icon">
														<svg width={195} height={15} viewBox="0 0 195 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1 13C41.9721 2.92057 142.246 -3.87406 194 9.2668" stroke="currentcolor" strokeWidth={4} />
														</svg>
													</div>
													<p className="des mb-40">We approached WiaTech complex project
														Designing website
														can involve various aspects such as layout, graphics,
														content
														experience For a more specific response elaborate</p>
													<Link href="/project-details" className="button-src">Read More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className="image-box3-image">
												<img src="/assets/images/image-box/feature1.jpg" alt="image" />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-image-box3 flex">
											<div className="image-box3-content">
												<div className="heading-title">
													<h2 className="title">No tech knowledge needed</h2>
													<div className="icon">
														<svg width={195} height={15} viewBox="0 0 195 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1 13C41.9721 2.92057 142.246 -3.87406 194 9.2668" stroke="currentcolor" strokeWidth={4} />
														</svg>
													</div>
													<p className="des mb-40">We approached WiaTech complex project
														Designing website
														can involve various aspects such as layout, graphics,
														content
														experience For a more specific response elaborate</p>
													<Link href="/project-details" className="button-src">Read More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className="image-box3-image">
												<img src="/assets/images/image-box/feature.jpg" alt="image" />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-image-box3 flex">
											<div className="image-box3-content">
												<div className="heading-title">
													<h2 className="title">No tech knowledge needed </h2>
													<div className="icon">
														<svg width={195} height={15} viewBox="0 0 195 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1 13C41.9721 2.92057 142.246 -3.87406 194 9.2668" stroke="currentcolor" strokeWidth={4} />
														</svg>
													</div>
													<p className="des mb-40">We approached WiaTech complex project
														Designing website
														can involve various aspects such as layout, graphics,
														content
														experience For a more specific response elaborate</p>
													<Link href="/project-details" className="button-src">Read More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className="image-box3-image">
												<img src="/assets/images/image-box/feature1.jpg" alt="image" />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-image-box3 flex">
											<div className="image-box3-content">
												<div className="heading-title">
													<h2 className="title">No tech knowledge needed</h2>
													<div className="icon">
														<svg width={195} height={15} viewBox="0 0 195 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1 13C41.9721 2.92057 142.246 -3.87406 194 9.2668" stroke="currentcolor" strokeWidth={4} />
														</svg>
													</div>
													<p className="des mb-40">We approached WiaTech complex project
														Designing website
														can involve various aspects such as layout, graphics,
														content
														experience For a more specific response elaborate</p>
													<Link href="/project-details" className="button-src">Read More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className="image-box3-image">
												<img src="/assets/images/image-box/feature.jpg" alt="image" />
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
		</>
	)
}
