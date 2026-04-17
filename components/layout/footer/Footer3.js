import Link from "next/link"
import { useState } from "react"

export default function Footer3() {
	
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

			<footer id="footer" className="footer-style-3 bg-3 overflow-hiden relative">
				<img src="/assets/images/page/mask-banner3.png" alt="image" className="mask-banner3" />
				<div className="tf-container">
					<div className="row z-index-3 relative">
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="logo-footer">
								<img src="/assets/images/logo-footer2.png" alt="image" className="logo" />
								<p className="des">IT professionals, we work closely with
									you to understand your objectives and challenges, and develop tailor</p>
								<form onSubmit={handleSubmit} className="form-footer3 relative flex" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
									<i className="icon-envelope" />
									<input type="email" placeholder="Email Address" name="email" id="subscribe-email" value={formData.email} onChange={handleChange} />
									<button type="submit" id="subscribe-button"><i className="icon-arrow-right" /></button>
								</form>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="footer-main-service">
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
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="footer-main-locations">
								<h5 className="title-footer text-white">Locations</h5>
								<p className="font-man text-lcation text-white mb-20">23587 N Field Rd, Lake Zurich, IL 60047, United States</p>
								<h5 className="title-footer text-white">Contact</h5>
								<p className="font-man text-lcation "><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
								<p className="phone text-white"><a href="tel:+1 (224) 206-0034" className='text-white'>+1 (224) 206-0034</a></p>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3">
							<div className="footer-download-ap">
								<h5 className="title-footer text-white">Download App</h5>
								<p className="font-man text-lcation">Utilizing a User-friendly CMS like WordPress Drupal Joomla</p>
								<div className="btn-wrap">
									<Link href="/#" className="button-src gg-play">Google Play <i className="icon-angle-right" />
									</Link>
									<Link href="/#" className="button-src apple-store">Apple Store <i className="icon-angle-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom3 z-index-3 relative bg-3">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<p className="text-white">© 2023 WebTech - IT Services. All rights reserved.</p>
							</div>
							<div className="col-lg-6">
								<ul className="social-share flex-six">
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
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
