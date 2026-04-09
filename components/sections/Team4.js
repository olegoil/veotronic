
import Link from "next/link"
import CircleProgress from "../elements/CircleProgress"

export default function Team4() {
	return (
		<>

			<section className="team-member-section-4 pt-122 pb-130 bg-4">
				<div className="tf-container">
					<div className="row mb-70">
						<div className="col-lg-6">
							<div className="heading-title">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Meet Team Member</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We Have 50+ Experience Team
									<span className="text-black mask">Members</span>
								</h2>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="team-member-right">
								<p className="des mb-20 wow fadeInUpSmall" data-wow-delay=".2s">We denounce with righteous indignation and dislike men who are
									beguiled
									and demoralized by the charms of pleasure of the moment
								</p>
								<div className="flex team-member-progress-wrap">
									<div className="progress-box1 flex-three wow fadeInUpSmall" data-wow-delay=".3s">
										<div className="progress-skill">
											<div className="couter2">
											<CircleProgress percentage={93} />
											</div>
										</div>
										<div className="content-progress">
											<h5>Mobile App <br />Development</h5>
										</div>
									</div>
									<div className="progress-box1 flex-three wow fadeInUpSmall" data-wow-delay=".4s">
										<div className="progress-skill">
											<div className="couter2">
											<CircleProgress percentage={68} />
											</div>
										</div>
										<div className="content-progress">
											<h5>Website <br />Development</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="tf-team">
								<div className="content">
									<h4 className="title"><Link href="/team-details">Tommie J. Saruman</Link></h4>
									<p className="job">Senior Consultant</p>
								</div>
								<div className="image relative">
									<Link href="/team-details">
										<img src="/assets/images/team/team1.jpg" alt="image" />
									</Link>
									<ul className="social-team flex-five bg-8">
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
								<div className="icon-team-plus flex-five bg-8"><i className="icon-plus" /></div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-team">
								<div className="content">
									<h4 className="title"><Link href="/team-details">William J. Alexander</Link></h4>
									<p className="job">App Developer</p>
								</div>
								<div className="image relative">
									<Link href="/team-details">
										<img src="/assets/images/team/team2.jpg" alt="image" />
									</Link>
									<ul className="social-team flex-five bg-8">
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
								<div className="icon-team-plus flex-five bg-8"><i className="icon-plus" /></div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-team">
								<div className="content">
									<h4 className="title"><Link href="/team-details">Micheal R. Shannon</Link></h4>
									<p className="job">Apps Designer</p>
								</div>
								<div className="image relative">
									<Link href="/team-details">
										<img src="/assets/images/team/team3.jpg" alt="image" />
									</Link>
									<ul className="social-team flex-five bg-8">
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
								<div className="icon-team-plus flex-five bg-8"><i className="icon-plus" /></div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="tf-team">
								<div className="content">
									<h4 className="title"><Link href="/team-details">Donnie O. Goldsmith</Link></h4>
									<p className="job">Designer Manager</p>
								</div>
								<div className="image relative">
									<Link href="/team-details">
										<img src="/assets/images/team/team4.jpg" alt="image" />
									</Link>
									<ul className="social-team flex-five bg-8">
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
								<div className="icon-team-plus flex-five bg-8"><i className="icon-plus" /></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
