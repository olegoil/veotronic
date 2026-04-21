'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Team1() {
	const [isHover, setIsHover] = useState(1)
	const handleHover = (i) => {
		setIsHover(i)
	}
	return (
		<>

			<section className="section-team pt-122 pb-130 relative">
				<div className="shape-team">
					<svg width={224} height={300} viewBox="0 0 224 300" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_284_4466)">
							<path d="M72.1031 71.6847L108.53 0L107.469 80.4017L173.038 33.8549L134.735 104.556L214.423 93.813L147.655 138.615L223.206 166.139L143.266 174.778L197.373 234.257L122.571 204.754L142.841 282.566L90.3166 221.685L72.1031 300L53.8897 221.685L1.36571 282.566L21.6355 204.754L-53.1667 234.257L0.940048 174.778L-79 166.139L-3.44844 138.615L-70.217 93.813L9.47123 104.556L-28.8321 33.8549L36.7374 80.4017L35.6763 0L72.1031 71.6847Z" fill="currentcolor" fillOpacity="0.03" />
						</g>
						<defs>
							<clipPath id="clip0_284_4466">
								<rect width="302.206" height={300} fill="white" transform="translate(-79)" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<div className="shape-team1">
					<img src="/assets/images/page/circel.png" alt="image" />
				</div>
				<div className="shape-team2" />
				<div className="tf-container">
					<div className="row mb-60">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Meet Our Team</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Exclusive professionals. Real expertise. Ready to build</h2>
							</div>
						</div>
					</div>
					<div className="row relative z-index-3 mb-50 group-team-style1">
						<div className="col-md-5 content-left">
							<div className="tf-team-list flex-one team-post team-post-11 wow fadeInUpSmall" data-wow-delay=".2s" data-id={11} onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(1)}>
								<div className="flex">
									<span className="number">01</span>
									<div className="box-wrap">
										<h3 className="name">Egor Lasitsa</h3>
										<p className="job font-man">Account Executive</p>
									</div>
								</div>
								{/* <Link href="/team-details" className="link-team flex-five"><i className="icon-top" /></Link> */}
							</div>
							<div className="tf-team-list flex-one team-post team-post-22 wow fadeInUpSmall" data-wow-delay=".3s" data-id={22} onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(2)}>
								<div className="flex">
									<span className="number">02</span>
									<div className="box-wrap">
										<h3 className="name">Vlady Lasitsa</h3>
										<p className="job font-man">Chief Financial Officer</p>
									</div>
								</div>
								{/* <Link href="/team-details" className="link-team flex-five"><i className="icon-top" /></Link> */}
							</div>
							<div className="tf-team-list flex-one team-post team-post-33 wow fadeInUpSmall" data-wow-delay=".4s" data-id={33} onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(3)}>
								<div className="flex">
									<span className="number">03</span>
									<div className="box-wrap">
										<h3 className="name">Yan Smetanskiy</h3>
										<p className="job font-man">Senior Developer</p>
									</div>
								</div>
								{/* <Link href="/team-details" className="link-team flex-five"><i className="icon-top" /></Link> */}
							</div>
							<div className="tf-team-list flex-one team-post team-post-44 wow fadeInUpSmall" data-wow-delay=".4s" data-id={44} onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleHover(4)}>
								<div className="flex">
									<span className="number">04</span>
									<div className="box-wrap">
										<h3 className="name">Oleg Kono</h3>
										<p className="job font-man">Senior Developer</p>
									</div>
								</div>
								{/* <Link href="/team-details" className="link-team flex-five"><i className="icon-top" /></Link> */}
							</div>
						</div>
						<div className="col-md-7 content-right">
							<div className="item-team-grid">
								<div className={`item-team-member team-post team-post-11 item1 relative ${isHover == 1 ? "active-thumb" : ""}`} data-id={11}>
									
										<img src="/assets/images/team/teamh1_new.jpg" alt="image" />
									
									{/* <ul className="social-team flex-three">
										<li>
											<Link href="/#"><i className="icon-facebook" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-twiter" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ins" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ytb" /></Link>
										</li>
									</ul> */}
								</div>
								<div className={`item-team-member team-post team-post-22 item2 relative ${isHover == 2 ? "active-thumb" : ""}`} data-id={22}>
									
										<img src="/assets/images/team/teamh1_new4.jpg" alt="image" />
									
									{/* <ul className="social-team flex-three">
										<li>
											<Link href="/#"><i className="icon-facebook" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-twiter" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ins" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ytb" /></Link>
										</li>
									</ul> */}
								</div>
								<div className={`item-team-member team-post team-post-33 item3 relative ${isHover == 3 ? "active-thumb" : ""}`} data-id={33}>
									
										<img src="/assets/images/team/teamh1_new2.jpg" alt="image" />
									
									{/* <ul className="social-team flex-three">
										<li>
											<Link href="/#"><i className="icon-facebook" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-twiter" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ins" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ytb" /></Link>
										</li>
									</ul> */}
								</div>
								<div className={`item-team-member team-post team-post-44 item4 relative ${isHover == 4 ? "active-thumb" : ""}`} data-id={44}>
									
										<img src="/assets/images/team/teamh1_new3.jpg" alt="image" />
									
									{/* <ul className="social-team flex-three">
										<li>
											<Link href="/#"><i className="icon-facebook" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-twiter" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ins" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-ytb" /></Link>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
