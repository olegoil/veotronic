import Link from "next/link"
import CounterNumber from "../elements/CounterNumber"
import TextAnimation from "../elements/TextAnimation"

export default function AboutUs1() {
	return (
		<>
			<section className="section-about-us relative">
				<div className="tf-container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="about-us-image relative">
								<img src="/assets/images/page/about-h1_new.jpg" alt="image" className="wow zoomIn" data-wow-delay=".3s" />
								{/* <div className="vector wow fadeInLeft" data-wow-delay=".3s">
									<svg width={202} height={200} viewBox="0 0 202 200" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M100.735 47.7898L125.02 0L124.313 53.6011L168.026 22.5699L142.49 69.7042L195.616 62.542L151.103 92.4101L201.471 110.759L148.177 116.519L184.249 156.171L134.38 136.503L147.894 188.377L112.878 147.79L100.735 200L88.5931 147.79L53.5771 188.377L67.0903 136.503L17.2222 156.171L53.2934 116.519L0 110.759L50.3677 92.4101L5.85532 62.542L58.9808 69.7042L33.4452 22.5699L77.1583 53.6011L76.4508 0L100.735 47.7898Z" fill="currentcolor" />
									</svg>
								</div> */}
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="about-us-content wow fadeInUpSmall" data-wow-delay=".2s">
								<div className="heading-title">
									<span className="sub-title texts-blue font-man">About Company</span>
									<h2 className="title">Enterprise-Grade Custom Development for Technical Environments
									</h2>
									<h2 className="title">
										<span className="animationtext clip texts-blue">
											{/* <TextAnimation text1="Veotronic" text2="Wetech" /> */}
										</span>
									</h2>
								</div>
								<ul className="icon-listing">
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">10+ Years Experience</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Quality Guaranteed</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Expert Team</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Flexible Terms</p>
									</li>
								</ul>
								<Link href="/about-company" className="button-src">Read More <i className="icon-angle-right" /></Link>
							</div>
						</div>
						<div className="col-12 col-md-12 col-lg-12 col-xl-4">
							<div className="about-us-counter wow fadeInUpSmall" data-wow-delay=".3s">
								<h3 className="title">Innovative Business Technologies. Veotronic.
									Where Quality is Guaranteed.
								</h3>
								<p className="des">We build products that lead the market and reshape entire industries. For us, it's not just about code — it's about making your business run flawlessly. We uphold the highest standards, treating every project as our own.
								</p>
								<div className="line" />
								<div className="flex-one counter-wrap-about">
									<div className="counter-style1 tf-counters">
										<div className="icon">
											<i className="icon-costumer-11" />
										</div>
										<div className="number-counter number-kplus numbers" data-to={80} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={50} /></div>
										<p className="des">Completed projects</p>
									</div>
									<div className="counter-style1 tf-counters">
										<div className="icon">
											<i className="icon-sampp" />
										</div>
										<div className="number-counter number-mplus numbers" data-to={10} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={10} /></div>
										<p className="des">of experience</p>
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
