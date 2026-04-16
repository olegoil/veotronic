import "/public/assets/css/app.css"
import "/public/assets/css/textanimation.css"

import { Nunito } from 'next/font/google'

const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--nunito-font-family",
    display: 'swap',
})
export const metadata = {
    title: 'Veotronic - Digital solutions',
    description: 'Automate your company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${nunito.variable} body header-fixed`}>{children}</body>
        </html>
    )
}
