
import Link from "next/link"

export default function Feature4() {
	return (
		<>

			<section className="feature-home3">
				<div className="tf-container">
					<div className="bg-feature-wrap bg-4 relative z-index-3 mb--10em">
						<div className="row">
							<div className="col-lg-4 wow fadeInUpSmall" data-wow-delay=".2s">
								<div className="icon-box4">
									<div className="icons">
										<i className="icon-cyber-security-1" />
									</div>
									<h3 className="title"><Link href="/service-details">Infrastructure Integration Technology </Link></h3>
									<p className="des font-man">Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium totam</p>
									<Link href="/service-details" className="read-more">Read More <i className="icon-angle-right" /></Link>
								</div>
							</div>
							<div className="col-lg-4 wow fadeInUpSmall" data-wow-delay=".3s">
								<div className="icon-box4">
									<div className="icons">
										<i className="icon-cyber-attack" />
									</div>
									<h3 className="title"><Link href="/service-details">Highly Professional &amp; Expert
										Team Members</Link></h3>
									<p className="des font-man">Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium totam</p>
									<Link href="/service-details" className="read-more">Read More <i className="icon-angle-right" /></Link>
								</div>
							</div>
							<div className="col-lg-4 wow fadeInUpSmall" data-wow-delay=".4s">
								<div className="icon-box4">
									<div className="icons">
										<i className="icon-security" />
									</div>
									<h3 className="title"><Link href="/service-details">Information Security
										Management</Link></h3>
									<p className="des font-man">Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium totam</p>
									<Link href="/service-details" className="read-more">Read More <i className="icon-angle-right" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
