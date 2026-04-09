import Link from "next/link"

export default function Footer4() {
	return (
		<>

			<footer id="footer" className="footer-style-4 bg-4">
				<div className="tf-container">
					<div className="row footer-top4 pt-130 pb-130">
						<div className="col-lg-5">
							<div className="footer-top-left">
								<h2 className="title">Start your journey to better business</h2>
								<form action="/" id="form-footer" className="form-footer flex mb-15">
									<div className="input-group relative">
										<input type="email" placeholder="Email Address" />
										<i className="icon-envelope4" />
									</div>
									<button className="submit-footer-form" type="submit">Sign Up <i className="icon-angle-right1" /></button>
								</form>
								<p className="accept font-man fw-400 ">By subscribing, you’re accept <Link href="/#" className=" fw-700 text-blue1">Privacy Policy</Link></p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-map">
								<div className="map2 relative">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={300} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footer-top-right">
								<h3 className="title">Main Office</h3>
								<ul className="address">
									<li className="flex">
										<i className="icon-maps" />
										<p>55 Main Street, 2nd block Malborne, Australia</p>
									</li>
									<li className="flex">
										<i className="icon-envelope5" />
										<p>support@gmail.com</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-main4 flex">
						<div className="footer-item-logo">
							<img src="/assets/images/logo-footer3.png" alt="image" className="logo-footer" />
							<p className="des">Sed ut persiciatis unde omnis natus voluptatem accusantium dolore</p>
							<div className="follow-social">
								<h6 className="title">Follow Us</h6>
								<ul className="social-footer flex-three">
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
						<div className="footer-item-quick-link">
							<h4 className="title-menu">Quick Links</h4>
							<ul className="menu-service">
								<li>
									<Link href="/#"><i className="icon-right-icon" />IT Consultancy</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />IT Management</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />IT Supports</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Cloud Computing</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Cyber Security</Link>
								</li>
							</ul>
						</div>
						<div className="footer-item-support">
							<h4 className="title-menu">Support</h4>
							<ul className="menu-service">
								<li>
									<Link href="/#"><i className="icon-right-icon" />Forum Support</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Help &amp; FAQ</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Contact Us</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Pricing and plans</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Cookies Policy</Link>
								</li>
							</ul>
						</div>
						<div className="footer-item-resources">
							<h4 className="title-menu">Resources</h4>
							<ul className="menu-service">
								<li>
									<Link href="/#"><i className="icon-right-icon" />App Builder</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Ecommerce</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Web to Apps</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Case Studies</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />DevOps</Link>
								</li>
							</ul>
						</div>
						<div className="footer-item-our-team">
							<h4 className="title-menu">Join Our Team</h4>
							<p className="des">Utilizing User-friendly CMS like WordPress Drupal Joomla</p>
							<Link href="/#" className="button-src">Open Position <i className="icon-angle-right" /></Link>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
