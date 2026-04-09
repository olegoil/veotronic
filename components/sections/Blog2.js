
import Link from "next/link"

export default function Blog2() {
	return (
		<>

			<section className="section-blog-h2 pt-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12 col-xl-4">
							<div className="content-blog-h2">
								<div className="heading-title">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Latest News &amp; Blog</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Get Every Single
										Updates</h2>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">At Startup Name, we understand
										that every challenge is an
										opportunity, and we here seize
										it. With a team of dedicated</p>
								</div>
								<ul className="icon-listing">
									<li className="flex-three wow fadeInUpSmall" data-wow-delay=".4s">
										<i className="icon-Check" />
										<p className="font-man">Professional Team Member</p>
									</li>
									<li className="flex-three wow fadeInUpSmall" data-wow-delay=".5s">
										<i className="icon-Check" />
										<p className="font-man">Awards Winning IT Solutions Company</p>
									</li>
								</ul>
								<Link href="/blog" className="button-src wow fadeInUpSmall" data-wow-delay=".4s">View All News <i className="icon-angle-right" /></Link>
							</div>
						</div>
						<div className="col-lg-12 col-xl-8">
							<div className="row">
								<div className="col-md-6 wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="tf-blog-style1 relative">
										<Link href="/blog-details" className="image overflow-hiden relative">
											<img src="/assets/images/blog/blog-h2.jpg" alt="image" />
										</Link>
										<div className="content style2">
											<span className="date text-white font-man">October 25, 2023</span>
											<h3 className="title"><Link href="/blog-details" className="text-white">IT Service Case
												Accelerating to Business Fly Success Tech</Link></h3>
											<Link href="/blog-details" className="read-more text-white">Read More <i className="icon-right-icon" /></Link>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="ml-30px">
										<div className="tf-blog-style2 blog-pd2 bb-blog wow fadeInUpSmall" data-wow-delay=".2s">
											<div className="content style2">
												<span className="date font-man">October 25, 2023</span>
												<h3 className="title">
													<Link href="/blog-details">IT Service Case Studies Accelerating
														Business Fly Success Tech</Link>
												</h3>
												<Link href="/blog-details" className="read-more">Read More <i className="icon-right-icon" /></Link>
											</div>
										</div>
										<div className="tf-blog-style2 blog-pd2 bb-blog wow fadeInUpSmall" data-wow-delay=".3s">
											<div className="content style2">
												<span className="date font-man">October 25, 2023</span>
												<h3 className="title">
													<Link href="/blog-details">IT Service Case Studies Accelerating
														Business Fly Success Tech</Link>
												</h3>
												<Link href="/blog-details" className="read-more">Read More <i className="icon-right-icon" /></Link>
											</div>
										</div>
										<div className="tf-blog-style2 blog-pd2bb-blog wow fadeInUpSmall" data-wow-delay=".4s">
											<div className="content style2">
												<span className="date font-man">October 25, 2023</span>
												<h3 className="title">
													<Link href="/blog-details">IT Service Case Studies Accelerating
														Business Fly Success Tech</Link>
												</h3>
												<Link href="/blog-details" className="read-more">Read More <i className="icon-right-icon" /></Link>
											</div>
										</div>
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
