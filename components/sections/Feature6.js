
import Link from "next/link"

export default function Feature6() {
	return (
		<>

			<section className="feature-home4 pt-122 pb-130 bg-7">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680 mb-80">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">What We Provide</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We Provide clients with Award
									Winning <span className="text-blue1 mask">Features</span></h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="icon-box6">
								<div className="icons">
									<i className="icon-dev2" />
								</div>
								<h3 className="title"><Link href="/service-details">Mobile App Development</Link></h3>
								<div className="line" />
								<p className="des font-man">Sed persiciats unde natusy volup accusa dolore</p>
								<div className="btn-icon-wrap">
									<Link href="/service-details" className="read-more"> Read More </Link><i className="icon-right-icon" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="icon-box6">
								<div className="icons">
									<i className="icon-app-development" />
								</div>
								<h3 className="title"><Link href="/service-details">Web App Development</Link></h3>
								<div className="line" />
								<p className="des font-man">Sed persiciats unde natusy volup accusa dolore</p>
								<div className="btn-icon-wrap">
									<Link href="/service-details" className="read-more"> Read More </Link><i className="icon-right-icon" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="icon-box6">
								<div className="icons">
									<i className="icon-devops" />
								</div>
								<h3 className="title"><Link href="/service-details">Software Development</Link></h3>
								<div className="line" />
								<p className="des font-man">Sed persiciats unde natusy volup accusa dolore</p>
								<div className="btn-icon-wrap">
									<Link href="/service-details" className="read-more"> Read More </Link><i className="icon-right-icon" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="icon-box6">
								<div className="icons">
									<i className="icon-blockchain" />
								</div>
								<h3 className="title"><Link href="/service-details">NFT <br /> Development</Link></h3>
								<div className="line" />
								<p className="des font-man">Sed persiciats unde natusy volup accusa dolore</p>
								<div className="btn-icon-wrap">
									<Link href="/service-details" className="read-more"> Read More </Link><i className="icon-right-icon" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
