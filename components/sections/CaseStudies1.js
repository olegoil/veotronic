'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { caseStudiesSlider } from "@/utils/swiperOptions"

export default function CaseStudies1() {
	return (
		<>

			<section className="section-case-studies relative">
				<div className="tf-container full">
					<div className="row">
						<div className="col-xl-7 col-lg-12">
							<Swiper {...caseStudiesSlider} className="swiper  case-studies-slider overflow-hiden mb-60">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<img src="/assets/images/page/case-h1_new4.jpg" alt="image silder" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/images/page/case-h1_new.jpg" alt="image silder" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/images/page/case-h1_new3.jpg" alt="image silder" />
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
							</Swiper>
						</div>
						<div className="col-xl-5 col-lg-12">
							<div className="case-studies-content relative overflow-hiden">
								<div className="cycle" />
								<div className="icon-case">
									<i className="icon-Icon21" />
								</div>
								<h2 className="title-case text-white">AI-Powered Product Listing Automation</h2>
								<p className="des font-man">The AI automatically selects and processes product photos, then generates complete product cards. It publishes listings to major marketplaces and online stores without manual intervention. From raw images to live products — entirely automated.</p>
								<Link href="/#" className="button-src">View Details <i className="icon-angle-right" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
