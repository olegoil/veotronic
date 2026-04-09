'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu() {
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
	return (
		<>
			<div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
				<ul className="navigation clearfix">
					<li className={`dropdown2 ${isAccordion == 1 ? "open" : ""} ${checkParentActive([
						"/home2",
						"/home3",
						"/home4",
						"/home5",
						"/home6",
					])}`}>
						<Link href="/#">Home</Link>
						<ul style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/")}`}>
								<Link href="/">Home 01</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home2")}`}>
								<Link href="/home2">Home 02</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home3")}`}>
								<Link href="/home3">Home 03</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home4")}`}>
								<Link href="/home4">Home 04</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home5")}`}>
								<Link href="/home5">Home 05</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home6")}`}>
								<Link href="/home6">Home 06</Link>
							</li>
						</ul>
						<div class="dropdown2-btn" onClick={() => handleAccordion(1)} />

					</li>
					<li className={`dropdown2 ${isAccordion == 2 ? "open" : ""} ${checkParentActive([
						"/about-company",
						"/team",
						"/team-details",

					])}`}>
						<Link href="/#">Company</Link>
						<ul style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/about-company",)}`}>
								<Link href="/about-company">About Company</Link>

							</li>
							<li className={`${checkCurrentMenuItem("/team",)}`}>
								<Link href="/team">Team Member</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/team-details",)}`}>
								<Link href="/team-details">Team Details</Link>

							</li></ul>
						<div class="dropdown2-btn" onClick={() => handleAccordion(2)} />

					</li>
					<li className={`dropdown2 ${isAccordion == 3 ? "open" : ""} ${checkParentActive([
						"/service1",
						"/service2",
						"/service-details"

					])}`}>
						<Link href="/#">Service</Link>
						<ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/service1")}`}>
								<Link href="/service1">Service 01</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/service2")}`}>
								<Link href="/service2">Service 02</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/service-details")}`}>
								<Link href="/service-details">Service
									Details</Link>
							</li>
						</ul>
						<div class="dropdown2-btn" onClick={() => handleAccordion(3)} />

					</li>
					<li className={`dropdown2 ${isAccordion == 4 ? "open" : ""} ${checkParentActive([
						"/project-grid",
						"/project-mansory",
						"/project-slider",
						"/project-details"

					])}`}>
						<Link href="/#">Project Grid</Link>
						<ul style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/project-grid")}`}>
								<Link href="/project-grid">Project Grid</Link>

							</li>
							<li className={`${checkCurrentMenuItem("/project-mansory")}`}>
								<Link href="/project-mansory">Project
									Masonry</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/project-slider")}`}>
								<Link href="/project-slider">Project Slider</Link>

							</li>
							<li className={`${checkCurrentMenuItem("/project-details")}`}>
								<Link href="/project-details">Project
									Details</Link>
							</li>
						</ul>
						<div class="dropdown2-btn" onClick={() => handleAccordion(4)} />

					</li>
					<li className={`dropdown2 ${isAccordion == 5 ? "open" : ""} ${checkParentActive([
						"/faq",
						"/pricing",
						"/404",

					])}`}>
						<Link href="/#">Page</Link>
						<ul style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/faq")}`}>
								<Link href="/faq">Faq Page</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/pricing")}`}>
								<Link href="/pricing">Price Page</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/404")}`}>
								<Link href="/404">404 Page</Link>
							</li>
						</ul>
						<div class="dropdown2-btn" onClick={() => handleAccordion(5)} />

					</li>
					<li className={`dropdown2 ${isAccordion == 6 ? "open" : ""} ${checkParentActive([
						"/blog",
						"/blog-style2",
						"/blog-details"

					])}`}>
						<Link href="/#">Blog</Link>
						<ul style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/blog")}`}>
								<Link href="/blog">Blog Full</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/blog-style2")}`}>
								<Link href="/blog-style2">Blog List</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/blog-details")}`}>
								<Link href="/blog-details">Blog Detail</Link>
							</li>
						</ul>
						<div class="dropdown2-btn" onClick={() => handleAccordion(6)} />

					</li>
					<li className={`${pathname === "/contact-us" ? "current" : ""}`}>
						<Link href="/contact-us">Contact</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
