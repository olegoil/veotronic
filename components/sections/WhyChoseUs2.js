
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function WhyChoseUs2() {
	return (
		<>

			<section className="pt-130 wcus-home3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="image-wrapper-wcus3 relative">
								<div className="image-wcus3 flex">
									<img src="/assets/images/page/wcus-h3.jpg" alt="imge" className="wcus-pt wow fadeInUpSmall" data-wow-delay=".2s" />
									<img src="/assets/images/page/wcus-h31.jpg" alt="imge " className="wow fadeInUpSmall" data-wow-delay=".3s" />
								</div>
								<div className="quote-wcus-3 flex bg-8">
									<div className="icon">
										<i className="icon-medals-gif" />
									</div>
									<div className="content">
										<h5 className="title">Certified Company</h5>
										<p>Accelerate innovation with world match entire remote team</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-wrapper-wcus3">
								<div className="heading-title mb-40">
									<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Why Choose Us</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Innovative Strategies for
										Maximum
										<span className=" text-blue1 mask">
											<TextAnimation text1="SEO Impact" text2="Impact SEO" />
										</span>
									</h2>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">We are at the forefront of technological innovation, dedicated to
										providing comprehensive IT solutions that empower businesses</p>
								</div>
								<div className="row">
									<div className="col-sm-6 wow fadeInUpSmall" data-wow-delay=".3s">
										<div className="icon-box-wcus">
											<div className="icon">
												<i className="icon-icon-dev" />
											</div>
											<h4 className="title"><Link href="/#">Robotics software</Link></h4>
											<p className="des">We are a dynamic and forward
												dedicated revolution</p>
										</div>
									</div>
									<div className="col-sm-6 wow fadeInUpSmall" data-wow-delay=".4s">
										<div className="icon-box-wcus">
											<div className="icon">
												<i className="icon-artificial-intelligence" />
											</div>
											<h4 className="title"><Link href="/#">Smart AI &amp; chatbots</Link></h4>
											<p className="des">Passion lies creating solution
												not only meet but excee</p>
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
