// app/page.js
'use client'
import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import AboutUs1 from "@/components/sections/AboutUs1"
import Blog1 from "@/components/sections/Blog1"
import CaseStudies1 from "@/components/sections/CaseStudies1"
import Contact1 from "@/components/sections/Contact1"
import Cta1 from "@/components/sections/Cta1"
import Feature1 from "@/components/sections/Feature1"
import Feature2 from "@/components/sections/Feature2"
import MainSlider1 from "@/components/sections/MainSlider1"
import MarqueText1 from "@/components/sections/MarqueText1"
import Partner1 from "@/components/sections/Partner1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function Home() {
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const search = searchParams.toString()
		if (search == '%5Bobject+Object%5D=') {
			router.replace('/')
		}
	}, [searchParams, router])

	return (
		<>
			<Head>
				{/* Основные мета-теги */}
				<title>Veotronic — IT Solutions for Business | Software Development & AI Automation</title>
				<meta name="description" content="Custom software development, AI business automation, unified API platforms. 10+ years of experience, 200+ projects delivered. Transform your business with Veotronic." />
				<meta name="keywords" content="software development, AI automation, business automation, API integration, custom software, web development, mobile apps, IT services, Veotronic" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Veotronic" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://veotronic.com" />
				<link rel="alternate" href="https://veotronic.com" hrefLang="x-default" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://veotronic.com" />
				<meta property="og:title" content="Veotronic — IT Solutions for Business | Software Development & AI Automation" />
				<meta property="og:description" content="Custom software development, AI business automation, unified API platforms. 10+ years of experience. Let's build your next project together." />
				<meta property="og:image" content="https://veotronic.com/og-image.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Veotronic" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://veotronic.com" />
				<meta name="twitter:title" content="Veotronic — IT Solutions for Business" />
				<meta name="twitter:description" content="Custom software development, AI automation, API platforms for your business. 10+ years of experience." />
				<meta name="twitter:image" content="https://veotronic.com/og-image.jpg" />
				
				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				
				{/* Дополнительные SEO теги */}
				<meta name="format-detection" content="telephone=no" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			
			<Layout headerStyle={1} footerStyle={1}>
				<MainSlider1 />
				<Partner1 />
				<AboutUs1 />
				<Service1 />
				<CaseStudies1 />
				<MarqueText1 />				
				<Feature1 />
				{/* <Feature2 /> */}
				<Team1 />
				{/* <Cta1 /> */}
				<Contact1 />
			</Layout>
		</>
	)
}
//Blog1 Testimonial1