// app/about/page.js
'use client'
import CounterNumber from "@/components/elements/CounterNumber"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { collection1, collection2, myTeamMember, myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from "next/head"

import { useState } from "react"
import CircleProgress from "../../components/elements/CircleProgress"

export default function AboutCompany() {
	const [isTab, setIsTab] = useState(1)
	const [isVisible, setIsVisible] = useState(true)
	const handleTab = (i) => {
		setIsTab(i)
		setIsVisible(false)
		setTimeout(() => {
			setIsVisible(true)
		}, 200)
	}

	return (
		<>
			<Head>
				{/* Basic meta tags */}
				<title>About Veotronic — 10+ Years of IT Excellence | Custom Software Development</title>
				<meta name="description" content="Learn about Veotronic. 10+ years of experience, 200+ projects delivered. Our team of experts builds custom software, AI automation, and API platforms for businesses worldwide." />
				<meta name="keywords" content="about Veotronic, IT company, software development, AI automation, custom software, IT services, development team" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Veotronic" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://veotronic.com/about" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com/about" />
				<meta property="og:title" content="About Veotronic — 10+ Years of IT Excellence" />
				<meta property="og:description" content="Learn about Veotronic. 10+ years of experience, 200+ projects delivered. Expert team for custom software, AI automation, and API platforms." />
				<meta property="og:image" content="https://veotronic.com/og-image-about.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://veotronic.com/about" />
				<meta name="twitter:title" content="About Veotronic — IT Excellence" />
				<meta name="twitter:description" content="10+ years of experience, 200+ projects delivered. Expert team for custom software development and AI automation." />
				<meta name="twitter:image" content="https://veotronic.com/og-image-about.jpg" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Company">
				
				<div>
					
					<section className="can-do-it pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="can-do-it-image relative">
										<div className="elip" />
										<img src="/assets/images/page/image-feature-h41_new.jpg" alt="Veotronic team working on software development" className="cdit-image" />
										<img src="/assets/images/page/image-feature-h41_new2.jpg" alt="Veotronic office and development environment" className="cdit-image1" />
										<div className="quote-feature-wrap">
											<div className="counter tf-counter">
												<div className="number number-style" data-speed={2000} data-to={10} data-inviewport="yes"><CounterNumber count={10} /></div>
											</div>
											<span className="text-white">Years Of Experience</span>
											<div className="icon-svg">
												<svg width={148} height={5} viewBox="0 0 148 5" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C116.617 2.03846 118.83 2.07692 121.1 2.15385C122.76 2.19231 124.476 2.23077 126.136 2.26923C127.354 2.30769 128.516 2.34615 129.734 2.38462C133.221 2.5 136.763 2.65385 140.25 2.80769C141.135 2.84615 142.021 2.88462 142.906 2.92308C143.847 2.96154 144.844 3 145.784 3.07692C145.951 3.07692 146.061 3.11539 146.227 3.15385C146.615 3.19231 146.947 3.19231 147.279 3.03846C147.611 2.92308 147.832 2.69231 147.943 2.46154C148.164 1.96154 147.722 1.42308 146.947 1.26923C146.283 1.15385 145.618 1.11538 145.01 1.03846C144.567 1 144.124 0.961538 143.681 0.961538C142.796 0.884615 141.91 0.884615 141.08 0.807692C139.53 0.769231 137.87 0.692308 136.265 0.615385Z" fill="currentcolor" />
												</svg>
											</div>
											<div className="review text-white">
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<span>customer reviews</span>
											</div>
											<div className="start">
												<span>4.9</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="can-do-it-content">
										<h2 className="title mb-50">We find the best user experience for every challenge
											<span className="text-black mask ms-2"></span>
										</h2>
										<p className="cdit-text mb-40">
											We create products that become market flagships and transform their industries. For us, this is not just development — our goal is a smoothly running business for our partners. We maintain quality standards as if we were doing it for ourselves
											
										</p>
										<div className="flex icon-wrap-cdit">
											<div className="icon-can-do-it flex">
												<div className="icon">
													<i className="icon-product-development" />
												</div>
												<h5 className="title">The Best UX for Every Challenge</h5>
											</div>
											<div className="icon-can-do-it flex">
												<div className="icon">
													<i className="icon-nanotechnology" />
												</div>
												<h5 className="title">We blend cutting-edge and time-tested technologies</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">CNN, R-CNN, YOLO</span><i className="icon-asterisk" />
													<span className="text-slider">Digital Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Web UX/UI Design</span><i className="icon-asterisk" />
													<span className="text-slider">Image Processing</span><i className="icon-asterisk" />
													<span className="text-slider">Machine Learning & AI</span><i className="icon-asterisk" />
													<span className="text-slider">Computer Vision</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">AR/VR Apps</span><i className="icon-asterisk" />
													<span className="text-slider">Deep Learning</span><i className="icon-asterisk" />
													<span className="text-slider">Web UX/UI Design</span><i className="icon-asterisk" />
													<span className="text-slider">CNN, R-CNN, YOLO</span><i className="icon-asterisk" />
													<span className="text-slider">Machine Learning & AI</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="pt-130 pb-130 wcus-section4">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="wcus-section4-content">
										<div className="heading-title">
											<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Architecture & Code</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Optimal UX. Every Task 
											</h2>
										</div>
										<div className="icon-list-wcus-wrap">
											<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".3s">
												<div className="icons">
													<i className="icon-ai" />
												</div>
												<div className="content">
													<h3 className="title">From Ambiguity to Architecture</h3>
													<p className="des font-man">We build projects that are both logically correct and visually exceptional. Complex, high-uncertainty problems are our specialty. We deconstruct large challenges into small, actionable steps and guide you through every stage until we reach your final objective
													</p>
												</div>
											</div>
											<div className="icon-box7 flex mb-45 bb-blog wow fadeInUpSmall" data-wow-delay=".4s">
												<div className="icons">
													<i className="icon-contract" />
												</div>
												<div className="content ">
													<h3 className="title">Deep Immersion</h3>
													<p className="des font-man">We deeply immerse ourselves in your workflows and interview stakeholders to uncover true needs. We find synergies, form hypotheses, test them through prototypes, and deliver a final design that ties everything together into a cohesive solution
													</p>
												</div>
											</div>
											<div className="icon-box7 flex bb-blog wow fadeInUpSmall" data-wow-delay=".5s">
												<div className="icons">
													<i className="icon-milestones" />
												</div>
												<div className="content ">
													<h3 className="title">From Discovery to Delivery</h3>
													<p className="des font-man">We immerse ourselves in your workflows, interview stakeholders, uncover true needs, identify synergies, test hypotheses, build prototypes, and deliver a final design that ties everything together
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="wcus-section4-image relative">
										<img src="/assets/images/page/w-c-us-home4_new.jpg" alt="Veotronic software architecture and development process" className="wcus-h41" />
										<img src="/assets/images/page/wcus-h4-2_new.jpg" alt="Veotronic team collaboration and design workflow" className="wcus-h42" />
										<div className="clip" />
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-feature bg-2 relative ">
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12 col-xl-5">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man wow fadeInUpSmall">Our slogan</span>
											<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Code - Breath - Repeat
											</h2>
											<p className="des wow fadeInUpSmall" data-wow-delay=".4s">We always do what we promise.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-xl-7">
									<div className="image relative">
										<img src="/assets/images/page/case-h1_new5.jpg" alt="Veotronic development team at work" />
									</div>
								</div>
							</div>
						</div>
					</section>
				
				</div>

			</Layout>
		</>
	)
}