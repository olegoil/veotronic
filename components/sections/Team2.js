
import Link from "next/link"

export default function Team2() {
	return (
		<>

			<section className="pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center w-680 m0-auto mb-60">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Meet
									Our Team</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We’ve Exclusive Team member
									Meet our Professionals</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="team-grid-4">
								<div className="tf-team-style2 flex wow fadeInUpSmall" data-wow-delay=".2s">
									<div className="image">
										<img src="/assets/images/team/team-h21.jpg" alt="image" />
									</div>
									<div className="content">
										<h3 className="title"><Link href="/team-details">Robert R. Simmons</Link></h3>
										<p className="job font-man">CEO &amp; Founder</p>
										<div className="line" />
										<ul className="social-team flex-three">
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
								</div>
								<div className="tf-team-style2 flex wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="image">
										<img src="/assets/images/team/teamh22.jpg" alt="image" />
									</div>
									<div className="content">
										<h3 className="title"><Link href="/team-details">Laverne M. Kellems</Link></h3>
										<p className="job font-man">IT Consultant</p>
										<div className="line" />
										<ul className="social-team flex-three">
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
								</div>
								<div className="tf-team-style2 flex wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="image">
										<img src="/assets/images/team/teamh23.jpg" alt="image" />
									</div>
									<div className="content">
										<h3 className="title"><Link href="/team-details">Jermaine P. Elkins</Link></h3>
										<p className="job font-man">Web Designer</p>
										<div className="line" />
										<ul className="social-team flex-three">
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
								</div>
								<div className="tf-team-style2 flex wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="image">
										<img src="/assets/images/team/teamh24.jpg" alt="image" />
									</div>
									<div className="content">
										<h3 className="title"><Link href="/team-details">David R. Robinson</Link></h3>
										<p className="job font-man">Web Developer</p>
										<div className="line" />
										<ul className="social-team flex-three">
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
