
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error() {

	return (
		<>

			<Layout breadcrumbTitle="Error 404">
				<section className="pt-130 pb-130">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="erro-page">
									<div className="image-404">
										<img src="/assets/images/page/404.png" alt="image" />
									</div>
									<div className="erro-content center m0-auto">
										<h2 className="title mb-30">Oops! Nothing Was Found</h2>
										<p className="des mb-30">Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque
											laudantium totam aperiame eaque abillo inventore veritatis</p>
										<Link href="/" className="button-src">Back To Home <i className="icon-angle-right" /></Link>
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