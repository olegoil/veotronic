'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"

export default function Impressum() {
	return (
		<>
			<Head>
				{/* Мета-теги для юридической страницы — noindex */}
				<meta name="robots" content="noindex, follow" />
				<title>Impressum | Veotronic</title>
				<meta name="description" content="Impressum — Legal disclosure for Veotronic. Company information, contact details, and legal representation as required by law." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://veotronic.com/impressum" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com/impressum" />
				<meta property="og:title" content="Impressum | Veotronic" />
				<meta property="og:description" content="Legal disclosure for Veotronic. Company information and contact details." />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Impressum">
				<div>
					<section className="privacy-policy-page pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="privacy-policy-content">
										
										{/* Last Updated */}
										<div className="policy-section">
											<p className="last-updated">Last updated: May 04, 2025</p>
										</div>

										{/* Legal Disclosure */}
										<div className="policy-section">
											<h3>1. Legal Disclosure (Impressum)</h3>
											<p>This Impressum applies to the website <strong>www.veotronic.com</strong> and all related services provided by Veotronic. This information is provided in accordance with applicable US laws and § 5 TMG (German Telemedia Act) for our EU visitors.</p>
										</div>

										{/* Company Information */}
										<div className="policy-section">
											<h3>2. Company Information</h3>
											<ul className="policy-list">
												<li><strong>Company Name:</strong> Veotronic</li>
												<li><strong>Legal Form:</strong> Sole Proprietorship</li>
												<li><strong>Registered Address:</strong> 23587 N Field Rd, Lake Zurich, IL 60047, United States</li>
												<li><strong>Country of Operation:</strong> United States</li>
											</ul>
										</div>

										{/* Contact Information */}
										<div className="policy-section">
											<h3>3. Contact Information</h3>
											<ul className="policy-list">
												<li><strong>Email:</strong> <Link href="mailto:info@veotronic.com">info@veotronic.com</Link></li>
												<li><strong>Phone:</strong> <a href="tel:+1 (224) 206-0034">+1 (224) 206-0034</a></li>
												<li><strong>Website:</strong> <Link href="https://www.veotronic.com">www.veotronic.com</Link></li>
											</ul>
										</div>

										{/* Representative */}
										<div className="policy-section">
											<h3>4. Authorized Representative</h3>
											<ul className="policy-list">
												<li><strong>Owner / Responsible Person:</strong> Egor Lasitsa </li>
												<li><strong>Responsible for content:</strong> Egor Lasitsa </li>
											</ul>
										</div>

										{/* Registration Information */}
										<div className="policy-section">
											<h3>5. Registration Information</h3>
											<ul className="policy-list">
												<li><strong>Register Court:</strong> United States (USA)</li>
												<li><strong>Tax ID (EIN):</strong> [Your EIN / Tax ID Number]</li>
											</ul>
										</div>

										{/* Disclaimer */}
										<div className="policy-section">
											<h3>6. Disclaimer</h3>
											<p>While we strive to keep the information on this website accurate and up to date, Veotronic makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website. Any reliance you place on such information is strictly at your own risk.</p>
										</div>

										{/* Copyright */}
										<div className="policy-section">
											<h3>7. Copyright</h3>
											<p>All content, images, graphics, and text on this website are the property of Veotronic unless otherwise stated. Reproduction, distribution, or any unauthorized use of the content without prior written permission is prohibited.</p>
										</div>

										{/* Dispute Resolution */}
										<div className="policy-section">
											<h3>8. Dispute Resolution</h3>
											<p>The European Commission provides a platform for online dispute resolution (ODR): <Link href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</Link>. We are not obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
										</div>

										{/* Contact for Legal Matters */}
										<div className="policy-section">
											<h3>9. Contact for Legal Matters</h3>
											<p>For any legal inquiries or formal notices, please contact us exclusively via email or postal mail:</p>
											<ul className="policy-list contact-list">
												<li><strong>Email:</strong> <Link href="mailto:info@veotronic.com">info@veotronic.com</Link></li>
												<li><strong>Address:</strong> 23587 N Field Rd, Lake Zurich, IL 60047, United States</li>
											</ul>
										</div>

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