
import Link from "next/link"

export default function Blog4() {
	return (
		<>

			<section className="pt-122">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center mb-70">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">News &amp; Blog</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Get Every Single
									<span className="text-black mask">  Updates</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row align-center">
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-blog-style3 mr-3em bg-sd">
								<Link href="/#" className="image">
									<img src="/assets/images/blog/blog-h41.jpg" alt="image" />
								</Link>
								<div className="content style2">
									<span className="date font-man texts-blue">October 25, 2023</span>
									<h3 className="title"><Link href="/#">IT Service to Accelerating
										Business Fly Success</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog" className="read-more">Read More </Link><i className="icon-right-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-blog-style3 bg-sd">
								<Link href="/blog-details" className="image">
									<img src="/assets/images/blog/blog-h42.jpg" alt="image" />
								</Link>
								<div className="content style2">
									<span className="date font-man texts-blue">October 25, 2023</span>
									<h3 className="title"><Link href="/blog-details">IT Service Studies Accelerating
										Business Fly Success Tech</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog-details" className="read-more">Read More </Link><i className="icon-right-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="tf-blog-style3 ml-3em bg-sd">
								<Link href="/blog-details" className="image">
									<img src="/assets/images/blog/blog-h43.jpg" alt="image" />
								</Link>
								<div className="content style2">
									<span className="date font-man texts-blue">October 25, 2023</span>
									<h3 className="title"><Link href="/blog-details">IT Service to Accelerating
										Business Fly Success</Link></h3>
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
