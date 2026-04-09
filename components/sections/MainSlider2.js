
import Link from "next/link"

export default function MainSlider2() {
	return (
		<>

			<section className="banner-home2 bg-2">
				<div className="banner-home2-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="content">
									<span className="sub-title font-man wow fadeInUpSmall" data-wow-delay=".2s">5m+ Trusted
										Our Clients</span>
									<h1 className="title wow fadeInUpSmall" data-wow-delay=".3s">Empower Your Startup Journey
										with Expertise</h1>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service1" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="image relative">
									<img src="/assets/images/page/banner2.png" alt="image" className="shape" />
									<img src="/assets/images/page/shape-h21.png" alt="image" className="shape1" />
									<img src="/assets/images/page/shape-h22.png" alt="image" className="shape2" />
									<img src="/assets/images/page/shape-h23.png" alt="image" className="shape3" />
									<img src="/assets/images/page/shape-h24.png" alt="image" className="shape4" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
