
import Link from "next/link"

export default function Blog5() {
	return (
		<>

			<section className="pt-122 pb-130">
				<div className="tf-container">
					<div className="row mb-60">
						<div className="col-md-7">
							<div className="heading-title">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Latest News &amp; Blog</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Upcoming News <span className="text-blue1 mask">&amp; Blog</span></h2>
							</div>
						</div>
						<div className="col-md-5 al-i-end flex-six btn-read-more-blog wow fadeInUpSmall" data-wow-delay=".3s">
							<Link href="/blog-style2" className="button-src">View All News <i className="icon-angle-right" /></Link>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="tf-blog-style3 ">
								<Link href="/blog-details" className="image relative">
									<img src="/assets/images/blog/blog-h51.jpg" alt="image" />
									<span className="date-ab">25 Dec</span>
								</Link>
								<div className="content style3">
									<span className="date font-man texts-blue">Product Design</span>
									<h3 className="title"><Link href="/blog-details">IT Service Case Studies Accelerating
										Business Fly Success Tech</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog-details" className="read-more">Read More </Link><i className="icon-right-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-blog-style3">
								<Link href="/blog-details" className="image relative">
									<img src="/assets/images/blog/blog-h52.jpg" alt="image" />
									<span className="date-ab">25 Dec</span>
								</Link>
								<div className="content style3">
									<span className="date font-man texts-blue">Product Design</span>
									<h3 className="title"><Link href="/blog-details">IT Service Case Studies Accelerating
										Business Fly Success Tech</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog-details" className="read-more">Read More </Link><i className="icon-right-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-blog-style3">
								<Link href="/blog-details" className="image relative">
									<img src="/assets/images/blog/blog-h53.jpg" alt="image" />
									<span className="date-ab">25 Dec</span>
								</Link>
								<div className="content style3">
									<span className="date font-man texts-blue">Product Design</span>
									<h3 className="title"><Link href="/blog-details">IT Service Case Studies Accelerating
										Business Fly Success Tech</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog-details" className="read-more">Read More </Link><i className="icon-right-icon" />
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
