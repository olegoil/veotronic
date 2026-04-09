
import Link from "next/link"
import CounterNumber from "../elements/CounterNumber"

export default function MainSlider4() {
	return (
		<>

			<section className="banner-home4 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-6">
							<div className="content">
								<div className="sub-title wow fadeInUpSmall" data-wow-delay=".2s">
									<i className="icon-angle-downs" />
									<span className="fw-600 font-man">5m+ Trusted
										Our Clients</span>
								</div>
								<h1 className="title wow fadeInUpSmall" data-wow-delay=".3s">We’re Mobile App Development Agency Based
									<span className="text-black mask">On USA</span>
								</h1>
								<div className="btn-wrap flex-three mb-50">
									<Link href="/service1" className="button-src wow fadeInUpSmall" data-wow-delay=".4s">Explore Our Service <i className="icon-angle-right" /></Link>
									<Link href="/about-company" className="button-src wow fadeInUpSmall" data-wow-delay=".5s">Learn More <i className="icon-angle-right" /></Link>
								</div>
								<div className="counter-wrap flex-two wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="couner tf-counters">
										<div className="number numbers number-style1" data-speed={2000} data-to={56} data-inviewport="yes"><CounterNumber count={56} /></div>
										<span className="text-counter">Satisfied Customers</span>
									</div>
									<div className="couner tf-counters">
										<div className="number numbers number-style2" data-speed={2000} data-to={8} data-inviewport="yes"><CounterNumber count={8} /></div>
										<span className="text-counter">Project Complete</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="image relative">
								<img src="/assets/images/page/mask-home4.png" alt="image" className="image1" />
								<img src="/assets/images/page/tag.png" alt="image" className="image2" />
								<img src="/assets/images/page/html-5.png" alt="image" className="image3" />
								<img src="/assets/images/page/mask-home4.jpg" alt="image" className="image4" />
								<img src="/assets/images/page/cycle-mask.png" alt="image" className="image5" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
