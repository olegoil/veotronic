
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function Service3() {
	return (
		<>

			<section className="pt-122 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680 mb-80">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Cyber Security Solutions</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Reach out to the world’s most
									Reliable IT
									<span className=" text-blue1 mask">
										<TextAnimation text1="Services" text2="Wetech" />
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row service-wrap-h3">
						<div className="col-lg-4">
							<div className="service-h3-left">
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="icons">
										<i className="icon-infrastructure" />
									</div>
									<h3 className="title"><Link href="/#">Network Infrastructure</Link></h3>
									<p className="des font-man">Sed ut perspic unde omnis isnatus
										sit voluptatem accusantium</p>
								</div>
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="icons">
										<i className="icon-local-area-network" />
									</div>
									<h3 className="title"><Link href="/#">Network Monitoring</Link></h3>
									<p className="des font-man">Sed ut perspic unde omnis isnatus
										sit voluptatem accusantium</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="service-image-h3 layer">
								<img src="/assets/images/page/serviceh3.png" alt="image" />
							</div>
						</div>
						<div className="col-lg-4">
							<div className="service-h3-right ">
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="icons">
										<i className="icon-smart-grid" />
									</div>
									<h3 className="title"><Link href="/#">Cloud Solutions</Link></h3>
									<p className="des font-man">Sed ut perspic unde omnis isnatus
										sit voluptatem accusantium</p>
								</div>
								<div className="icon-box5 bg-4 wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="icons">
										<i className="icon-backup" />
									</div>
									<h3 className="title"><Link href="/#">Backup &amp; Recovery</Link></h3>
									<p className="des font-man">Sed ut perspic unde omnis isnatus
										sit voluptatem accusantium</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
