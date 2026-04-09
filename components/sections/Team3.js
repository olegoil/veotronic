
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function Team3() {
	return (
		<>

			<section className="pt-122 pb-130 team-member bg-4">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-760 mb-60">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Team Member</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Meet Our Experts Driving Success
									Through Collaborative
									<span className=" text-blue1 mask">
										<TextAnimation text1="Expertise" text2="Wetech" />
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="tf-team-style3 hover-social">
								<div className="image">
									<img src="/assets/images/team/team-h31.png" alt="image" />
								</div>
								<div className="content center">
									<h3 className="title"><Link href="/team-details">Rocco J. Martin</Link></h3>
									<p className="job">Product Designer</p>
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
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-team-style3 hover-social">
								<div className="image">
									<img src="/assets/images/team/team-h32.png" alt="image" />
								</div>
								<div className="content center">
									<h3 className="title"><Link href="/team-details">Galen B. Woodhouse</Link></h3>
									<p className="job">Product Designer</p>
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
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-team-style3 hover-social">
								<div className="image">
									<img src="/assets/images/team/team-h33.png" alt="image" />
								</div>
								<div className="content center">
									<h3 className="title"><Link href="/team-details">Brandon K. Bishop</Link></h3>
									<p className="job">IT Consultant</p>
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
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="tf-team-style3 hover-social">
								<div className="image">
									<img src="/assets/images/team/team-h34.png" alt="image" />
								</div>
								<div className="content center">
									<h3 className="title"><Link href="/team-details">Donald A. Thompson</Link></h3>
									<p className="job">Product Manager</p>
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
