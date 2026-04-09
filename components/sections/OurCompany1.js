import CounterNumber from "../elements/CounterNumber"


export default function OurCompany1() {
	return (
		<>

			<section className="our-company bg-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content">
								<div className="heading-title">
									<span className="sub-title text-white font-man wow fadeInUpSmall" data-wow-delay=".2s">Our Company Offer</span>
									<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Startup Success
										Stories
										Featured Ventures</h2>
									<p className="des text-white wow fadeInUpSmall" data-wow-delay=".4s">We are at the
										forefront of technological innovation,
										dedicated to providing comprehensive IT solutions that empower businesses
										for success in the digital age. With a deep commitment to excellence</p>
								</div>
								<div className="line wow fadeInUpSmall" data-wow-delay=".5s" />
								<div className="counter-wrap-company">
									<div className="counter-company tf-counters wow fadeInUpSmall" data-wow-delay=".3s">
										<span className="title-counter">Growth Positive</span>
										<div className="numbers number-style3 percent" data-speed={2000} data-to={99} data-inviewport="yes"><CounterNumber count={99} /></div>
										<p>IT solutions that businesses success in digital age.</p>
									</div>
									<div className="counter-company tf-counters wow fadeInUpSmall" data-wow-delay=".3s">
										<span className="title-counter">Project Complete</span>
										<div className="numbers number-style3 mplus" data-speed={2000} data-to={10} data-inviewport="yes"><CounterNumber count={10} /></div>
										<p>Always remember, you have within the strength,</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image relative">
								<img src="/assets/images/page/company1.png" alt="image" className="company1" />
								<img src="/assets/images/page/company2.png" alt="image" className="company2" />
								<img src="/assets/images/page/company3.png" alt="image" className="company3" />
								<img src="/assets/images/page/company4.png" alt="image" className="company4" />
								<img src="/assets/images/page/company5.png" alt="image" className="company5" />
								<img src="/assets/images/page/company6.png" alt="image" className="company6" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
