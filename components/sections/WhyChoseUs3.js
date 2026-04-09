
import Link from "next/link"

export default function WhyChoseUs3() {
	return (
		<>

			<section className="pt-130 pb-130 wcus-section4">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="wcus-section4-content">
								<div className="heading-title">
									<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Why Choose Us</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">We Use Latest Technology to Run Your
										<span className="text-black mask"> Project</span>
									</h2>
								</div>
								<div className="icon-list-wcus-wrap">
									<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".3s">
										<div className="icons">
											<i className="icon-ai" />
										</div>
										<div className="content">
											<h3 className="title"><Link href="/#">Technology Integration</Link></h3>
											<p className="des font-man">We denounce with righteous indignation and
												dislike men who
												are beguiled and demoralized by the charms of pleasure of the moment
											</p>
										</div>
									</div>
									<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".4s">
										<div className="icons">
											<i className="icon-contract" />
										</div>
										<div className="content ">
											<h3 className="title"><Link href="/#">Certified Experts</Link></h3>
											<p className="des font-man">We denounce with righteous indignation and
												dislike men who
												are beguiled and demoralized by the charms of pleasure of the moment
											</p>
										</div>
									</div>
									<div className="icon-box7 flex bb-blog wow fadeInUpSmall" data-wow-delay=".5s">
										<div className="icons">
											<i className="icon-milestones" />
										</div>
										<div className="content ">
											<h3 className="title"><Link href="/#">Future Vision and Mission</Link></h3>
											<p className="des font-man">We denounce with righteous indignation and
												dislike men who
												are beguiled and demoralized by the charms of pleasure of the moment
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="wcus-section4-image relative">
								<img src="/assets/images/page/w-c-us-home4.jpg" alt="image" className="wcus-h41" />
								<img src="/assets/images/page/wcus-h4-2.png" alt="image" className="wcus-h42" />
								<div className="clip" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
