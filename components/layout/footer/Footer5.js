import Link from "next/link"

export default function Footer5() {
	return (
		<>

			<footer id="footer" className="footer-style-5 bg-1">
				<div className="tf-container">
					<div className="row footer-top5">
						<div className="col-md-3">
							<div className="logo-footer">
								<img src="/assets/images/logo-footer2.png" alt="image" />
							</div>
						</div>
						<div className="col-md-9">
							<ul className="social-footer5 flex-six">
								<li>
									<Link href="/#"><i className="icon-facebook" /><span>Facebook</span></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-twiter" /><span>Twiter</span></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-ins" /><span>LinkedIn</span></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-instagram" /><span>Instagram</span></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="row footer-main5">
						<div className="col-md-4">
							<div className="footer-newsletter">
								<h2 className="title-new text-white mb-23">Subscribe <span className="font-italic">Newsletter</span></h2>
								<p className="text-white mb-40">We understand that every challenge is an opportunity
									team of dedicated professionals a culture
								</p>
								<form action="/" className="form-footer flex mb-15">
									<div className="input-group relative">
										<input type="email" placeholder="Email Address" name="email-form" id="subscribe-email" />
										<i className="icon-envelope4" />
									</div>
									<button className="submit-footer-form" id="subscribe-button" type="submit">Sign Up <i className="icon-angle-right1" /></button>
								</form>
								<p className="accept font-man fw-400 text-white">By subscribing, you’re accept <Link href="/#" className="text-white fw-700">Privacy Policy</Link></p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="footer-menu-service">
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
						<div className="col-md-5">
							<div className="footer-contact">
								<p className="des">Need Professional Web Design and Development
									Solutions to Grow your Business
								</p>
								<div className="flex-one address-wrap">
									<div className="address">
										<h5 className="title-footer text-white">Locations</h5>
										<p className="font-man text-lcation text-white mb-20">55 Main Street, 2nd block <br />
											Malborne, Australia</p>
									</div>
									<div className="address">
										<h5 className="title-footer text-white">Contact</h5>
										<p className="font-man text-lcation text-white">support@gmail.com</p>
										<p className="phone text-white">+880 (123) 456 88</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row footer-bottom5 align-center">
						<div className="col-md-5">
							<p className="text-white">© 2023 WiaTech - IT Services. All rights reserved.</p>
						</div>
						<div className="col-md-2">
							<a id="scroll-top" className="button-go go-top-h5 relative" />
						</div>
						<div className="col-md-5">
							<ul className="menu-right-bottom flex-six">
								<li>
									<Link href="/#">Company</Link>
								</li>
								<li>
									<Link href="/#">Support</Link>
								</li>
								<li>
									<Link href="/#">Privacy</Link>
								</li>
								<li>
									<Link href="/#">Faqs</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
