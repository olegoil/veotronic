import CounterNumber from "../elements/CounterNumber"


export default function FunFact3() {
	return (
		<>

			<section className="fact-section bg-1">
				<div className="row">
					<div className="col-lg-12">
						<div className="image-paralax-fact" />
					</div>
				</div>
				<div className="tf-container">
					<div className="fact-widget bg-8 pd-fact wow fadeInUpSmall" data-wow-delay=".3s">
						<div className="heading-title">
							<span className="sub-title text-white font-man">Company Fun Fact</span>
							<h2 className="title text-white">Behind the Scenes <br /> Surprising Fun Facts <br /> About
								<span className="text-blue2 mask"> Veotronic</span>
							</h2>
						</div>
						<div className="counter-area flex">
							<div className="counter-items tf-counters">
								<div className="icon">
									<i className="icon-verified" />
								</div>
								<div className="content">
									<div className="number kplus  numbers" data-speed={2000} data-to={5} data-inviewport="yes"><CounterNumber count={5} />
									</div>
									<p>Project Complete</p>
								</div>
							</div>
							<div className="counter-items tf-counters">
								<div className="icon">
									<i className="icon-reviews" />
								</div>
								<div className="content">
									<div className="number kplus numbers" data-speed={2000} data-to={3} data-inviewport="yes"><CounterNumber count={3} />
									</div>
									<p>Satisficed Clients</p>
								</div>
							</div>
							<div className="counter-items tf-counters">
								<div className="icon">
									<i className="icon-medal-gif" />
								</div>
								<div className="content">
									<div className="number plus numbers" data-speed={2000} data-to={85} data-inviewport="yes"><CounterNumber count={85} />
									</div>
									<p>Awards Winning</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
