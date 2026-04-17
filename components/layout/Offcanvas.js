import Link from "next/link"

export default function Offcanvas({ handleOffcanvas, isOffcanvas }) {
	return (
		<>
			<div className={`offcanvas offcanvas-end hamburger-area ${isOffcanvas ? 'show' : ''}`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header">
					<button type="button" className="btn-close" onClick={handleOffcanvas} />
				</div>
				<div className="offcanvas-body">
					<ul className="menu-service">
						<li>
							<Link href="/service-ai">AI & Machine Learning</Link>
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
					<p className="des">We understand that every challenge is an opportunity we are here seize a team of dedicated professionals and a culture</p>
					<div className="footer-main-locations">
						<h5 className="title-footer">Contact</h5>
						<p className="font-man text-lcation">23587 N Field Rd, Lake Zurich, IL 60047, United States</p>
						<p className="font-man text-lcation "><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
						<p className="phone"><a href="tel:+1 (224) 206-0034" className='text-white'>+1 (224) 206-0034</a></p>
					</div>
					{/* <div className="follow-social">
						<span>Follow Us</span>
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
					</div> */}
					<p className="des">&copy; {new Date().getFullYear()} Veotronic — Digital solutions. All rights reserved.</p>
				</div>
			</div>
			{isOffcanvas && <div className="offcanvas-backdrop fade show" onClick={handleOffcanvas} />}

		</>
	)
}
