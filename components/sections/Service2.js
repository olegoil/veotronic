
import Link from "next/link"

export default function Service2() {
	return (
		<>

			<section className="section-service-h2 pt-122 bg-1 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center w-650 m0-auto mb-60">
								<span className="sub-title text-white font-man wow fadeInUpSmall" data-wow-delay=".2s">Popular Services</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Empowering Your
									Startup
									with Our Services</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-curve" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/#">Web Design</Link></h3>
									<p className="des">Dynamic world startups innovation
										adaptability are key drivers</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-data-security" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/#">Data Security</Link></h3>
									<p className="des">We are fueled by a relentle passion helping emerging ventures
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-analysis" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/#">Infrastructure Plan</Link></h3>
									<p className="des"> journey began with a simple but to provide startups tools</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-group" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/#">Software Development</Link></h3>
									<p className="des">We understand that every startup unique with its own vision</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-datas" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/#">Data and analytics</Link></h3>
									<p className="des">That's why our range of services, from strategic consulting</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".6s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-self-development-2" />
								</div>
								<div className="content">
									<h3 className="title text-white"><Link href="/#">Firewall Advancement</Link></h3>
									<p className="des">Exciting adventure together ware
										turning your startup</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
