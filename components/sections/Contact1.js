

export default function Contact1() {
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
										<p>+236 (456) 896 22</p>
									</div>
								</div>
								<div className="contact-wrap flex-three wow fadeInUpSmall" data-wow-delay=".5s">
									<div className="icon">
										<i className="icon-envelopes" />
									</div>
									<div className="contact-content">
										<span className="font-man">Send Us Email</span>
										<p>infotech@gmail.com</p>
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
								<form className="form-contact-home" id="contactform" method="post" action="./contact/contact-process.php">
									<div className="input-group flex-one">
										<fieldset className="relative mb-20">
											<input type="text" className="form-control" id="name-input" placeholder="Name" name="name" required />
											<i className="icon-user" />
										</fieldset>
										<fieldset className="relative mb-20">
											<input type="email" className="form-control" id="email-input" placeholder="Email" name="email" required />
											<i className="icon-envelopes" />
										</fieldset>
									</div>
									<fieldset className="mb-20">
										<div className="nice-select" tabIndex={0} name="drop" id="drop" required>
											<span className="current">Choose Services</span>
											<ul className="list">
												<li data-value className="option selected focus">Choose Services
												</li>
												<li data-value="service" className="option"> Services 1</li>
												<li data-value="service" className="option"> Services 2</li>
												<li data-value="service" className="option"> Services 3</li>
											</ul>
										</div>
									</fieldset>
									<fieldset className=" mb-15">
										<textarea rows={4} cols={50} placeholder="Message" name="message" id="message" required />
									</fieldset>
									<fieldset className="center">
										<button className="btn-submit" type="submit">Send Message Us <i className="icon-right-icon" /></button>
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
