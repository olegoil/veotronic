
import Link from "next/link"

export default function CaseStudies2() {
	return (
		<>

			<section className="section-case">
				<div className="tf-container full">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-xl-3 ">
							<div className="tf-case">
								<div className="image-case">
									<img src="/assets/images/image-box/case-h21.jpg" alt="image" />
								</div>
								<div className="content-case">
									<span className="category">Cyber Security</span>
									<h3 className="title">
										<Link href="/project-details">Transforming Businesses with Technology Solutions</Link>
									</h3>
									<div className="link-case">
										<Link href="/project-details">Read More <i className="icon-right-icon" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-xl-3 ">
							<div className="tf-case">
								<div className="image-case">
									<img src="/assets/images/image-box/case-h22.jpg" alt="image" />
								</div>
								<div className="content-case">
									<span className="category">IT Consulting</span>
									<h3 className="title">
										<Link href="/project-details">Unlocking IT Service Excellence in Digital Transformation</Link>
									</h3>
									<div className="link-case">
										<Link href="/project-details">Read More <i className="icon-right-icon" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-xl-3 ">
							<div className="tf-case">
								<div className="image-case">
									<img src="/assets/images/image-box/case-h23.jpg" alt="image" />
								</div>
								<div className="content-case">
									<span className="category">Data Security</span>
									<h3 className="title">
										<Link href="/project-details">Accelerating Business Success Through Technology</Link>
									</h3>
									<div className="link-case">
										<Link href="/project-details">Read More <i className="icon-right-icon" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-xl-3 ">
							<div className="tf-case">
								<div className="image-case">
									<img src="/assets/images/image-box/case-h24.jpg" alt="image" />
								</div>
								<div className="content-case">
									<span className="category">Product Design</span>
									<h3 className="title">
										<Link href="/project-details">Transforming Businesses with
											Technology Solutions</Link>
									</h3>
									<div className="link-case">
										<Link href="/project-details">Read More <i className="icon-right-icon" /></Link>
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
