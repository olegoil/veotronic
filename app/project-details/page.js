
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ProjectDetails() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
				<section className="project-details pt-130 pb-130">
					<div className="tf-container">
						<div className="row align-center mb-100">
							<div className="col-md-8">
								<div className="heading-title">
									<span className="sub-title texts-blue font-man">About The Project</span>
									<h2 className="title">Deeper Dive into Our Digital Product Design Masterpieces</h2>
									<p className="des mb-40">Sed ut perspiciatis unde omniste natus voluptatem accusantiume
										rem aperia eaque ipsa
										quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt
										explicabo. Nemo enim
										epsam voluptatem quia voluptas aspernatur odites sed quia consequunture</p>
									<Link href="/#" className="button-src">Visit Website <i className="icon-angle-right" /></Link>
								</div>
							</div>
							<div className="col-md-4">
								<div className="info-project-details">
									<ul className="info-project">
										<li>
											<h4>Clients</h4>
											<p>Design Studio In USA </p>
										</li>
										<li>
											<h4>Project Type</h4>
											<p>Digital Product Design</p>
										</li>
										<li>
											<h4>Date</h4>
											<p>25 October 2023</p>
										</li>
										<li>
											<h4>Website</h4>
											<p><Link href="/#">Veotronic.com</Link></p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<img src="/assets/images/project/pj-details1.jpg" alt="image" className="image-two-project" />
							</div>
							<div className="col-md-8">
								<img src="/assets/images/project/pj-details2.jpg" alt="image" />
							</div>
						</div>
						<div className="row interesting bb-blog">
							<div className="col-md-6">
								<h2 className="title">Interesting facts in<br />
									Development</h2>
							</div>
							<div className="col-md-6">
								<div className="interesting-content">
									<p>Must explain to you how all this mistaken idea of denouncing pleasure and
										praising pain was born and
										I will give you a complete account of the system, and expound the actual
										teachings of the great explorer
										of the truth, the master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself,
										because it is pleasure, but because those who do not know how to pursue pleasure
										rationally encounter</p>
									<ul className="icon-listing">
										<li className="flex-three">
											<i className="icon-Check" />
											<p className="font-man">Efficient Sprint Planning</p>
										</li>
										<li className="flex-three">
											<i className="icon-Check" />
											<p className="font-man">Iterative Delivery Approach</p>
										</li>
										<li className="flex-three">
											<i className="icon-Check" />
											<p className="font-man">Standups and Demos</p>
										</li>
										<li className="flex-three">
											<i className="icon-Check" />
											<p className="font-man">Problem-solving</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row results">
							<div className="col-md-6">
								<h2 className="title">The Results of<br />
									Our Project</h2>
							</div>
							<div className="col-md-6">
								<div className="results-content">
									<p>Will give you a complete account of the system, and expound the actual teachings
										of the great explorer
										of the truth, the master-builder of human happiness rejects, dislikes, or avoids
										pleasure </p>
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Support clients</h4>
												</div>
												<p>Sed ut perspiciatis unde omnis natus voluptatem accusantium
													doloremque laudantium, totam rem aperiam inventore</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Solve problems</h4>
												</div>
												<p>To take a trivial example, which of us ever undertakes laborious
													physical exercise, except to obtain some advantage</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="row mb-100">
							<div className="col-md-6">
								<img src="/assets/images/project/pj-details3.jpg" alt="image" className="image-two-project2" />
							</div>
							<div className="col-md-6">
								<img src="/assets/images/project/pj-details4.jpg" alt="image" />
							</div>
						</div>
						<div className="row align-center">
							<div className="col-md-5">
								<div className="next-prev-project">
									<Link href="/#" className="next-prev">Preview <i className="icon-right-icon" /></Link>
									<h3 className="title"><Link href="/#">Business Website Design</Link></h3>
								</div>
							</div>
							<div className="col-md-2 center">
								<Link href="/#" className="icon-list-project"><i className="icon-union" /></Link>
							</div>
							<div className="col-md-5">
								<div className="next-prev-project text-end">
									<Link href="/#" className="next-prev">Preview <i className="icon-right-icon" /></Link>
									<h3 className="title"><Link href="/#">Business Website Design</Link></h3>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}