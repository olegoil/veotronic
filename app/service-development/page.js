'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

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
        
        // Optional: Validate form
        if (!formData.email) {
            setSubmitStatus({ type: 'error', message: 'Please fill in Email' });
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });
        
        try {
            // Send email via your API (Method 1 from previous answer)
            const response = await fetch('https://admin.olegtronics.com/xapi/sendmailfree/veotronic', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // Show success message
                setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
                
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
                
                // Optional: Hide success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ type: '', message: '' });
                }, 5000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };
	
	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Custom Software Development">
				<div>
					<section className="section-benefit pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Custom Software Development</span>
											<h2 className="title">Software Built for Your Business</h2>
											<p className="des">
Every business is unique — so should be its software. Off-the-shelf solutions force you to adapt your processes to fit the tool. We build custom software that adapts to you. From web applications to complex enterprise platforms, we deliver clean, maintainable, and secure code that solves your specific challenges, integrates with your existing systems, and scales as you grow.
</p>
										</div>
										<img src="/assets/images/page/dvl-deatils5_new.jpg" alt="custom software development" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Tailored to Your Needs</h4>
												</div>
												<p>Every line of code is written specifically for your business requirements. No unnecessary features. No missing functionality. Just exactly what you need.
												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Scalable Architecture</h4>
												</div>
												<p>Your business grows — your software grows with it. We build scalable solutions that handle increased users, data, and complexity without breaking.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Seamless Integration</h4>
												</div>
												<p>Connects with your existing systems — CRM, ERP, accounting, marketplaces, and more. No data silos. No manual transfers.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Enterprise-Grade Security</h4>
												</div>
												<p>Built with security at every layer — data encryption, secure authentication, role-based access, and compliance with industry standards.</p>
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
										<span className="sub-title texts-blue font-man">What We Build</span>
										<h2 className="title">Custom software solutions for every business need</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">Web Applications</h4>
										<p className="des">SaaS platforms, client portals, dashboards, and custom web solutions that work seamlessly across all devices.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">Enterprise Systems</h4>
										<p className="des">ERP, CRM, BPM, and other complex systems that unify your business operations and data.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">Mobile Applications</h4>
										<p className="des">Native iOS, Android, and cross-platform apps that deliver exceptional user experiences.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">API Development</h4>
										<p className="des">RESTful APIs, GraphQL, and unified API platforms that connect your systems and partners.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">Legacy Modernization</h4>
										<p className="des">Migrate and upgrade outdated systems to modern technology stacks — faster, more secure, and easier to maintain.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">AI-Powered Solutions</h4>
										<p className="des">Integrate artificial intelligence — chatbots, predictive analytics, image recognition, and smart automation.</p>
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
											<span>Invest in Software That Works for You</span>
											<p>Custom software isn't a cost — it's an investment. It eliminates inefficiencies, automates repetitive work, and scales with your business. Off-the-shelf solutions force you to adapt. Custom software adapts to you. <span class="text-blue2"> That's the difference between surviving and thriving.</span></p>
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
											<p>We're ready to help. Let's discuss your goals and build something great together</p>
										</div>
										<form onSubmit={handleSubmit} className="form-contact-home">
											<div className="input-group flex-one">
												<fieldset className="relative mb-20">
													<input type="text" className="form-control" id="name-input" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
													<i className="icon-user" />
												</fieldset>
												<fieldset className="relative mb-20">
													<input type="email" className="form-control" id="email-input" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
													<i className="icon-envelopes" />
												</fieldset>
											</div>
											<fieldset className="mb-20">
												{/* Changed to normal select dropdown */}
												<select className="form-control" id="services" name="services" value={formData.services} onChange={handleChange} required>
													<option value="">Choose Services</option>
													<option value="Business automation">Business automation</option>
													<option value="AI Implementation">AI Implementation</option>
													<option value="Software and App development">Software & App development</option>
													<option value="Web development">Web development</option>
												</select>
											</fieldset>
											<fieldset className=" mb-15">
												<textarea id="mess" name="message" rows={4} cols={50} placeholder="Message" value={formData.message} onChange={handleChange} />
											</fieldset>
											<fieldset className="center">
												<button className="btn-submit" type="submit">Send Message<i className="icon-right-icon" /></button>
											</fieldset>
										</form>
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