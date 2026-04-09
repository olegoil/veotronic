'use client'
import { useState } from 'react';
import CircleProgress from "../elements/CircleProgress"
import TextAnimation from "../elements/TextAnimation"


export default function Feature5() {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>

			<section className="pb-130 feature-home3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="feature-h3-content">
								<div className="heading-title mb-60">
									<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Cyber Security Solutions</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Highly Tailored IT Design, Management
										&amp; Support
										<span className=" text-blue1 mask">
											<TextAnimation text1="Wiatech" text2="Services" />
										</span>
									</h2>
								</div>
								<div className="accordion accordion-h3 wow fadeInUpSmall" data-wow-delay=".4s" id="accordionExample">
									<div className="accordion-item ">
										<h5 className="accordion-header" onClick={() => handleAccordion(1)}>
											<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												Network Security &amp; Protection
											</span>
										</h5>
										<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Accelerate innovation with world-class tech teams We’ll
												match you to an entire remote team .
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h5 className="accordion-header" onClick={() => handleAccordion(2)}>
											<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Browser Safety &amp; Farewell
											</span>
										</h5>
										<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Accelerate innovation with world-class tech teams We’ll
												match you to an entire remote team .
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h5 className="accordion-header" onClick={() => handleAccordion(3)}>
											<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Infrastructure Technology
											</span>
										</h5>
										<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Accelerate innovation with world-class tech teams We’ll
												match you to an entire remote team .
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h5 className="accordion-header" onClick={() => handleAccordion(4)}>
											<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
												Management &amp; Support Services
											</span>
										</h5>
										<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Accelerate innovation with world-class tech teams We’ll
												match you to an entire remote team .
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="feature-h3-image relative">
								<img src="/assets/images/page/feature-h3.jpg" alt="image" />
								<div className="counting-feature bg-8">
									<div className="progress-box2 flex-three">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress percentage={68} />
											</div>
										</div>
										<div className="content-progress">
											<span className="percent2 text-white">98%</span>
											<h5 className="text-white">Project Success</h5>
										</div>
									</div>
									<div className="progress-box2 flex-three">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress percentage={93} />
											</div>
										</div>
										<div className="content-progress">
											<span className="percent2 text-white">63%</span>
											<h5 className="text-white">Happy Clients</h5>
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
