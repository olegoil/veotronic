
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function OptimizeSolutions() {
	return (
		<>

			<section className="optimize-olutions bg-3 relative overflow-hiden">
				<img src="/assets/images/page/mask-banner3.png" alt="image" className="mask-banner3" />
				<div className="tf-container">
					<div className="row relative z-index-3 mb-60">
						<div className="col-md-7">
							<div className="heading-title optimize-olutions-left">
								<span className="sub-title text-blue2 font-man wow fadeInUpSmall" data-wow-delay=".2s">Optimize Security Solutions</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Comprehensive Protection
									for your
									<span className=" text-blue2 mask">
										<TextAnimation text1="Veotronic" text2="Business" />
									</span>
								</h2>
							</div>
						</div>
						<div className="col-md-5">
							<div className="optimize-olutions-right">
								<p className="wow fadeInUpSmall" data-wow-delay=".2s">Metrics for improving your site's performance over
									time security measures like systems
								</p>
								<ul className="icon-listing">
									<li className="flex-three wow fadeInUpSmall" data-wow-delay=".3s">
										<i className="icon-Check" />
										<p className="font-man text-white">Professional Team Member</p>
									</li>
									<li className="flex-three wow fadeInUpSmall" data-wow-delay=".4s">
										<i className="icon-Check" />
										<p className="font-man text-white">Awards Winning IT Solutions Company</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row relative z-index-3">
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="tf-image-box2">
								<Link href="/#" className="image">
									<img src="/assets/images/image-box/os-h31.jpg" alt="image" />
								</Link>
								<div className="content">
									<span className="category">Startup Business</span>
									<div className="image-box-inner flex-three">
										<span className="number">
											1
										</span>
										<h3 className="title">
											<Link href="/#">Defense Arsenal Unveiling Our Cyber Security Suite</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-image-box2">
								<Link href="/#" className="image">
									<img src="/assets/images/image-box/os-h32.jpg" alt="image" />
								</Link>
								<div className="content">
									<span className="category">Small Business</span>
									<div className="image-box-inner flex-three">
										<span className="number">
											2
										</span>
										<h3 className="title">
											<Link href="/#">Fortified Protection Explore Our
												Robust Security Features</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-image-box2">
								<Link href="/#" className="image">
									<img src="/assets/images/image-box/os-h33.jpg" alt="image" />
								</Link>
								<div className="content">
									<div className="category">Entrepreneur</div>
									<div className="image-box-inner flex-three">
										<span className="number">3</span>
										<h3 className="title">
											<Link href="/#">Empowering Digital Safety at
												Every Level Protection</Link>
										</h3>
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
