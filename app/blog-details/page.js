'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function BlogDetails() {

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

			<Layout>
				<section className="blog-single pd-section">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 col-12">
								<article className="side-blog-single mb-50 relative">
									<h3 className="entry-title mb-18">
										Delving into the Aesthetics and Functionality Chronicles
										Creativity and Precision in Every Project Detail
									</h3>
									<p className="description mb-40">Sed ut perspiciatis unde omnis iste natus error
										sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
										eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
										vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
										sit aspernatur aut odit aut fugit, sed quia consequuntur magni
										dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
										quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
										adipisci velit, sed quia non numquam eius modi tempora incidunt
										ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
										ad minima veniam, quis nostrum exercitationem ullam corporis
										suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
									</p>
									<img src="/assets/images/blog/blog-details.jpg" alt="Image blog" className="mb-30" />
									<p className="description mb-40">Nemo enim ipsam voluptatem quia voluptas sit
										aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
										qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
										sed quia non numquam eius modi tempora incidunte
									</p>
									<div className="quote-blog bg-2 mb-50">
										<blockquote className="flex">
											<div className="icon">
												<i className="icon-icon-quote" />
											</div>
											<div className="content">
												<h3 className="title-quote">Handling Mounting And Unmounting Of Given
													Navigation Routes In React Native</h3>
												<span className="name relative">Kevin C. Young</span>
											</div>
										</blockquote>
									</div>
									<p className="description mb-50">
										No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself because it is painse
									</p>
									<img src="/assets/images/blog/blog-details2.jpg" alt="Image blog" className="mb-30" />
									<h3 className="entry-title mb-15">
										Conference For New Design
									</h3>
									<p className="description mb-50">
										At vero eos et accusamus etodio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
									</p>
									<div className="tag-share-blog pb-50 mb-80 bb-blog">
										<div className="tag-blog-widget flex-three">
											<span className="tag-share">Tags</span>
											<ul className="tag-blog">
												<li>
													<Link href="/#" className="font-man active">IT Design</Link>
												</li>
												<li>
													<Link href="/#" className="font-man">Cyber Security</Link>
												</li>
												<li>
													<Link href="/#" className="font-man">Branding</Link>
												</li>
											</ul>
										</div>
										<div className="share-blog-widget flex-three">
											<span className="tag-share">Share</span>
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
								</article>
								<div className="author-blog flex-three bg-2 mb-80">
									<div className="image">
										<img src="/assets/images/avata/avt-profile.jpg" alt="image" />
									</div>
									<div className="content">
										<h4>Richard M. Fudge</h4>
										<p className="color-text">We denounce with righteous indignation and dislike men who are so beguiled
											and demoralized by the charms of pleasure of the moment blinded
										</p>
										<ul className="social-profile flex-three">
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
								<div className="post-blog flex-two mb-80">
									<div className="post-blog-item flex-three">
										<div className="image-post left">
											<img src="/assets/images/blog/bl-2.jpg" alt="" />
										</div>
										<div className="content-post">
											<span className="date color-text font-man">October 25, 2023</span>
											<h5 className="title"><Link href="/#">Navigating the Landscape of Our Design Endeavors</Link></h5>
										</div>
									</div>
									<div className="post-blog-item flex-six">
										<div className="content-post text-end">
											<span className="date color-text font-man">October 25, 2023</span>
											<h5 className="title"><Link href="/#">Delving into the Aesthetics and Functionality of Our Design</Link></h5>
										</div>
										<div className="image-post right">
											<img src="/assets/images/blog/bl-1.jpg" alt="" />
										</div>
									</div>
								</div>
								<div className="comment-blog mb-80">
									<h3 className="title mb-20">Comments</h3>
									<ul className="comment">
										<li>
											<div className="comment-item flex mb-30">
												<div className="comment-image">
													<img src="/assets/images/avata/cmt1.jpg" alt="image" />
												</div>
												<div className="comment-content">
													<span className="name">William L. Jackson</span>
													<span className="date color-text font-man">Sep 25, 2023</span>
													<p className="des font-man color-text">We denounce with righteous indignation and
														dislike men who are so beguiled and demoralized by the
														charms of pleasure of the moment so blinded
													</p>
													<Link href="/#" className="repply-link">Reply <i className="icon-right" /></Link>
												</div>
											</div>
											<ul className="comment comment-repply">
												<li>
													<div className="comment-item flex ">
														<div className="comment-image">
															<img src="/assets/images/avata/cmt2.jpg" alt="image" />
														</div>
														<div className="comment-content">
															<span className="name">James M. Stovall</span>
															<span className="date color-text font-man">Sep 25, 2023</span>
															<p className="des font-man color-text">Pleasure is to be welcomed and every pain avoided in certain circumstances owing to the claims of duty or the obligations business frequently
															</p>
															<Link href="/#" className="repply-link">Reply <i className="icon-right" /></Link>
														</div>
													</div>
												</li>
											</ul>
										</li>
									</ul>
								</div>
								<div className="comment-form bg-2">
									<h3 className="title bb-blog mb-30"> Leave a Reply</h3>
									<form onSubmit={handleSubmit} id="form-comment-blog">
										<div className="row">
											<div className="col-md-6 mb-20">
												<label className="mb-20">Full Name</label>
												<input type="text" name="name" value={formData.name} onChange={handleChange} className="input-group" placeholder="Enter your name" />
											</div>
											<div className="col-md-6 mb-20">
												<label className="mb-20">Email Address</label>
												<input type="email" name="email" value={formData.email} onChange={handleChange} className="input-group" placeholder="Enter your email" />
											</div>
											<div className="col-lg-12 mb-20">
												<label className="mb-20">Website</label>
												<input type="url" name="website" value={formData.website} onChange={handleChange} className="input-group" placeholder="Enter your website" />
											</div>
											<div className="col-lg-12 mb-20">
												<label className="mb-20">Comment</label>
												<textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Write your comment" rows={4} cols={50} />
											</div>
											<div className="col-lg-12">
												<button type="submit">Send Comments <i className="icon-right" /></button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4 col-12">
								<div className="sidebar-blog">
									{/* <div className="widget mb-50">
										<h4 className="title-blog">Search </h4>
										<form onSubmit={handleSubmit} className="search-form-blog relative">
											<input type="search" placeholder="Keywords" className="input-search" />
											<button type="button"><i className="icon-search2" /></button>
										</form>
									</div> */}
									<div className="widget mb-50">
										<h4 className="title-blog bb-blog mb-30">Categories</h4>
										<ul className="category-blog">
											<li>
												<Link href="/#" className="flex-two">
													<span>IT Management Solutions</span>
													<i className="icon-arrow-rights" />
												</Link>
											</li>
											<li>
												<Link href="/#" className="flex-two">
													<span>Cyber Security</span>
													<i className="icon-arrow-rights" />
												</Link>
											</li>
											<li>
												<Link href="/#" className="flex-two">
													<span>Product Design</span>
													<i className="icon-arrow-rights" />
												</Link>
											</li>
											<li>
												<Link href="/#" className="flex-two">
													<span>Website Development</span>
													<i className="icon-arrow-rights" />
												</Link>
											</li>
											<li>
												<Link href="/#" className="flex-two">
													<span>Data Security</span>
													<i className="icon-arrow-rights" />
												</Link>
											</li>
										</ul>
									</div>
									<div className="widget mb-50">
										<h4 className="title-blog bb-blog mb-30">Recent News</h4>
										<div className="widget-recent-post">
											<div className="recent-post-item flex-three mb-30">
												<Link href="/#" className="image">
													<img src="/assets/images/blog/recent1.jpg" alt="image" />
												</Link>
												<div className="content">
													<span className="date font-man">October 25, 2023</span>
													<h5 className="title"><Link href="/#">IT Service Studies Accelerating Business Fly Success Tech</Link></h5>
												</div>
											</div>
											<div className="recent-post-item flex-three mb-30">
												<Link href="/#" className="image">
													<img src="/assets/images/blog/recent2.jpg" alt="image" />
												</Link>
												<div className="content">
													<span className="date font-man">October 25, 2023</span>
													<h5 className="title"><Link href="/#">IT Service Studies Accelerating Business Fly Success Tech</Link></h5>
												</div>
											</div>
											<div className="recent-post-item flex-three">
												<Link href="/#" className="image">
													<img src="/assets/images/blog/recent3.jpg" alt="image" />
												</Link>
												<div className="content">
													<span className="date font-man">October 25, 2023</span>
													<h5 className="title"><Link href="/#">IT Service Studies Accelerating Business Fly Success Tech</Link></h5>
												</div>
											</div>
										</div>
									</div>
									<div className="widget mb-50">
										<h4 className="title-blog bb-blog mb-30">Popular Tags</h4>
										<ul className="tag-blog">
											<li>
												<Link href="/#" className="font-man active">IT Design</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Cyber Security</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Branding</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Software</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Data Science</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Apps</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Management</Link>
											</li>
											<li>
												<Link href="/#" className="font-man">Web Development</Link>
											</li>
										</ul>
									</div>
									<div className="widget">
										<div className="widget-banner relative">
											<div className="z-index-2 relative">
												<h2 className="title-banner text-white fw-300">Looking For Professional IT
													<span className="agency fw-600">Solutions Agency</span>
												</h2>
												<p className="des text-white font-man">Sed perspiciatis omniste voluptateme
													accus antiume doloremque lauda</p>
												<div className="btn-wrap">
													<Link href="/#" className="more-link">Read More <i className="icon-right-icon" /></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}