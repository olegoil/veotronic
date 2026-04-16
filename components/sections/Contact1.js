"use client";

import { useState, useRef } from 'react';

export default function Contact1() {
	
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

			<section className="section-contact bg-1 pt-130 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-6">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Work Inquiry</span>
									<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Let's Work on Your Next Project?</h2>
									<p className="des font-man text-white wow fadeInUpSmall" data-wow-delay=".4s">Ready to automate your business or build a custom solution? Our team is here to bring your ideas to life. Let's discuss your project</p>
								</div>
								<div className="contact-wrap flex-three mb-40 wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="icon">
										<i className="icon-phones" />
									</div>
									<div className="contact-content">
										<span className="font-man">Call For Inquiry</span>
										<p><a href="tel:+1 (224) 206-0034" className='text-white'>+1 (224) 206-0034</a></p>
									</div>
								</div>
								<div className="contact-wrap flex-three wow fadeInUpSmall" data-wow-delay=".5s">
									<div className="icon">
										<i className="icon-envelopes" />
									</div>
									<div className="contact-content">
										<span className="font-man">Send Us Email</span>
										<p><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-contact-home1">
								<div className="inner-title-form center mb-30">
									<h3 className="title-form">Need Help With Your Project?</h3>
									<p>We're ready to help. Let's discuss your goals and build something great together.</p>
								</div>
								<form className="form-contact-home" id="contactform" method="post" onSubmit={handleSubmit}>
									<div className="input-group flex-one">
										<fieldset className="relative mb-20">
											<input type="text" className="form-control" id="name-input" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
											<i className="icon-user" />
										</fieldset>
										<fieldset className="relative mb-20">
											<input type="email" className="form-control" id="email-input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
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
									<fieldset className="mb-15">
										<textarea rows={4} cols={50} placeholder="Message" name="message" value={formData.message} onChange={handleChange} id="message" required />
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
		</>
	)
}