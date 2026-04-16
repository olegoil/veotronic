import Link from "next/link"
import { useState } from "react"

export default function Footer1() {
	
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

			<footer id="footer" className="relative footer-style-2">
				<div className="marque-text-slider-footer">
					{/* <div className="marquee-wrapper text-slider">
						<div className="marquee-inner to-left">
							<ul className="marqee-list d-flex">
								<li className="marquee-item">
									<span className="text-slider">IT Services</span><i className="icon-asterisk" />
									<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
									<span className="text-slider">Data Security</span><i className="icon-asterisk" />
									<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
									<span className="text-slider">Data Security</span><i className="icon-asterisk" />
									<span className="text-slider">IT Services</span><i className="icon-asterisk" />
									<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
									<span className="text-slider">Data Security</span><i className="icon-asterisk" />
									<span className="text-slider">IT Services</span><i className="icon-asterisk" />
									<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
									<span className="text-slider">Data Security</span><i className="icon-asterisk" />
								</li>
							</ul>
						</div>
					</div> */}
				</div>
				<div className="tf-container relative z-index-3">
					<div className="footer-main  flex">
						<div className="footer-main-item logo-footer wow fadeInUpSmall" data-wow-delay=".2s">
							<img src="/assets/images/logo2.png" alt="image" className="logo" />
							<p className="des font-man">Veotronic builds smart technology for modern businesses. From AI automation to custom software and API integration — we deliver solutions that solve real problems. Let's build something great together</p>
							{/* <div className="follow-social">
								<span>Follow Us</span>
								<ul className="social-footer flex-three">
									<li>
										<Link href="/#" className="flex-five"><i className="icon-facebook" /></Link>
									</li>
									<li>
										<Link href="/#" className="flex-five"><i className="icon-twiter" /></Link>
									</li>
									<li>
										<Link href="/#" className="flex-five"><i className="icon-ins" /></Link>
									</li>
									<li>
										<Link href="/#" className="flex-five"><i className="icon-instagram" /></Link>
									</li>
								</ul>
							</div> */}
						</div>
						<div className="footer-main-item menu-services wow fadeInUpSmall" data-wow-delay=".3s">
							<h4 className="title-footer2 ">IT Services</h4>
							<ul className="menu-service">
								<li>
									<Link href="/service-ai"><i className="icon-right-icon" />AI & Machine Learning</Link>
								</li>
								<li>
									<Link href="/service-auto"><i className="icon-right-icon" />Process Automation</Link>
								</li>
								<li>
									<Link href="/service-api"><i className="icon-right-icon" />Unified API Platform</Link>
								</li>
								<li>
									<Link href="/service-development"><i className="icon-right-icon" />Software Development</Link>
								</li>
								<li>
									<Link href="/service-mobile"><i className="icon-right-icon" />Mobile App Development</Link>
								</li>
							</ul>
						</div>
						<div className="footer-main-item menu-suport wow fadeInUpSmall" data-wow-delay=".4s">
							<h4 className="title-footer2 ">Support</h4>
							<ul className="menu-service">
								<li>
									<Link href="/contact-us"><i className="icon-right-icon" />Support</Link>
								</li>
								<li>
									<Link href="/faq"><i className="icon-right-icon" />FAQ</Link>
								</li>
								<li>
									<Link href="/contact-us"><i className="icon-right-icon" />Contact Us</Link>
								</li>
								<li>
									<Link href="/about-company"><i className="icon-right-icon" />About Us</Link>
								</li>
								<li>
									<Link href="/privacy-policy"><i className="icon-right-icon" />Cookies Policy</Link>
								</li>
							</ul>
						</div>
						<div className="footer-main-item newsletter wow fadeInUpSmall" data-wow-delay=".5s">
							<h4 className="title-footer2 ">Newsletter</h4>
							<p className="mb-20">Subscribe our newsletter to get more updates</p>
							<form onSubmit={handleSubmit} className="form-footer2 relative flex-two" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
								<i className="icon-envelope" />
								<input type="email" name="email" id="subscribe-email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
								<button type="submit" id="subscribe-button">Sign Up <i className="icon-right-icon" /></button>
							</form>
							<p className="privacy-policy">By subscribing, you’re accept <Link href="/privacy-policy">Privacy Policy</Link>
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 ">
							<a id="scroll-top" className="button-go go-top-h1 relative" />
						</div>
					</div>
					<div className="footer-bottom2 row">
						<div className="col-md-6">
							<p>&copy; {new Date().getFullYear()} Veotronic — Digital solutions. All rights reserved.</p>
						</div>
						<div className="col-md-6">
							<ul className="menu-right-bottom flex-six">
								<li>
									<Link href="/about-company">About Company</Link>
								</li>
								<li>
									<Link href="/contact-us">Contact</Link>
								</li>
								<li>
									<Link href="/privacy-policy">Privacy</Link>
								</li>
								<li>
									<Link href="/faq">Faq</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
