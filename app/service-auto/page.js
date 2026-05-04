'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from "next/head"

export default function ServiceDetails() {
	const [isTab, setIsTab] = useState(1)
	const [isVisible, setIsVisible] = useState(true)
	const handleTab = (i) => {
		setIsTab(i)
		setIsVisible(false)
		setTimeout(() => {
			setIsVisible(true)
		}, 200)
	}
	
	const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        url: '',
        services: '',
        comment: '',
        message: ''
    });
    
    // State for submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    
    // Auto-hide message after 5 seconds
    useEffect(() => {
        if (submitStatus.message) {
            const timer = setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page reload
        
        // Validate form
        if (!formData.name) {
            setSubmitStatus({ type: 'error', message: 'Please enter your name' });
            return;
        }
        
        if (!formData.email) {
            setSubmitStatus({ type: 'error', message: 'Please enter your email address' });
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
            return;
        }
        
        if (!formData.services) {
            setSubmitStatus({ type: 'error', message: 'Please select a service' });
            return;
        }
        
        if (!formData.message) {
            setSubmitStatus({ type: 'error', message: 'Please enter your message' });
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });
        
        try {
            // Send email via API
            const response = await fetch('https://admin.olegtronics.com/xapi/sendmailfree/veotronic', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok && data.ok) {
                // Show success message
                setSubmitStatus({ type: 'success', message: '✓ Message sent successfully! We will get back to you soon.' });
                
                // Clear form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    website: '',
                    url: '',
                    services: '',
                    comment: '',
                    message: ''
                });
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({ 
                type: 'error', 
                message: '✗ Failed to send message. Please try again or contact us directly.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };
	
	return (
		<>
			<Head>
				{/* Basic meta tags */}
				<title>Business Process Automation — AI-Powered Workflow Automation | Veotronic</title>
				<meta name="description" content="Automate your business processes with AI-powered solutions. Reduce manual work by 70%, cut document processing time by 90%, and eliminate errors. Smart chatbots, voice assistants, and workflow automation for finance, HR, logistics, and customer service." />
				<meta name="keywords" content="business process automation, workflow automation, AI automation, document automation, RPA, chatbots, voice assistants, digital transformation, Veotronic" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Veotronic" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://veotronic.com/services/process-automation" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com/services/process-automation" />
				<meta property="og:title" content="Business Process Automation — AI-Powered Workflow Automation | Veotronic" />
				<meta property="og:description" content="Automate your business with AI. Reduce manual work by 70%, cut document processing time by 90%, and eliminate errors. Smart chatbots, voice assistants, and workflow automation." />
				<meta property="og:image" content="https://veotronic.com/og-image-automation.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://veotronic.com/services/process-automation" />
				<meta name="twitter:title" content="Business Process Automation | Veotronic" />
				<meta name="twitter:description" content="AI-powered workflow automation. Reduce manual work, cut document processing time, and eliminate errors." />
				<meta name="twitter:image" content="https://veotronic.com/og-image-automation.jpg" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Process Automation">
				<div>
					<section className="section-benefit pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Business Process Automation</span>
											<h2 className="title">Complete Digital Transformation of Your Company</h2>
											<p className="des">
This is clear business logic — digitized. Imagine orders from your website automatically landing in your CRM and accounting system, while the customer receives a personalized email. Imagine a payment reminder triggering exactly on the right day, and a management report generating with a single click. Automation connects your disconnected tools into a single, logical, self-managing workflow. The result: speed, zero errors, and complete transparency at every stage</p>
										</div>
										{/* <img src="/assets/images/page/dvl-deatils3_new.jpg" alt="image" /> */}
										<div className="video-background">
											<video autoPlay muted loop playsInline disablePictureInPicture>
												<source src="/assets/videos/n8n_workflow.mp4" type="video/mp4"/>
												Your browser does not support HTML5 video.
											</video>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Smart Process Automation</h4>
												</div>
												<p>AI-powered chatbots, voice assistants, and intelligent request processing that work 24/7. Reduce response time by 80% and free your team from repetitive customer inquiries. Dramatic Cost Savings — Reduce manual labor costs by 15-40%.
												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Smart Workflow Automation</h4>
												</div>
												<p>Your team focuses on high-value work — AI handles the routine.
70% less routine • 90% faster document processing</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>No noise. Just work</h4>
												</div>
												<p>Reduces document overload, endless email threads, response wait times, and unnecessary meetings. Eliminates errors and document duplication. 80% less paperwork • 75% faster responses • Zero duplicates</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Transforming how your business operates.</h4>
												</div>
												<p>It's about transforming how your business operates. Real-Time Visibility — Know exactly what's happening, right now. Smarter Decisions — AI finds patterns humans can't see. Less Burnout — Your team will thank you</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="section-performance-auto pt-122 bg-2">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title m0-auto w-680 center mb-60">
										<span className="sub-title texts-blue font-man">Who Is Automation For?</span>
										<h2 className="title">Automation works everywhere. But it delivers the most impact in areas like:</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">Sales & Marketing</h4>
										<p className="des">Automated lead processing, trigger-based email campaigns, and real-time customer profile updates.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">Retail & E-commerce</h4>
										<p className="des">Automated processing and maintenance of perfect product data — texts, descriptions, photos, updates, and more</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">Finance & Accounting</h4>
										<p className="des">Automated invoicing, debtor reminders, and payment reconciliation. Keep your cash flow healthy and your books balanced</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">HR & Employee Onboarding</h4>
										<p className="des">Automate hiring workflows, document collection, and probation tracking to get new hires productive faster</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">Manufacturing & Logistics</h4>
										<p className="des">Real-time order status tracking, stage-based notifications, and automated document generation</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">Customer Service</h4>
										<p className="des">Smart ticket routing, automated responses, and feedback collection. Resolve issues faster and keep customers happy</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="team-member-details pt-30 pb-30">
						<div className="tf-container">						
							<div className="row">
								<div className="col-lg-12">
									<div className="team-member-details-wrap">
										<div className="widget-team-single bb-blog">
											<span>Break free from routine</span>
											<p>How many hours a day does your team spend on routine, repetitive tasks? Data entry, approvals, reports, notifications… Workflow automation is not the future — it's the reality of an efficient business today. We help you identify these bottlenecks, digitize them, and set them to work autonomously. <span className="text-blue2"> Let your processes serve you — not the other way around</span></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					{/* Contact */}
					<section className="section-contact contact-service-details bg-5 pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title text-white font-man">Work Inquiry</span>
											<h2 className="title text-white">Let's Work on Your Next Project?</h2>
											<p className="des font-man text-white">Ready to automate your business or build a custom solution? Our team is here to bring your ideas to life. Let's discuss your project</p>
										</div>
										<div className="contact-wrap flex-three mb-40">
											<div className="icon text-white">
												<i className="icon-phones" />
											</div>
											<div className="contact-content">
												<span className="font-man text-white">Call For Inquiry</span>
												<p><a href="tel:+1 (224) 206-0034" className='text-white'>+1 (224) 206-0034</a></p>
											</div>
										</div>
										<div className="contact-wrap flex-three">
											<div className="icon text-white">
												<i className="icon-envelopes" />
											</div>
											<div className="contact-content">
												<span className="font-man text-white">Send Us Email</span>
												<p><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="form-contact-home1 style2">
										<div className="inner-title-form center mb-30">
											<h3 className="title-form">Need Help With Your Project?</h3>
											<p>We're ready to help. Let's discuss your goals and build something great together.</p>
										</div>
										
										{/* Success/Error Message Display */}
										{submitStatus.message && (
											<div className={`alert-message ${submitStatus.type} mb-20`}>
												{submitStatus.message}
											</div>
										)}
										
										<form onSubmit={handleSubmit} className="form-contact-home">
											<div className="input-group flex-one">
												<fieldset className="relative mb-20">
													<input 
														type="text" 
														className="form-control" 
														id="name-input" 
														name="name" 
														placeholder="Name" 
														value={formData.name} 
														onChange={handleChange}
														disabled={isSubmitting}
														required 
													/>
													<i className="icon-user" />
												</fieldset>
												<fieldset className="relative mb-20">
													<input 
														type="email" 
														className="form-control" 
														id="email-input" 
														name="email" 
														placeholder="Email" 
														value={formData.email} 
														onChange={handleChange}
														disabled={isSubmitting}
														required 
													/>
													<i className="icon-envelopes" />
												</fieldset>
											</div>
											<fieldset className="mb-20">
												<select 
													className="form-control" 
													id="services" 
													name="services" 
													value={formData.services} 
													onChange={handleChange}
													disabled={isSubmitting}
													required
												>
													<option value="">Choose Services</option>
													<option value="Business automation">Business automation</option>
													<option value="AI Implementation">AI Implementation</option>
													<option value="Software and App development">Software & App development</option>
													<option value="Web development">Web development</option>
												</select>
											</fieldset>
											<fieldset className="mb-15">
												<textarea 
													id="mess" 
													name="message" 
													rows={4} 
													cols={50} 
													placeholder="Message" 
													value={formData.message} 
													onChange={handleChange}
													disabled={isSubmitting}
													required 
												/>
											</fieldset>
											<fieldset className="center">
												<button 
													className="btn-submit" 
													type="submit"
													disabled={isSubmitting}
												>
													{isSubmitting ? (
														<>
															<span className="spinner"></span>
															Sending...
														</>
													) : (
														<>
															Send Message
															<i className="icon-right-icon" />
														</>
													)}
												</button>
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
			
			<style jsx>{`
				.alert-message {
					padding: 12px 20px;
					border-radius: 8px;
					font-size: 14px;
					font-weight: 500;
					animation: slideIn 0.3s ease-out;
				}
				
				.alert-message.success {
					background-color: #d4edda;
					color: #155724;
					border: 1px solid #c3e6cb;
				}
				
				.alert-message.error {
					background-color: #f8d7da;
					color: #721c24;
					border: 1px solid #f5c6cb;
				}
				
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				
				button:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}
				
				.spinner {
					display: inline-block;
					width: 16px;
					height: 16px;
					border: 2px solid #ffffff;
					border-top: 2px solid transparent;
					border-radius: 50%;
					animation: spin 0.8s linear infinite;
					margin-right: 8px;
					vertical-align: middle;
				}
				
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
				
				input:disabled, textarea:disabled, select:disabled {
					background-color: #f5f5f5;
					cursor: not-allowed;
					opacity: 0.7;
				}
				
				/* Style adjustments for the form */
				.form-contact-home1.style2 {
					position: relative;
				}
				
				.btn-submit {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
				}
			`}</style>
		</>
	)
}