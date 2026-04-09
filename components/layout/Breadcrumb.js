import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
	return (
		<>

			<section className="breadcumb-section relative ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12 z-index-2 relative ">
							<div className="title-inner center">
								<h1 className="title text-white mb-18">{breadcrumbTitle}</h1>
								<div className="title-group text-white">
									<Link href="/">Home</Link>
									<Link href="/#">{breadcrumbTitle}</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
