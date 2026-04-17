"use client";

import { useState, useRef, useEffect } from 'react';

export default function Contact2() {
	
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
            <section className="contact-form-h4 pb-130 bg-3">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="content">
                                <div className="heading-title mb-40">
                                    <span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Work Inquiry</span>
                                    <h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Let's Work on Your Next Project ?</h2>
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
                        <div className="col-lg-7">
                            <div className="form-contact-home1">
                                <div className="inner-title-form center mb-30">
                                    <h3 className="title-form text-white">Need Help With Your Project?</h3>
                                    <p className="text-white">We're ready to help. Let's discuss your goals and build something great together.</p>
                                </div>
                                
                                {/* Success/Error Message Display */}
                                {submitStatus.message && (
                                    <div className={`alert-message ${submitStatus.type} mb-20`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                
                                <form className="form-contact-home" id="contactform" method="post" onSubmit={handleSubmit}>
                                    <div className="input-group flex-one">
                                        <fieldset className="relative mb-20">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name-input" 
                                                placeholder="Name" 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                name="name" 
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
                                                placeholder="Email" 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                name="email" 
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
                                    <fieldset className=" mb-15">
                                        <textarea 
                                            rows={4} 
                                            cols={50} 
                                            placeholder="Message" 
                                            name="message" 
                                            id="message" 
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
                    background-color: rgba(255, 255, 255, 0.1);
                    cursor: not-allowed;
                    opacity: 0.7;
                }
                
                /* Adjust text colors for dark background */
                .alert-message.success,
                .alert-message.error {
                    color: #fff;
                }
                
                .alert-message.success {
                    background-color: rgba(40, 167, 69, 0.9);
                    border-color: #28a745;
                }
                
                .alert-message.error {
                    background-color: rgba(220, 53, 69, 0.9);
                    border-color: #dc3545;
                }
            `}</style>
        </>
    )
}