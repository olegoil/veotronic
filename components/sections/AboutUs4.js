
import Link from "next/link"
import CounterNumber from "../elements/CounterNumber"

export default function AboutUs4() {
	return (
		<>

			<section className="about-us-home5 pt-122 pb-130 bg-9 relative">
				<img src="/assets/images/page/mask-ab5.png" alt="image" className="mask-about-h5" />
				<div className="tf-container">
					<div className="row z-index-3 relative">
						<div className="col-md-6">
							<div className="about-us-h5-content">
								<div className="heading-title">
									<span className="sub-title text-white font-man">About Company</span>
									<h2 className="title text-white">We Are Professional Web Design Agency Based On
										<span className="text-blue2 mask">New York</span>
									</h2>
								</div>
								<div className="counter-about-wrap relative tf-counters">
									<div className="number plus numbers" data-speed={2000} data-to={28} data-inviewport="yes"><CounterNumber count={28} />
									</div>
									<p className="experience">Years Of <br />Experience</p>
									<div className="clip" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="about-us-h5-image">
								<img src="/assets/images/page/image-ab-home.jpg" alt="image" />
								<p className="des">We denounce with righteous indignation and dislike men who are so
									beguiled and demoralized by the charms of pleasure of the moment, so blinded by
									desire that they
									cannot foresee the pain and trouble that are bound to ensue belongs
								</p>
								<div className="about-us-wrap flex-three">
									<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
									<div className="flex-three profile">
										<img src="/assets/images/avata/avt-profile.jpg" alt="image" />
										<div className="content">
											<h4 className="name text-white">Michael N. Burris</h4>
											<p className="job text-white">CEO &amp; Founder</p>
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
