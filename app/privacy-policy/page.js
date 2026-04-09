'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function PrivacyPolicy() {
	return (
		<>
			<Layout breadcrumbTitle="Privacy Policy">
				<div>
					<section className="privacy-policy-page pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="privacy-policy-content">
										
										{/* Last Updated */}
										<div className="policy-section">
											<p className="last-updated">Last updated: April 09, 2025</p>
										</div>

										{/* Introduction */}
										<div className="policy-section">
											<h3>1. Introduction</h3>
											<p>Veotronic ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
											<p>We value your trust and handle your information with care. Please read this policy carefully to understand our practices regarding your personal data.</p>
										</div>

										{/* Information We Collect */}
										<div className="policy-section">
											<h3>2. Information We Collect</h3>
											<p>We may collect the following types of information:</p>
											<ul className="policy-list">
												<li><strong>Personal Identification Information:</strong> Name, email address, phone number, company name, job title.</li>
												<li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and usage data.</li>
												<li><strong>Project Information:</strong> Information you provide about your business, requirements, and project goals.</li>
												<li><strong>Communication Data:</strong> Messages, inquiries, and correspondence with our team.</li>
											</ul>
										</div>

										{/* How We Collect Your Information */}
										<div className="policy-section">
											<h3>3. How We Collect Your Information</h3>
											<p>We collect information in the following ways:</p>
											<ul className="policy-list">
												<li><strong>Direct interactions:</strong> When you fill out forms, contact us via email or phone, or request a consultation.</li>
												<li><strong>Automated technologies:</strong> When you browse our website, we may collect technical data through cookies and similar technologies.</li>
												<li><strong>Third-party sources:</strong> We may receive information from business partners or public sources.</li>
											</ul>
										</div>

										{/* How We Use Your Information */}
										<div className="policy-section">
											<h3>4. How We Use Your Information</h3>
											<p>We use your information to:</p>
											<ul className="policy-list">
												<li>Provide, operate, and maintain our services</li>
												<li>Respond to your inquiries and requests</li>
												<li>Understand your needs and provide tailored solutions</li>
												<li>Improve our website, services, and customer experience</li>
												<li>Send technical notices, updates, and support messages</li>
												<li>Comply with legal obligations</li>
											</ul>
										</div>

										{/* Sharing Your Information */}
										<div className="policy-section">
											<h3>5. Sharing Your Information</h3>
											<p>We do not sell, trade, or rent your personal data to third parties. We may share your information in the following circumstances:</p>
											<ul className="policy-list">
												<li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (hosting, analytics, communication).</li>
												<li><strong>Legal Requirements:</strong> If required by law or to protect our rights, property, or safety.</li>
												<li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
											</ul>
										</div>

										{/* Data Security */}
										<div className="policy-section">
											<h3>6. Data Security</h3>
											<p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
										</div>

										{/* Data Retention */}
										<div className="policy-section">
											<h3>7. Data Retention</h3>
											<p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
										</div>

										{/* Your Rights */}
										<div className="policy-section">
											<h3>8. Your Rights</h3>
											<p>Depending on your location, you may have the following rights:</p>
											<ul className="policy-list">
												<li>Access, correct, or delete your personal data</li>
												<li>Object to or restrict processing of your data</li>
												<li>Request data portability</li>
												<li>Withdraw consent at any time</li>
											</ul>
											<p>To exercise these rights, please contact us at <Link href="mailto:hello@veotronic.com">hello@veotronic.com</Link>.</p>
										</div>

										{/* Cookies */}
										<div className="policy-section">
											<h3>9. Cookies</h3>
											<p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings.</p>
										</div>

										{/* Third-Party Links */}
										<div className="policy-section">
											<h3>10. Third-Party Links</h3>
											<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies.</p>
										</div>

										{/* Children's Privacy */}
										<div className="policy-section">
											<h3>11. Children's Privacy</h3>
											<p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us.</p>
										</div>

										{/* International Transfers */}
										<div className="policy-section">
											<h3>12. International Transfers</h3>
											<p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.</p>
										</div>

										{/* Updates to This Policy */}
										<div className="policy-section">
											<h3>13. Updates to This Policy</h3>
											<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>
										</div>

										{/* Contact Us */}
										<div className="policy-section">
											<h3>14. Contact Us</h3>
											<p>If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:</p>
											<ul className="policy-list contact-list">
												<li><strong>Email:</strong> <Link href="mailto:hello@veotronic.com">hello@veotronic.com</Link></li>
												<li><strong>Phone:</strong> +1 (368) 567 89 54</li>
												<li><strong>Address:</strong> 55 Main street, 2nd block, Melbourne, Australia</li>
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