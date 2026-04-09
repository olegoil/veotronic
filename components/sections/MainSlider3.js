
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function MainSlider3() {
	return (
		<>

			<section className="banner-home3 bg-3 relative">
				<img src="/assets/images/page/mask-banner3.png" alt="image" className="mask-banner3" />
				<div className="tf-container">
					<div className="row z-index-3 relative">
						<div className="col-lg-6">
							<div className="content">
								<h1 className="title text-white wow fadeInUpSmall" data-wow-delay=".2s">Shielding the Future of Cyber security Empowering
									Security in a Digital World</h1>
								<p className="des text-white wow fadeInUpSmall" data-wow-delay=".3s">We are at the forefront of technological innovation,
									dedicated comprehensive IT solutions that empower businesses
								</p>
								<div className="btn-wrap-banner flex-three">
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/#" className="button-src">Get Started Now <i className="icon-angle-right" /></Link>
									</div>
									<VideoPopup hero />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image layer">
								<img src="/assets/images/page/banner-h3.png" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
