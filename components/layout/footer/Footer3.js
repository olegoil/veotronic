import Link from "next/link"

export default function Footer3() {
	return (
		<>

			<footer id="footer" className="footer-style-3 bg-3 overflow-hiden relative">
				<img src="/assets/images/page/mask-banner3.png" alt="image" className="mask-banner3" />
				<div className="tf-container">
					<div className="row z-index-3 relative">
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="logo-footer">
								<img src="/assets/images/logo-footer2.png" alt="image" className="logo" />
								<p className="des">IT professionals, we work closely with
									you to understand your objectives and challenges, and develop tailor</p>
								<form action="/" className="form-footer3 relative flex" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
									<i className="icon-envelope" />
									<input type="email" placeholder="Email Address" name="email-form" id="subscribe-email" />
									<button type="submit" id="subscribe-button"><i className="icon-arrow-right" /></button>
								</form>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="footer-main-service">
								<h5 className="title-footer text-white">Services</h5>
								<ul className="menu-service">
									<li>
										<Link href="/#">Web (UX/UI) Design</Link>
									</li>
									<li>
										<Link href="/#">Machine Learning &amp; AI</Link>
									</li>
									<li>
										<Link href="/#">Web Development</Link>
									</li>
									<li>
										<Link href="/#">IT Cyber Security</Link>
									</li>
									<li>
										<Link href="/#">Cloud Computing</Link>
									</li>
									<li>
										<Link href="/#">Analytic &amp; Engineering</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="footer-main-locations">
								<h5 className="title-footer text-white">Locations</h5>
								<p className="font-man text-lcation text-white mb-20">55 Main Street, 2nd block <br />
									Malborne, Australia</p>
								<h5 className="title-footer text-white">Contact</h5>
								<p className="font-man text-lcation ">support@gmail.com</p>
								<p className="phone text-white">+880 (123) 456 88</p>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="footer-download-ap">
								<h5 className="title-footer text-white">Download App</h5>
								<p className="font-man text-lcation">Utilizing a User-friendly CMS like WordPress Drupal Joomla</p>
								<div className="btn-wrap">
									<Link href="/#" className="button-src gg-play">Google Play <i className="icon-angle-right" />
									</Link>
									<Link href="/#" className="button-src apple-store">Apple Store <i className="icon-angle-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom3 z-index-3 relative bg-3">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<p className="text-white">© 2023 WebTech - IT Services. All rights reserved.</p>
							</div>
							<div className="col-lg-6">
								<ul className="social-share flex-six">
									<li>
										<Link href="/#" className="flex-five"><i className="icon-facebook" /></Link>
									</li>
									<li>
										<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
									</li>
									<li>
										<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
									</li>
									<li>
										<Link href="/#" className="flex-five"><i className="icon-instagram" /></Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
