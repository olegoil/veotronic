
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function Pricing1() {
	return (
		<>

			<section className="section-pricing pt-122 pb-130 overflow-hiden relative bg-3">
				<img src="/assets/images/page/mask-banner3.png" alt="image" className="mask-banner3" />
				<div className="tf-container">
					<div className="row relative z-index-3">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680 mb-50">
								<span className="sub-title text-white font-man wow fadeInUpSmall" data-wow-delay=".2s">Pricing Package</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Supreme Savings Suite The
									Ultimate Power
									<span className=" text-yellow mask">
										<TextAnimation text1="Deal" text2="Wetech" />
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row relative z-index-3">
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="tf-pricing">
								<div className="pricing-header">
									<span className="plan">Basic Plan</span>
									<p className="price">$15<span className="per">/per month</span></p>
									<p className="des">We are at the forefront of technological
										innovation, dedicated to providing</p>
								</div>
								<ul className="icon-listing">
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Unlimited Project</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Power And Predictive Dialing</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Quality &amp; Customer Experience</p>
									</li>
									<li className="flex-three no-vip">
										<i className="icon-check1" />
										<p className="font-man">Try for free, forever!</p>
									</li>
									<li className="flex-three no-vip">
										<i className="icon-check1" />
										<p className="font-man">24/7 phone and email support</p>
									</li>
								</ul>
								<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-pricing">
								<div className="popular">
									<i className="icon-start" />
									<span>popular</span>
									<i className="icon-start" />
								</div>
								<div className="pricing-header">
									<span className="plan">Standard Plan</span>
									<p className="price">$45<span className="per">/per month</span></p>
									<p className="des">We are at the forefront of technological
										innovation, dedicated to providing</p>
								</div>
								<ul className="icon-listing">
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Unlimited Project</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Power And Predictive Dialing</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Quality &amp; Customer Experience</p>
									</li>
									<li className="flex-three ">
										<i className="icon-Check" />
										<p className="font-man">Try for free, forever!</p>
									</li>
									<li className="flex-three no-vip">
										<i className="icon-check1" />
										<p className="font-man">24/7 phone and email support</p>
									</li>
								</ul>
								<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-pricing">
								<div className="pricing-header">
									<span className="plan">Premium Plan</span>
									<p className="price">$99<span className="per">/per month</span></p>
									<p className="des">We are at the forefront of technological
										innovation, dedicated to providing</p>
								</div>
								<ul className="icon-listing">
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Unlimited Project</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Power And Predictive Dialing</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Quality &amp; Customer Experience</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">Try for free, forever!</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man">24/7 phone and email support</p>
									</li>
								</ul>
								<Link href="/#" className="button-src">Choose Package <i className="icon-angle-right" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
