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
							<Link href="/#">About </Link>
						</li>
						<li>
							<Link href="/#">IT Management</Link>
						</li>
						<li>
							<Link href="/#">Help Center</Link>
						</li>
						<li>
							<Link href="/#">Portfolio</Link>
						</li>
						<li>
							<Link href="/#">Blog</Link>
						</li>
					</ul>
					<p className="des">Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi aliquet, sit amet
						fermentum justo dapibus.</p>
					<div className="footer-main-locations">
						<h5 className="title-footer">Contact</h5>
						<p className="font-man text-lcation">55 Main Street, 2nd block <br />
							Malborne, Australia</p>
						<p className="font-man text-lcation ">support@gmail.com</p>
						<p className="phone">+880 (123) 456 88</p>
					</div>
					<div className="follow-social">
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
					</div>
					<p className="des">© 2023 WiaTech - IT Services.</p>
				</div>
			</div>
			{isOffcanvas && <div className="offcanvas-backdrop fade show" onClick={handleOffcanvas} />}

		</>
	)
}
