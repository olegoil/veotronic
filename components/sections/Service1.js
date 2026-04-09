
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service pt-122 pb-130 bg-2">
				<div className="tf-container">
					<div className="heading-title center mb-60">
						<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Popular Services</span>
						<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Services We Provide</h2>
					</div>
					<div className="service-grid mb-40 wow fadeInUpSmall" data-wow-delay=".3s">
						<div className="icon-box1">
							<div className="icon-box1-visible flex-two">
								<div className="content">
									<span className="number mb-15">01</span>
									<h3 className="title mb-47"><Link href="/service-ai">AI</Link></h3>
									<div className="icon">
										<i className="icon-Icon11" />
									</div>
								</div>
								<div className="button-icon-box">
									<Link href="/service-ai" className="service-link"><i className="icon-angle-downs" /></Link>
								</div>
							</div>
							<div className="icon-box1-hide">
								<div className="flex-one">
									<div className="icon">
										<i className="icon-Icon11" />
									</div>
									<span className="number">01</span>
								</div>
								<h3 className="title"><Link href="/service-ai">AI for CRM & ERP</Link></h3>
								<p className="des">Automate routine tasks. Improve analytics. Increase profitability. AI-powered business management.</p>
								<div className="button-icon-box">
									<Link href="/service-ai" className="service-link">Read More<i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
						<div className="icon-box1">
							<div className="icon-box1-visible flex-two">
								<div className="content">
									<span className="number mb-15">02</span>
									<h3 className="title mb-47"><Link href="/service-api">One API Platform</Link></h3>
									<div className="icon">
										<i className="icon-self-development-2" />
									</div>
								</div>
								<div className="button-icon-box">
									<Link href="/service-api" className="service-link"><i className="icon-angle-downs" /></Link>
								</div>
							</div>
							<div className="icon-box1-hide">
								<div className="flex-one">
									<div className="icon">
										<i className="icon-self-development-2" />
									</div>
									<span className="number">02</span>
								</div>
								<h3 className="title"><Link href="/service-api">One API Platform</Link></h3>
								<p className="des">Unite every business process in one system</p>
								<div className="button-icon-box">
									<Link href="/service-api" className="service-link">Read More<i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
						<div className="icon-box1">
							<div className="icon-box1-visible flex-two">
								<div className="content">
									<span className="number mb-15">03</span>
									<h3 className="title mb-47"><Link href="/service-auto">Business Process Automation</Link></h3>
									<div className="icon">
										<i className="icon-data-management-1" />
									</div>
								</div>
								<div className="button-icon-box">
									<Link href="/service-auto" className="service-link"><i className="icon-angle-downs" /></Link>
								</div>
							</div>
							<div className="icon-box1-hide">
								<div className="flex-one">
									<div className="icon">
										<i className="icon-data-management-1" />
									</div>
									<span className="number">03</span>
								</div>
								<h3 className="title"><Link href="/service-auto">Business Process Automation</Link></h3>
								<p className="des">Digitally Transform Your Entire Company</p>
								<div className="button-icon-box">
									<Link href="/service-auto" className="service-link">Read More<i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
						<div className="icon-box1">
							<div className="icon-box1-visible flex-two">
								<div className="content">
									<span className="number mb-15">04</span>
									<h3 className="title mb-47"><Link href="/service-development">Custom Software for Business</Link></h3>
									<div className="icon">
										<i className="icon-planning-2" />
									</div>
								</div>
								<div className="button-icon-box">
									<Link href="/service-development" className="service-link"><i className="icon-angle-downs" /></Link>
								</div>
							</div>
							<div className="icon-box1-hide">
								<div className="flex-one">
									<div className="icon">
										<i className="icon-planning-2" />
									</div>
									<span className="number">04</span>
								</div>
								<h3 className="title"><Link href="/service-details">Custom Software for Business</Link></h3>
								<p className="des">We guide your project from idea and analytics to backend and release</p>
								<div className="button-icon-box">
									<Link href="/service-development" className="service-link">Read More<i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
						<div className="icon-box1">
							<div className="icon-box1-visible flex-two">
								<div className="content">
									<span className="number mb-15">05</span>
									<h3 className="title mb-47"><Link href="/service-mobile">Mobile Development </Link></h3>
									<div className="icon">
										<i className="icon-start-up" />
									</div>
								</div>
								<div className="button-icon-box">
									<Link href="/service-mobile" className="service-link"><i className="icon-angle-downs" /></Link>
								</div>
							</div>
							<div className="icon-box1-hide">
								<div className="flex-one">
									<div className="icon">
										<i className="icon-start-up" />
									</div>
									<span className="number">05</span>
								</div>
								<h3 className="title"><Link href="/service-mobile">Mobile Development</Link></h3>
								<p className="des">Expert development for iOS and Android</p>
								<div className="button-icon-box">
									<Link href="/service-mobile" className="service-link">Read More<i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
						<div className="icon-box1">
							<div className="icon-box1-visible flex-two">
								<div className="content">
									<span className="number mb-15">06</span>
									<h3 className="title mb-47"><Link href="/service-details">Modern Web Development</Link></h3>
									<div className="icon">
										<i className="icon-cloud-network" />
									</div>
								</div>
								<div className="button-icon-box">
									<Link href="/service-details" className="service-link"><i className="icon-angle-downs" /></Link>
								</div>
							</div>
							<div className="icon-box1-hide">
								<div className="flex-one">
									<div className="icon">
										<i className="icon-cloud-network" />
									</div>
									<span className="number">06</span>
								</div>
								<h3 className="title"><Link href="/service-development">Modern Web Development</Link></h3>
								<p className="des">Websites that work like apps — offline access, push notifications, and blazing fast interface</p>
								<div className="button-icon-box">
									<Link href="/service-development" className="service-link">Read More<i className="icon-right-icon" /></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="center wow fadeInUpSmall" data-wow-delay=".3s">
						<div className="service-cta">
							<img src="/assets/images/page/chat1.png" alt="image" />
							<p className="font-man">Get Free Consultations For Tech Solutions</p>
							<Link href="/contact-us">Get A Quote <i className="icon-right-icon" /></Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
