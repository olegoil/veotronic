import Link from "next/link"
import { useState } from "react"

export default function Footer2() {
	
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

			<footer id="footer" className="bg-1">
				<div className="tf-container">
					<div className="row footer-top flex-three">
						<div className="col-md-3">
							<Link href="/#" className="logo-footer">
								<img src="/assets/images/logo-footer.png" alt="" />
							</Link>
						</div>
						{/* <div className="col-md-9">
							<ul className="social-footer flex-six">
								<li>
									<Link href="/#" className="font-man"><i className="icon-facebook" />Facebook</Link>
								</li>
								<li>
									<Link href="/#" className="font-man"><i className="icon-tw" />Twitter</Link>
								</li>
								<li>
									<Link href="/#" className="font-man"><i className="icon-in" />LinkedIn</Link>
								</li>
								<li>
									<Link href="/#" className="font-man"><i className="icon-instagram" />Instagram</Link>
								</li>
							</ul>
						</div> */}
					</div>
					<div className="footer-main row">
						<div className="col-md-6">
							<div className="footer-main-newsletter">
								<h2 className="title-new text-white mb-23">Subscribe <span className="font-italic">Newsletter</span></h2>
								<p className="text-white mb-60">Veotronic builds smart technology for modern businesses. From AI automation to custom software and API integration — we deliver solutions that solve real problems. Let's build something great together
								</p>
								<form onSubmit={handleSubmit} className="form-footer2 relative flex-two" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
									<i className="icon-envelope" />
									<input type="email" name="email" id="subscribe-email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
									<button type="submit" id="subscribe-button">Sign Up <i className="icon-right-icon" /></button>
								</form>
								<p className="accept font-man fw-400 text-white">By subscribing, you’re accept <Link href="/privacy-policy" className="text-white fw-700">Privacy Policy</Link></p>
							</div>
						</div>
						<div className="col-md-6 footer-main-right flex-one">
							<div className="footer-main-service">
								<h5 className="title-footer text-white">Services</h5>
								<ul className="menu-service">
									<li>
										<Link href="/service-ai">AI &amp; Machine Learning</Link>
									</li>
									<li>
										<Link href="/service-auto">Process Automation</Link>
									</li>								
									<li>
										<Link href="/service-api">Unified API Platform</Link>
									</li>
									<li>
										<Link href="/service-development">Custom Software Development</Link>
									</li>
									<li>
										<Link href="/service-mobile">Mobile App Development</Link>
									</li>								
								</ul>
							</div>
							<div className="footer-main-locations">
								<h5 className="title-footer text-white">Locations</h5>
								<p className="font-man text-lcation text-white mb-20">23587 N Field Rd, Lake Zurich, IL 60047, United States</p>
								<h5 className="title-footer text-white">Contact</h5>
								<p className="font-man text-lcation "><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
								<p className="phone text-white"><a href="tel:+1 (224) 206-0034" className='text-white'>+1 (224) 206-0034</a></p>
							</div>
						</div>
					</div>
					<div className="row footer-bottom">
						<div className="col-lg-12">
							<p className="coppy-right center text-white">&copy; {new Date().getFullYear()} Veotronic — Digital solutions. All rights reserved
							</p>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
