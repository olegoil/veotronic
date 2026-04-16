
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogStyle2() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Standard">
				<section className="our-blog pd-section">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 col-12">
								<article className="side-blog mb-50 relative">
									<div className="blog-image overflow-hiden">
										<Link className="post-thumbnail" href="/blog-details">
											<img src="/assets/images/blog/blog1.jpg" alt="Image blog" />
										</Link>
									</div>
									<div className="blog-content content-grid">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Design</Link>
											<span className="date font-man">October 25, 2023</span>
										</div>
										<h3 className="entry-title">
											<Link href="/blog-list">IT Service Studies Accelerating Business Fly Success <br /> Tech Delving Functionality Perfection</Link>
										</h3>
										<p className="description">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
											complete account of the system, and expound the actual teachings of the great explorer
										</p>
										<div className="btn-wrap">
											<Link href="/#" className="more-link">Read More <i className="icon-right-icon" /></Link>
										</div>
									</div>
								</article>
								<article className="side-blog  blog-standard bg-2 mb-50 relative">
									<div className="blog-content content-standard">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Design</Link>
											<span className="date font-man">October 25, 2023</span>
										</div>
										<h3 className="entry-title">
											<Link href="/blog-list">Chronicles of Creativity and Precision
												in Every Project Detail</Link>
										</h3>
										<span className="admin relative font-man">Donald E. Nicholas</span>
										<div className="icon-standard">
											<i className="icon-quote" />
										</div>
									</div>
								</article>
								<article className="side-blog mb-50 relative">
									<div className="blog-image overflow-hiden">
										<Link className="post-thumbnail" href="/blog-details">
											<img src="/assets/images/blog/blog2.jpg" alt="Image blog" />
										</Link>
									</div>
									<div className="blog-content content-grid">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Design</Link>
											<span className="date font-man">October 25, 2023</span>
										</div>
										<h3 className="entry-title">
											<Link href="/blog-list">IT Service Studies Accelerating Business Fly Success <br /> Tech Delving Functionality Perfection</Link>
										</h3>
										<p className="description">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
											complete account of the system, and expound the actual teachings of the great explorer
										</p>
										<div className="btn-wrap">
											<Link href="/#" className="more-link">Read More <i className="icon-right-icon" /></Link>
										</div>
									</div>
								</article>
								<article className="side-blog  blog-standard bg-2 mb-50 relative">
									<div className="blog-content content-standard">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Design</Link>
											<span className="date font-man">October 25, 2023</span>
										</div>
										<h3 className="entry-title">
											<Link href="/blog-list">Chronicles of Creativity and Precision
												in Every Project Detail</Link>
										</h3>
										<span className="admin relative font-man">Donald E. Nicholas</span>
										<div className="icon-standard">
											<i className="icon-quote" />
										</div>
									</div>
								</article>
								<article className="side-blog mb-70 relative">
									<div className="blog-image overflow-hiden">
										<Link className="post-thumbnail" href="/blog-details">
											<img src="/assets/images/blog/blog3.jpg" alt="Image blog" />
										</Link>
									</div>
									<div className="blog-content content-grid">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Design</Link>
											<span className="date font-man">October 25, 2023</span>
										</div>
										<h3 className="entry-title">
											<Link href="/blog-list">IT Service Studies Accelerating Business Fly Success <br /> Tech Delving Functionality Perfection</Link>
										</h3>
										<p className="description">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
											complete account of the system, and expound the actual teachings of the great explorer
										</p>
										<div className="btn-wrap">
											<Link href="/#" className="more-link">Read More <i className="icon-right-icon" /></Link>
										</div>
									</div>
								</article>
							</div>
							<div className="col-lg-4 col-12">
								<div className="sidebar-blog">
									{/* <div className="widget mb-50">
										<h4 className="title-blog">Search </h4>
										<form action="/" className="search-form-blog relative">
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
						<div className="row">
							<div className="col-md-12 ">
								<ul className="tf-pagination flex-three">
									<li>
										<Link className="pages-link" href="/#">
											<i className="icon-left-icon" />
										</Link>
									</li>
									<li><Link className="pages-link" href="/#">01</Link></li>
									<li>
										<Link className="pages-link" href="/#">02</Link>
									</li>
									<li><Link className="pages-link" href="/#">03</Link></li>
									<li><Link className="pages-link" href="/#">04</Link></li>
									<li aria-current="page">
										<Link className="pages-link active" href="/#">
											<i className="icon-right-icon" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}