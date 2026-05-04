import "/public/assets/css/app.css"
import "/public/assets/css/textanimation.css"

import { Nunito } from 'next/font/google'

const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--nunito-font-family",
    display: 'swap',
})
// app/layout.js

export const metadata = {
    title: {
        default: 'Veotronic — IT Solutions for Business | Software Development, AI Automation',
        template: '%s | Veotronic'
    },
    description: 'Custom software development, AI business automation, unified API platforms. 10+ years of experience, 200+ projects delivered.',
    keywords: 'software development, IT services, AI automation, business automation, API integration, web development, mobile apps',
    authors: [{ name: 'Veotronic' }],
    creator: 'Veotronic',
    publisher: 'Veotronic',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: 'Veotronic — IT Solutions for Business',
        description: 'Custom software development, AI automation, API platforms for your business',
        url: 'https://veotronic.com',
        siteName: 'Veotronic',
        images: [
            {
                url: 'https://veotronic.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Veotronic',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Veotronic — IT Solutions for Business',
        description: 'Custom software development, AI automation, API platforms',
        images: ['https://veotronic.com/og-image.jpg'],
    },
    viewport: 'width=device-width, initial-scale=1',
    verification: {
        google: 'ваш-google-verification-код', // добавите позже в Search Console
    },
    alternates: {
        canonical: 'https://veotronic.com',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${nunito.variable} body header-fixed`}>{children}</body>
        </html>
    )
}

