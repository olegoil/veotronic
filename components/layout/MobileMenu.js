'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ closeMenu }) {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const handleMenuItemClick = () => {
		if (closeMenu) {
			closeMenu()
		}
	}

	return (
		<>
			<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
				<ul className="navigation clearfix">
					<li className={`${pathname === "/" ? "current" : ""}`}>
						<Link href="/" onClick={handleMenuItemClick}>Home</Link>
					</li>
					<li className={`${pathname === "/about-company" ? "current" : ""}`}>
						<Link href="/about-company" onClick={handleMenuItemClick}>About Company</Link>
					</li>
					<li className={`dropdown2 ${isAccordion == 3 ? "open" : ""} ${checkParentActive([
						"/service-ai",
						"/service-auto",
						"/service-api",
						"/service-development",
						"/service-mobile"

					])}`}>
						<Link href="/#">Service</Link>
						<ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/service-ai")}`}>
								<Link href="/service-ai" onClick={handleMenuItemClick}>AI & Machine Learning</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/service-auto")}`}>
								<Link href="/service-auto" onClick={handleMenuItemClick}>Process Automation</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/service-api")}`}>
								<Link href="/service-api" onClick={handleMenuItemClick}>Unified API Platform</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/service-development")}`}>
								<Link href="/service-development" onClick={handleMenuItemClick}>Custom Software Development</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/service-mobile")}`}>
								<Link href="/service-mobile" onClick={handleMenuItemClick}>Mobile App Development</Link>
							</li>							
														
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(3)} />

					</li>
					<li className={`${pathname === "/faq" ? "current" : ""}`}>
						<Link href="/faq" onClick={handleMenuItemClick}>Faq</Link>
					</li>
					<li className={`${pathname === "/contact-us" ? "current" : ""}`}>
						<Link href="/contact-us" onClick={handleMenuItemClick}>Contact</Link>
					</li>
				</ul>
			</div>
		</>
	)
}