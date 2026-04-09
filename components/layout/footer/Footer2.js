import Link from "next/link"

export default function Footer2() {
	return (
		<>

			<footer id="footer" className="bg-1">
				<div className="tf-container">
					<div className="row footer-top flex-three">
						<div className="col-md-3">
							<Link href="/#" className="logo-footer">
								<img src="/assets/images/logo-footer.png" alt="" />
							</Link>
						</div>
						{/* <div className="col-md-9">
							<ul className="social-footer flex-six">
								<li>
									<Link href="/#" className="font-man"><i className="icon-facebook" />Facebook</Link>
								</li>
								<li>
									<Link href="/#" className="font-man"><i className="icon-tw" />Twitter</Link>
								</li>
								<li>
									<Link href="/#" className="font-man"><i className="icon-in" />LinkedIn</Link>
								</li>
								<li>
									<Link href="/#" className="font-man"><i className="icon-instagram" />Instagram</Link>
								</li>
							</ul>
						</div> */}
					</div>
					<div className="footer-main row">
						<div className="col-md-6">
							<div className="footer-main-newsletter">
								<h2 className="title-new text-white mb-23">Subscribe <span className="font-italic">Newsletter</span></h2>
								<p className="text-white mb-60">Veotronic builds smart technology for modern businesses. From AI automation to custom software and API integration — we deliver solutions that solve real problems. Let's build something great together
								</p>
								<form action="/" className="form-footer flex mb-15" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
									<div className="input-group relative">
										<input type="email" placeholder="Email Address" name="email-form" id="subscribe-email" />
										<i className="icon-envelope4" />
									</div>
									<button className="submit-footer-form" type="submit" id="subscribe-button">Sign Up <i className="icon-angle-right1" /></button>
								</form>
								<p className="accept font-man fw-400 text-white">By subscribing, you’re accept <Link href="/privacy-policy" className="text-white fw-700">Privacy Policy</Link></p>
							</div>
						</div>
						<div className="col-md-6 footer-main-right flex-one">
							<div className="footer-main-service">
								<h5 className="title-footer text-white">Services</h5>
								<ul className="menu-service">
									<li>
										<Link href="/service-ai">AI &amp; Machine Learning</Link>
									</li>
									<li>
										<Link href="/service-auto">Process Automation</Link>
									</li>								
									<li>
										<Link href="/service-api">Unified API Platform</Link>
									</li>
									<li>
										<Link href="/service-development">Custom Software Development</Link>
									</li>
									<li>
										<Link href="/service-mobile">Mobile App Development</Link>
									</li>								
								</ul>
							</div>
							<div className="footer-main-locations">
								<h5 className="title-footer text-white">Locations</h5>
								<p className="font-man text-lcation text-white mb-20">55 Main Street, 2nd block <br />
									Malborne, Australia</p>
								<h5 className="title-footer text-white">Contact</h5>
								<p className="font-man text-lcation ">support@gmail.com</p>
								<p className="phone text-white">+880 (123) 456 88</p>
							</div>
						</div>
					</div>
					<div className="row footer-bottom">
						<div className="col-lg-12">
							<p className="coppy-right center text-white">© 2023 Veotronic — AI & IT Solutions. All rights reserved
							</p>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
