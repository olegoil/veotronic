
import Link from "next/link"

export default function Feature2() {
	return (
		<>

			<section className="section-feature2 pb-130">
				<div className="tf-container">
					<div className="row mb-60">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">What We Provide</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We Run all kinds of IT services that vow your success</h2>
							</div>
						</div>
					</div>
					<div className="grid-feature">
						<div className="icon-box2 relative wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="icon">
								<i className="icon-technical-support-1" />
							</div>
							<h4 className="title"><Link href="/#">IT Consultancy</Link></h4>
							<div className="check">
								<i className="icon-14" />
							</div>
						</div>
						<div className="icon-box2 relative wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="icon">
								<i className="icon-layers-1" />
							</div>
							<h4 className="title"><Link href="/#">Software Development</Link></h4>
							<div className="check">
								<i className="icon-14" />
							</div>
						</div>
						<div className="icon-box2 relative wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="icon">
								<i className="icon-server" />
							</div>
							<h4 className="title"><Link href="/#">Data Service</Link></h4>
							<div className="check">
								<i className="icon-14" />
							</div>
						</div>
						<div className="icon-box2 relative wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="icon">
								<i className="icon-cyber-security-1" />
							</div>
							<h4 className="title"><Link href="/#">Cyber Security Solutions</Link></h4>
							<div className="check">
								<i className="icon-14" />
							</div>
						</div>
						<div className="icon-box2 relative wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="icon">
								<i className="icon-collaboration" />
							</div>
							<h4 className="title"><Link href="/#">Collaborative Partnership</Link></h4>
							<div className="check">
								<i className="icon-14" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
