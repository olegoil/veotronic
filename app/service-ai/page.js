'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState, useEffect } from "react"
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

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="AI & Machine Learning">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">AI & Machine Learning</span>
											<h2 className="title">From image processing to intelligent predictions</h2>
											<p className="des">
We embrace a flexible approach and support innovation within our team. In the field of AI and machine learning, we explore image and video processing, object and face recognition, and computer vision. We use these technologies to automate routine data analysis, forecast trends and risks, and help businesses streamline processes, improve prediction accuracy, and build intelligent products</p>
										</div>
										{/* <img src="/assets/images/page/dvl-deatils_new.jpg" alt="image" /> */}
										<div className="video-background">
											<video autoPlay muted loop playsInline disablePictureInPicture>
												<source src="/assets/videos/office_programming.mp4" type="video/mp4"/>
												Your browser does not support HTML5 video. But the background experience is still beautiful.
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
													<h4>Pattern Recognition</h4>
												</div>
												<p>Recognize faces, voices, and other patterns with high accuracy. Ideal for security, authentication, and personalized user experiences</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Predictive Analytics</h4>
												</div>
												<p>Forecast trends, risks, and outcomes in finance, marketing, and healthcare. Make data-driven decisions before events happen</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Natural Language Processing</h4>
												</div>
												<p>Power chatbots, translators, and text analysis systems. Understand, interpret, and generate human language automatically</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Autonomous Systems</h4>
												</div>
												<p>Build self-driving vehicles, drones, and robotics that perceive, decide, and act without human intervention</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="feature-home2 pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title center w-650 m0-auto mb-130">
										<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Industries We Serve</span>
										<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Tailored automation solutions for your industry</h2>
									</div>
								</div>
							</div>
							<div className="feature-h2-wrap">
								<div className="row mt--70 mb-70">
									<div className=" col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".2s">
										<div className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">01</span>
												<div className="icons">
													<i className="icon-vector-dev" />
												</div>
											</div>
											<h3 className="title">E-commerce</h3>
											<div className="inner-bottom">
												<p className="des font-man">Auto-filling product cards, purchase flow customization, and advanced product search
												</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".3s">
										<div className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">02</span>
												<div className="icons">
													<i className="icon-cloud-computing" />
												</div>
											</div>
											<h3 className="title">EdTech</h3>
											<div className="inner-bottom">
												<p className="des font-man">Personalized educational journeys, simplified administrative workflows
												</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".4s">
										<div className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">03</span>
												<div className="icons">
													<i className="icon-planning-2" />
												</div>
											</div>
											<h3 className="title">Big Data Processing</h3>
											<div className="inner-bottom">
												<p className="des font-man">Information retrieval, intelligent data processing, and sorting in a user-friendly format
												</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-3 wow fadeInUpSmall" data-wow-delay=".5s">
										<div className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">04</span>
												<div className="icons">
													<i className="icon-vector-dev" />
												</div>
											</div>
											<h3 className="title">Business Automation</h3>
											<div className="inner-bottom">
												<p className="des font-man">Automate document workflows — from accounting to contracts
												</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section-it-manager pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-7">
									<div className="it-manager-content">
										<div className="heading-title mb-20">
											<span className="sub-title texts-blue font-man">How to Manage</span>
											<h2 className="title">Our Managed IT Services let you Concentrate on What Matters
											</h2>
										</div>
										<ul className="nav nav-tabs-pricing nav-tabs-pricing-service" id="myTab" role="tablist">
											<li className="nav-item" onClick={() => handleTab(1)}>
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="approach-tab" data-bs-toggle="tab" data-bs-target="#approach-tab-pane" type="button" role="tab" aria-controls="approach-tab-pane" aria-selected="true">Analysis</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="goals-tab" data-bs-toggle="tab" data-bs-target="#goals-tab-pane" type="button" role="tab" aria-controls="goals-tab-pane" aria-selected="false">Training</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="advisory-tab" data-bs-toggle="tab" data-bs-target="#advisory-tab-pane" type="button" role="tab" aria-controls="advisory-tab-pane" aria-selected="false">Implementation</button>
											</li>
										</ul>
										<div className="tab-content" id="myTabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="approach-tab-pane" role="tabpanel" aria-labelledby="approach-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">We study your business and apply intelligent data mining methods to deliver high-quality datasets for ML models. Our Data Scientists classify and analyze sequences using modern programming tools, extracting valuable insights from large volumes of raw data. We prepare clean, structured data to power accurate and reliable machine learning algorithms
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Intelligent Data Mining</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">High-Quality Datasets</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Sequence Analysis</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Data Insights</p>
														</li>
													</ul>
													{/* <Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link> */}
												</div>
											</div>
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="goals-tab-pane" role="tabpanel" aria-labelledby="goals-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">We build and train machine learning models for AI-powered software development. Our team uses pre-trained models or creates custom ML solutions from scratch. We test frameworks, validate business outcomes, and train models in the cloud or on your own infrastructure — whatever fits your needs
													</p>
													
												</div>
											</div>
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="advisory-tab-pane" role="tabpanel" aria-labelledby="advisory-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">The Veotronic team thoroughly researches the ML model implementation process to build modern AI solutions and seamlessly integrate them into enterprise software products. Our ML engineers collect and prepare data, train models, and handle deployment. We ensure high model accuracy through real-world testing, continuous error correction, and ongoing refinement.
													</p>
												
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/page/dvl-deatils2_new.jpg" alt="image" />
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