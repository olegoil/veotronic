import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"

export default function Error() {

	return (
		<>
			<Head>
				{/* Основные мета-теги для страницы 404 */}
				<title>404 — Page Not Found | Veotronic</title>
				<meta name="description" content="Oops! The page you're looking for cannot be found. It might have been moved, deleted, or never existed. Return to the homepage to continue exploring Veotronic's IT solutions." />
				<meta name="robots" content="noindex, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL — указываем на главную страницу */}
				<link rel="canonical" href="https://veotronic.com" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com/404" />
				<meta property="og:title" content="404 — Page Not Found | Veotronic" />
				<meta property="og:description" content="The page you're looking for cannot be found. Return to the homepage to explore Veotronic's IT solutions and services." />
				<meta property="og:image" content="https://veotronic.com/og-image-404.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://veotronic.com/404" />
				<meta name="twitter:title" content="404 — Page Not Found | Veotronic" />
				<meta name="twitter:description" content="Page not found. Return to the Veotronic homepage." />
				<meta name="twitter:image" content="https://veotronic.com/og-image-404.jpg" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Oops! 404">
				<section className="pt-130 pb-130">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="erro-page">
									<div className="image-404">
										<img src="/assets/images/page/404.png" alt="404 - Page Not Found - Veotronic" />
									</div>
									<div className="erro-content center m0-auto">
										<h2 className="title mb-30">Oops! We Lost This Page</h2>
										<p className="des mb-30">It seems the page you're looking for took a wrong turn. Don't worry — our homepage is still here</p>
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