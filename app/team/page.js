'use client'
import { useState } from 'react';
import CircleProgress from "@/components/elements/CircleProgress"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}

	return (
		<>

			<Layout breadcrumbTitle="Team Member">
				<div>
					<section className="pt-130 pb-130 skill-team-member">
						<div className="tf-container">
							<div className="row align-center">
								<div className=" col-md-12 col-lg-5">
									<div className="skill-team-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best IT Solutions</span>
											<h2 className="title">We Prominent Truly
												IT Your solutions</h2>
											<p className="des">We denounce with righteous indignation and like men who are so
												beguiled and demoralized by the charms of pleasure of the moment, so blinded
												by desire foresee the pain</p>
										</div>
										<div className="flex progres-wrap mb-50">
											<div className="progress-box1 flex-three">
												<div className="progress-skill">
													<div className="couter2">
														<CircleProgress percentage={68} />
													</div>
												</div>
												<div className="content-progress">
													<h5>Business <br />Strategy</h5>
												</div>
											</div>
											<div className="progress-box2 flex-three">
												<div className="progress-skill">
													<div className="couter2">
														<CircleProgress percentage={93} />
													</div>
												</div>
												<div className="content-progress">
													<h5>Technology <br />Solutions</h5>
												</div>
											</div>
										</div>
										<div className="btn-wrap-about flex-three">
											<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>
											<div className="flex-three">
												<div className="flex-three">
													<ul className="image-list flex-three">
														<li>
															<img src="/assets/images/avata/avt-team1.jpg" alt="Image list" />
														</li>
														<li>
															<img src="/assets/images/avata/avt-team2.jpg" alt="Image list" />
														</li>
														<li>
															<img src="/assets/images/avata/avt-team3.jpg" alt="Image list" />
														</li>
														<li>
															<img src="/assets/images/avata/avt-team4.jpg" alt="Image list" />
														</li>
													</ul>
												</div>
												<span className="font-man customer">10m+ Customers</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4">
									<div className="skill-team-image-center">
										<img src="/assets/images/team/team-skill.jpg" alt="image" />
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="skill-team-image-right">
										<img src="/assets/images/team/team-skill1.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Marque text */}
					<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">Web Design</span><i className="icon-asterisk" />
													<span className="text-slider">Digital Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Product Design</span><i className="icon-asterisk" />
													<span className="text-slider">Email Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Branding &amp; Design</span><i className="icon-asterisk" />
													<span className="text-slider">SEO</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
													<span className="text-slider">Data Security</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
													<span className="text-slider">Data Security</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pb-130 pt-122 bg-2">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title m0-auto w-680 center mb-60">
										<span className="sub-title texts-blue font-man">Meet Our Team</span>
										<h2 className="title">We’ve Exclusive Team member Meet our Professionals</h2>
									</div>
								</div>
							</div>
							<div className="row mb-40">
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Tommie J. Saruman</Link></h4>
											<p className="job">Senior Consultant</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team1.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Tommie J. Saruman</Link></h4>
											<p className="job">Senior Consultant</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team2.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
											<p className="job">Apps Designer</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team3.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
											<p className="job">Apps Designer</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team4.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Kenneth V. Stutler</Link></h4>
											<p className="job">Designer Manager</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team5.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Robert B. Zellmer</Link></h4>
											<p className="job">Apps Designer</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team6.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
											<p className="job">Apps Designer</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team7.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
								<div className="col-12 col-sm-4 col-lg-3 mb-30">
									<div className="tf-team">
										<div className="content">
											<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
											<p className="job">Apps Designer</p>
										</div>
										<div className="image relative">
											<Link href="/team-details">
												<img src="/assets/images/team/team8.jpg" alt="image" />
											</Link>
											<ul className="social-team flex-five">
												<li>
													<Link href="/#" className="flex-five"><i className="icon-fb" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
												</li>
												<li>
													<Link href="/#" className="flex-five"><i className="icon-ytb" /></Link>
												</li>
											</ul>
										</div>
										<div className="icon-team-plus flex-five"><i className="icon-plus" /></div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 center">
									<Link href="/#" className="button-src">View More Member <i className="icon-angle-right" /></Link>
								</div>
							</div>
						</div>
					</section>
					{/* CTA */}
					<section className="section-cta flex-three flex-wrap ">
						<div className="cta-left bg-5 flex-six flex-wrap">
							<i className="icon-chat" />
							<p>Let’s <span className="font-italic">Discuss &amp; Start </span> IT Consultations</p>
							<Link href="/#" className="let-talk"><span>Let’s Talk</span><i className="icon-angle-right" /></Link>
						</div>
						<div className="cta-right bg-8 flex-three flex-wrap">
							<ul className="image-list flex-three">
								<li>
									<img src="/assets/images/avata/avt1.jpg" alt="Image list" />
								</li>
								<li>
									<img src="/assets/images/avata/avt2.jpg" alt="Image list" />
								</li>
								<li>
									<img src="/assets/images/avata/avt3.jpg" alt="Image list" />
								</li>
								<li>
									<i className="icon-plus" />
								</li>
							</ul>
							<p className="font-man"><span> 1.8 million+ </span> Trusted Clients</p>
						</div>
					</section>
					<section className="faq-team pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-7">
									<div className="faq-main">
										<div className="heading-title mb-30">
											<span className="sub-title text-blue1 font-man">FAQs</span>
											<h2 className="title">Frequently Ask Questions</h2>
										</div>
										<div className="accordion accordion-h4" id="accordionExample">
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
								<div className="col-md-5">
									<div className="image-faq-team">
										<img src="/assets/images/team/team-faq.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}