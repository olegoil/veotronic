
import Link from "next/link"

export default function Blog1() {
	return (
		<>

			<section className="section-blog pt-122 pb-130">
				<div className="tf-container">
					<div className="row mb-60">
						<div className="col-lg-12">
							<div className="heading-title center">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Latest News &amp; Blog</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Read Our Latest News &amp; Blog</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="tf-blog-style1 relative">
								<Link href="/blog-details" className="image overflow-hiden relative">
									<img src="/assets/images/blog/blogh11.jpg" alt="image" />
								</Link>
								<div className="content style1">
									<span className="date text-white font-man">October 25, 2023</span>
									<h3 className="title"><Link href="/blog-details" className="text-white">IT Service Case
										Accelerating to
										Business Fly Success Tech</Link></h3>
									<Link href="/blog-details" className="read-more text-white">Read More <i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="ml-20px">
								<div className="tf-blog-style2 blog-pd1 bb-blog flex wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="content style1">
										<span className="date font-man">October 25, 2023</span>
										<h3 className="title">
											<Link href="/blog-details">IT Service Case Studies Accelerating
												Business Fly Success Tech</Link>
										</h3>
										<Link href="/blog-details" className="read-more">Read More <i className="icon-right-icon" /></Link>
									</div>
									<Link href="/blog-details" className="image">
										<img src="/assets/images/blog/bogh12.jpg" alt="image" />
									</Link>
								</div>
								<div className="tf-blog-style2 blog-pd1 bb-blog flex wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="content style1">
										<span className="date font-man">October 25, 2023</span>
										<h3 className="title">
											<Link href="/blog-details">IT Service Case Studies Accelerating
												Business Fly Success Tech</Link>
										</h3>
										<Link href="/blog-details" className="read-more">Read More <i className="icon-right-icon" /></Link>
									</div>
									<Link href="/blog-details" className="image">
										<img src="/assets/images/blog/blog-h13.jpg" alt="image" />
									</Link>
								</div>
								<div className="tf-blog-style2 blog-pd1 bb-blog flex wow fadeInUpSmall" data-wow-delay=".5s">
									<div className="content style1">
										<span className="date font-man">October 25, 2023</span>
										<h3 className="title">
											<Link href="/blog-details">IT Service Case Studies Accelerating
												Business Fly Success Tech</Link>
										</h3>
										<Link href="/blog-details" className="read-more">Read More <i className="icon-right-icon" /></Link>
									</div>
									<Link href="/blog-details" className="image">
										<img src="/assets/images/blog/blogh14.jpg" alt="image" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
