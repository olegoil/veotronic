
import Link from "next/link"

export default function Service6() {
	return (
		<>

			<section className="pt-122 pb-130 bg-1">
				<div className="tf-container">
					<div className="row mb-80">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-680">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">What We Provide</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">We Are Specialist We Offer for
									Grow Your <span className="text-blue2 mask">Business</span></h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mb-70">
							<div className="service-item-list">
								<div className="service-item flex-three service-dark wow fadeInUpSmall" data-wow-delay=".3s">
									<div className="image">
										<img src="/assets/images/service/service-bu1.jpg" alt="image" />
									</div>
									<div className="content">
										<p className="category">Design <span className="number">01</span></p>
										<h3 className="title"><Link href="/service-details">Provide Professional Web Design</Link></h3>
									</div>
									<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
										doloremque laudantium, totam rem aperiam</p>
									<div className="btn-main">
										<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
									</div>
								</div>
								<div className="service-item flex-three service-dark wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="image">
										<img src="/assets/images/service/service-bu2.jpg" alt="image" />
									</div>
									<div className="content">
										<p className="category">Development <span className="number">02</span></p>
										<h3 className="title"><Link href="/service-details">Provide Professional Web Development</Link></h3>
									</div>
									<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
										doloremque laudantium, totam rem aperiam</p>
									<div className="btn-main">
										<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
									</div>
								</div>
								<div className="service-item flex-three service-dark wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="image">
										<img src="/assets/images/service/service-bu3.jpg" alt="image" />
									</div>
									<div className="content">
										<p className="category">Marketing <span className="number">03</span></p>
										<h3 className="title"><Link href="/service-details">Digital Marketing Strategy</Link></h3>
									</div>
									<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
										doloremque laudantium, totam rem aperiam</p>
									<div className="btn-main">
										<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
									</div>
								</div>
								<div className="service-item flex-three service-dark wow fadeInUpSmall" data-wow-delay=".5s">
									<div className="image">
										<img src="/assets/images/service/service-bu4.jpg" alt="image" />
									</div>
									<div className="content">
										<p className="category">Motion Design <span className="number">04</span></p>
										<h3 className="title"><Link href="/service-details">3D Design, Motions &amp; Animations</Link></h3>
									</div>
									<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
										doloremque laudantium, totam rem aperiam</p>
									<div className="btn-main">
										<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
									</div>
								</div>
								<div className="service-item flex-three service-dark wow fadeInUpSmall" data-wow-delay=".6s">
									<div className="image">
										<img src="/assets/images/service/service-bu5.jpg" alt="image" />
									</div>
									<div className="content">
										<p className="category">Content <span className="number">05</span></p>
										<h3 className="title"><Link href="/service-details">Content Writing &amp; Email Marketing</Link></h3>
									</div>
									<p className="des">Sed perspiciatis unde omnis natus voluptatem accusantium
										doloremque laudantium, totam rem aperiam</p>
									<div className="btn-main">
										<Link href="/service-details" className="btn-service"><i className="icon-arrow-rights" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 center wow fadeInUpSmall" data-wow-delay=".3s">
							<Link href="/service-details" className="button-src">View All Services <i className="icon-angle-right" /></Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
