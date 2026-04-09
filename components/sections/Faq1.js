
'use client'
import { useState } from 'react';
export default function Faq1() {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>

			<section className="pb-130 faq-section4">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-2">
							<div className="image-faq-left">
								<img src="/assets/images/page/faq-h41.jpg" alt="image" />
							</div>
						</div>
						<div className="col-lg-8">
							<div className="faq-main">
								<div className="heading-title center mb-60">
									<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">FAQs</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Frequently Ask
										<span className="text-black mask"> Questions</span>
									</h2>
								</div>
								<div className="accordion accordion-h4 wow fadeInUpSmall" data-wow-delay=".4s" id="accordionExample">
									<div className="accordion-item">
										<h3 className="accordion-header" onClick={() => handleAccordion(1)}>
											<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												How much does it cost to build an app?
											</span>
										</h3>
										<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We approached WiaTech with complex project Designing a website can
												involve various such
												as layout, graphics, content, and experience more specific response
												elaborate
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
											<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												How do you create an app without any coding?
											</span>
										</h3>
										<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We approached WiaTech with complex project Designing a website can
												involve various such
												as layout, graphics, content, and experience more specific response
												elaborate
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
											<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Can you create an app for free?
											</span>
										</h3>
										<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We approached WiaTech with complex project Designing a website can
												involve various such
												as layout, graphics, content, and experience more specific response
												elaborate
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
											<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
												How can I create my own app?
											</span>
										</h3>
										<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We approached WiaTech with complex project Designing a website can
												involve various such
												as layout, graphics, content, and experience more specific response
												elaborate
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h3 className="accordion-header" onClick={() => handleAccordion(5)}>
											<span className={isAccordion == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
												How do I start an app business?
											</span>
										</h3>
										<div id="collapsefire" className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We approached WiaTech with complex project Designing a website can
												involve various such
												as layout, graphics, content, and experience more specific response
												elaborate
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="image-faq-right">
								<img src="/assets/images/page/faq-h42.jpg" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
