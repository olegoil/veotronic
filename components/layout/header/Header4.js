import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, handleSearch, handleOffcanvas }) {
	return (
		<>

			<header className="main-header header-style3">
				{/* Header Lower */}
				<div className={`header-lower ${scroll ? 'is-fixed is-small' : ''}`}>
					<div className="tf-container full">
						<div className="row">
							<div className="col-lg-12">
								<div className="inner-container flex justify-space align-center">
									{/* Logo Box */}
									<div className="header-left flex">
										<div className="logo-box">
											<div className="logo">
												<Link href="/">
													<img src="/assets/images/logo-footer3.png" alt="Logo" />
												</Link>
											</div>
										</div>
										<div className="nav-outer flex align-center">
											{/* Main Menu */}
											<nav className="main-menu show navbar-expand-md">
												<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
													<Menu />
												</div>
											</nav>
											{/* Main Menu End*/}
										</div>
										<div className="header-search" onClick={handleSearch}>
											<a> <i className="icon-search-icon" /> </a>
										</div>
									</div>
									<div className="header-account flex align-center">
										<div className="flat-bt-top sc-btn-top">
											<Link href="/#" className="button-src">Get Started4 <i className="icon-angle-right" /></Link>
										</div>
										<div className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu}>
											<i className="icon-uni" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Header Lower */}
				{/* Mobile Menu  */}
				<div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-cancel-1" /></div>
				<div className="mobile-menu">
					<div className="menu-backdrop" onClick={handleMobileMenu} />
					<nav className="menu-box">
						<div className="nav-logo"><Link href="/">
							<img src="/assets/images/logo-footer.png" alt="" /></Link></div>
						<div className="bottom-canvas">
						<div className="menu-outer">
								<MobileMenu />
							</div>
						</div>
					</nav>
				</div>
				{/* End Mobile Menu */}
			</header>

		</>
	)
}
