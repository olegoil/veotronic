
import Link from "next/link"
import CircleProgress from "../elements/CircleProgress"

export default function WhyChoseUs1() {
	return (
		<>

			<section className="why-chose-us pt-122">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="image-wc-us relative">
								<img src="/assets/images/page/wcus1.png" alt="image" className="wcus-1" />
								<img src="/assets/images/page/wcus2.png" alt="image" className="wcus-2" />
								<img src="/assets/images/page/wcus3.png" alt="image" className="wcus-3" />
								<img src="/assets/images/page/wcus4.png" alt="image" className="wcus-4" />
								<img src="/assets/images/page/wcus5.png" alt="image" className="wcus-5" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-wc-us">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Why Choose us</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Why Should People Choose
										Our Startup Business </h2>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">We are at the forefront of
										technological innovation, dedicated to
										comprehensive
										IT solutions that empower businesses for success in the digital age.</p>
								</div>
								<div className="icon-wcus-wrap flex mb-40 ">
									<div className="icon-box-wcus wow fadeInUpSmall" data-wow-delay=".3s">
										<div className="icon">
											<i className="icon-icon-dev" />
										</div>
										<h4 className="title"><Link href="/#">Robotics
											software</Link></h4>
										<p className="des">We are a dynamic and
											forward-thinking
											startup dedicated to revolution</p>
									</div>
									<div className="icon-box-wcus wow fadeInUpSmall" data-wow-delay=".4s">
										<div className="icon">
											<i className="icon-artificial-intelligences" />
										</div>
										<h4 className="title"><Link href="/#">Smart AI &amp;
											chatbots</Link></h4>
										<p className="des">Passion lies in creating
											solutions that not only meet but
											exceed</p>
									</div>
								</div>
								<div className="flex-one progress-wcus ">
									<div className="progress-box2 center wow fadeInUpSmall" data-wow-delay=".2s">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress
													percentage={68}
													width="120px"
													height="120px"
													trailColor="#F6F6F6"
													pathColor="#086AD8"
													textColor="#222"
												/>
											</div>
										</div>
										<h5>Development</h5>
									</div>
									<div className="progress-box2 center wow fadeInUpSmall" data-wow-delay=".3s">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress percentage={93}
													width="120px"
													height="120px"
													trailColor="#F6F6F6"
													pathColor="#086AD8"
													textColor="#222" />
											</div>
										</div>
										<h5>Marketing</h5>
									</div>
									<div className="progress-box2 center wow fadeInUpSmall" data-wow-delay=".4s">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress percentage={78}
													width="120px"
													height="120px"
													trailColor="#F6F6F6"
													pathColor="#086AD8"
													textColor="#222" />
											</div>
										</div>
										<h5>UI/UX Design</h5>
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
