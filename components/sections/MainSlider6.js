
import Link from "next/link"

export default function MainSlider6() {
	return (
		<>

			<section className="banner-home5 bg-1 relative">
				<img src="/assets/images/page/mask-hero.png" alt="image" className="mask-hero" />
				<div className="tf-container">
					<div className="row banner-home5-wrap">
						<div className="col-md-6">
							<div className="content">
								<span className="sub-title fw-600 font-man text-blue2 wow fadeInUpSmall" data-wow-delay=".2s"><i className="icon-angle-downs" />5m+ Trusted Our Clients</span>
								<h1 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Right Place to Build Professional
									<span className="text-blue2 mask"> Website</span>
								</h1>
								<div className="btn-wrap flex-three">
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service1" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".5s">
										<Link href="/about-company" className="learn-more text-white">Learn More <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="image">
								<img src="/assets/images/page/image-hero.jpg" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
