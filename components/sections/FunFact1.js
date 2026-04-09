import CounterNumber from "../elements/CounterNumber"
import TextAnimation from "../elements/TextAnimation"


export default function FunFact1() {
	return (
		<>

			<section className="pt-122 pb-130 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680 mb-50">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Company Fun Fact</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Behind the Scenes Surprising
									Fun Facts About
									<span className=" text-blue1 mask">
										<TextAnimation text1="Wiatech" text2="Wetech" />
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="funfat-item tf-counters">
								<div className="icon flex-five">
									<i className="icon-earth-globe" />
								</div>
								<div className="funfat-item-wrap flex">
									<div className="number-counter number-plus numbers" data-to={35} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={35} /></div>
									<p className="des">Countries Represented</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="funfat-item tf-counters">
								<div className="icon flex-five">
									<i className="icon-portfolio" />
								</div>
								<div className="funfat-item-wrap flex">
									<div className="number-counter number-plus numbers" data-to={853} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={853} /></div>
									<p className="des">Complete Project</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="funfat-item tf-counters">
								<div className="icon flex-five">
									<i className="icon-management" />
								</div>
								<div className="funfat-item-wrap flex">
									<div className="number-counter number-plus numbers" data-to={55} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={55} /></div>
									<p className="des">Experience Team Member</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
