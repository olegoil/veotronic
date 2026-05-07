'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactUs() {

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
            setSubmitStatus({ type: 'error', message: 'Please enter your full name' });
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
                <div>
                    <section className="contact-us-page pt-130 pb-130">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-us-page-content">
                                        <div className="heading-title">
                                            <span className="sub-title texts-blue font-man">Get In Touch</span>
                                            <h2 className="title">Let's Discuss <br />Your Next Project</h2>
                                            <p className="des">Ready to automate your business or build a custom software solution? Our team of experts is here to bring your ideas to life. Reach out — we're ready to help</p>
                                        </div>
                                        <div className="contact-item-wrap">
                                            <div className="contact-item">
                                                <div className="flex item-contact">
                                                    <div className="icon">
                                                        <i className="icon-maps" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Location</h4>
                                                        <p className='text-black'>23587 N Field Rd, Lake Zurich, IL 60047, United States</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item">
                                                <div className="flex item-contact">
                                                    <div className="icon">
                                                        <i className="icon-phones" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Phone</h4>
                                                        <p><a href="tel:+1 (224) 206-0034" className='text-black'>+1 (224) 206-0034</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item">
                                                <div className="flex item-contact">
                                                    <div className="icon">
                                                        <i className="icon-envelopes" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Email</h4>
                                                        <p><a href="mailto:info@veotronic.com" className='text-black'>info@veotronic.com</a></p>
                                                        <p className='text-black'><a href="https://veotronic.com" className='text-black'>www.veotronic.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item">
                                                <div className="flex item-contact">
                                                    <div className="icon">
                                                        <i className="icon-share-nodes" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Social</h4>
                                                        <ul className="social-footer flex-three">
                                                            <li>
                                                                <Link href="https://www.linkedin.com/company/113454316" className="flex-five"><i className="icon-ins" /></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="https://www.facebook.com/veotronic/" className="flex-five"><i className="icon-fb" /></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/assets/images/page/contact.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-us-page-form bg-2">
                                        <h3 className="title">Send Us Message</h3>
                                        
                                        {/* Success/Error Message Display */}
                                        {submitStatus.message && (
                                            <div className={`alert-message ${submitStatus.type} mb-20`}>
                                                {submitStatus.message}
                                            </div>
                                        )}
                                        
                                        <form className="contact-us-form" id="contactform" method="post" onSubmit={handleSubmit}>
                                            <fieldset className="mb-18">
                                                <label>Full Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Enter your name" 
                                                    value={formData.name} 
                                                    onChange={handleChange} 
                                                    name="name" 
                                                    id="name" 
                                                    disabled={isSubmitting}
                                                    required 
                                                />
                                            </fieldset>
                                            <fieldset className="mb-18">
                                                <label>Email Address</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Enter your email" 
                                                    value={formData.email} 
                                                    onChange={handleChange} 
                                                    name="email" 
                                                    id="email" 
                                                    disabled={isSubmitting}
                                                    required 
                                                />
                                            </fieldset>
                                            <fieldset className="mb-18">
                                                <label>Website</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="website" 
                                                    name="website" 
                                                    placeholder="Enter your website" 
                                                    value={formData.website} 
                                                    onChange={handleChange} 
                                                    disabled={isSubmitting}
                                                />
                                            </fieldset>
                                            <fieldset className="mb-18">
                                                <label>Message</label>
                                                <textarea 
                                                    rows={5} 
                                                    cols={50} 
                                                    placeholder="Write message" 
                                                    value={formData.message} 
                                                    onChange={handleChange} 
                                                    name="message" 
                                                    id="message" 
                                                    disabled={isSubmitting}
                                                    required 
                                                />
                                            </fieldset>
                                            <fieldset>
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
                    <section className="map-page">
                        <div className="tf-container full">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="map relative">
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4097.593409660467!2d-88.05533545497997!3d42.20689123399579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa263ede292f1%3A0xaa370f159ae2bb7a!2s23587%20N%20Field%20Rd%2C%20Lake%20Zurich%2C%20IL%2060047%2C%20USA!5e0!3m2!1sde!2sby!4v1776235183243!5m2!1sde!2sby" 
                                            height={570} 
                                            style={{ border: 0, width: "100%" }} 
                                            allowFullScreen 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade" 
                                        />
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
                    margin-bottom: 20px;
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
                
                input:disabled, textarea:disabled {
                    background-color: #f5f5f5;
                    cursor: not-allowed;
                    opacity: 0.7;
                }
                
                /* Style adjustments for the form */
                .contact-us-page-form {
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