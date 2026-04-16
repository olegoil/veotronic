import Link from "next/link"
import { useState } from "react"

export default function Footer5() {
	
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

			<footer id="footer" className="footer-style-5 bg-1">
				<div className="tf-container">
					<div className="row footer-top5">
						<div className="col-md-3">
							<div className="logo-footer">
								<img src="/assets/images/logo-footer2.png" alt="image" />
							</div>
						</div>
						<div className="col-md-9">
							<ul className="social-footer5 flex-six">
								<li>
									<Link href="/#"><i className="icon-facebook" /><span>Facebook</span></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-twiter" /><span>Twiter</span></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-ins" /><span>LinkedIn</span></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-instagram" /><span>Instagram</span></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="row footer-main5">
						<div className="col-md-4">
							<div className="footer-newsletter">
								<h2 className="title-new text-white mb-23">Subscribe <span className="font-italic">Newsletter</span></h2>
								<p className="text-white mb-40">We understand that every challenge is an opportunity
									team of dedicated professionals a culture
								</p>
								<form onSubmit={handleSubmit} className="form-footer2 relative flex-two" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
									<i className="icon-envelope" />
									<input type="email" name="email" id="subscribe-email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
									<button type="submit" id="subscribe-button">Sign Up <i className="icon-right-icon" /></button>
								</form>
								<p className="accept font-man fw-400 text-white">By subscribing, you’re accept <Link href="/#" className="text-white fw-700">Privacy Policy</Link></p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="footer-menu-service">
								<h5 className="title-footer text-white">Services</h5>
								<ul className="menu-service">
									<li>
										<Link href="/#">Web (UX/UI) Design</Link>
									</li>
									<li>
										<Link href="/#">Machine Learning &amp; AI</Link>
									</li>
									<li>
										<Link href="/#">Web Development</Link>
									</li>
									<li>
										<Link href="/#">IT Cyber Security</Link>
									</li>
									<li>
										<Link href="/#">Cloud Computing</Link>
									</li>
									<li>
										<Link href="/#">Analytic &amp; Engineering</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-5">
							<div className="footer-contact">
								<p className="des">Need Professional Web Design and Development
									Solutions to Grow your Business
								</p>
								<div className="flex-one address-wrap">
									<div className="address">
										<h5 className="title-footer text-white">Locations</h5>
										<p className="font-man text-lcation text-white mb-20">23587 n field rd lake Zurich IL 60047, United States</p>
									</div>
									<div className="address">
										<h5 className="title-footer text-white">Contact</h5>
										<p className="font-man text-lcation text-white"><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
										<p className="phone text-white"><a href="tel:+1 (224) 206-0034" className='text-white'>+1 (224) 206-0034</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row footer-bottom5 align-center">
						<div className="col-md-5">
							<p className="text-white">© 2023 Veotronic - IT Services. All rights reserved.</p>
						</div>
						<div className="col-md-2">
							<a id="scroll-top" className="button-go go-top-h5 relative" />
						</div>
						<div className="col-md-5">
							<ul className="menu-right-bottom flex-six">
								<li>
									<Link href="/#">Company</Link>
								</li>
								<li>
									<Link href="/#">Support</Link>
								</li>
								<li>
									<Link href="/#">Privacy</Link>
								</li>
								<li>
									<Link href="/#">Faq</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
