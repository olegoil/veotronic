import Link from "next/link"
import { useState } from "react"

export default function Footer4() {
	
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

			<footer id="footer" className="footer-style-4 bg-4">
				<div className="tf-container">
					<div className="row footer-top4 pt-130 pb-130">
						<div className="col-lg-5">
							<div className="footer-top-left">
								<h2 className="title">Start your journey to better business</h2>
								<form onSubmit={handleSubmit} className="form-footer2 relative flex-two" id="subscribe-form" method="post" acceptCharset="utf-8" data-mailchimp="true">
									<i className="icon-envelope" />
									<input type="email" name="email" id="subscribe-email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
									<button type="submit" id="subscribe-button">Sign Up <i className="icon-right-icon" /></button>
								</form>
								<p className="accept font-man fw-400 ">By subscribing, you’re accept <Link href="/#" className=" fw-700 text-blue1">Privacy Policy</Link></p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-map">
								<div className="map2 relative">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4097.593409660467!2d-88.05533545497997!3d42.20689123399579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa263ede292f1%3A0xaa370f159ae2bb7a!2s23587%20N%20Field%20Rd%2C%20Lake%20Zurich%2C%20IL%2060047%2C%20USA!5e0!3m2!1sde!2sby!4v1776235183243!5m2!1sde!2sby" height={300} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footer-top-right">
								<h3 className="title">Main Office</h3>
								<ul className="address">
									<li className="flex">
										<i className="icon-maps" />
										<p>23587 N Field Rd, Lake Zurich, IL 60047, United States</p>
									</li>
									<li className="flex">
										<i className="icon-envelope5" />
										<p><a href="mailto:info@veotronic.com" className='text-white'>info@veotronic.com</a></p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-main4 flex">
						<div className="footer-item-logo">
							<img src="/assets/images/logo-footer3.png" alt="image" className="logo-footer" />
							<p className="des">Sed ut persiciatis unde omnis natus voluptatem accusantium dolore</p>
							<div className="follow-social">
								<h6 className="title">Follow Us</h6>
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
							</div>
						</div>
						<div className="footer-item-quick-link">
							<h4 className="title-menu">Quick Links</h4>
							<ul className="menu-service">
								<li>
									<Link href="/#"><i className="icon-right-icon" />IT Consultancy</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />IT Management</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />IT Supports</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Cloud Computing</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Cyber Security</Link>
								</li>
							</ul>
						</div>
						<div className="footer-item-support">
							<h4 className="title-menu">Support</h4>
							<ul className="menu-service">
								<li>
									<Link href="/#"><i className="icon-right-icon" />Forum Support</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Help &amp; FAQ</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Contact Us</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Pricing and plans</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Cookies Policy</Link>
								</li>
							</ul>
						</div>
						<div className="footer-item-resources">
							<h4 className="title-menu">Resources</h4>
							<ul className="menu-service">
								<li>
									<Link href="/#"><i className="icon-right-icon" />App Builder</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Ecommerce</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Web to Apps</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />Case Studies</Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-right-icon" />DevOps</Link>
								</li>
							</ul>
						</div>
						<div className="footer-item-our-team">
							<h4 className="title-menu">Join Our Team</h4>
							<p className="des">Utilizing User-friendly CMS like WordPress Drupal Joomla</p>
							<Link href="/#" className="button-src">Open Position <i className="icon-angle-right" /></Link>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
