
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function Blog3() {
	return (
		<>

			<section className="pb-130 pt-122">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center mb-60">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">News &amp; Blog</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Get Every Single
									<span className=" text-blue1 mask">
										<TextAnimation text1="Wiatech" text2="Updates" />
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="tf-blog-style3 pd-5 bg-sd">
								<Link href="/blog-details" className="image">
									<img src="/assets/images/blog/blog-h3.jpg" alt="" />
								</Link>
								<div className="content style1">
									<span className="date font-man">October 25, 2023</span>
									<h3 className="title"><Link href="/blog-details">IT Service Studies Accelerating
										Business Fly Success Tech</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog-details" className="read-more">Read More </Link><i className="icon-right-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="tf-blog-style3 pd-5 bg-sd">
								<Link href="/blog-details" className="image">
									<img src="/assets/images/blog/blog-h31.jpg" alt="" />
								</Link>
								<div className="content style1">
									<span className="date font-man">October 25, 2023</span>
									<h3 className="title"><Link href="/blog-details">IT Service Studies Accelerating
										Business Fly Success Tech</Link></h3>
									<div className="btn-wrap-link">
										<Link href="/blog-details" className="read-more">Read More </Link><i className="icon-right-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="tf-blog-style3 pd-5 bg-sd">
								<Link href="/blog-details" className="image">
									<img src="/assets/images/blog/blog-h32.jpg" alt="" />
								</Link>
								<div className="content style1">
									<span className="date font-man">October 25, 2023</span>
									<h3 className="title"><Link href="/blog-details">IT Service Studies Accelerating
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
