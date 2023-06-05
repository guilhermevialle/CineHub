import MobileNavbar from '@/components/navbar/MobileNavbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CineHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.cdnfonts.com/css/circular-std?styles=17909,17910,17911,17912,17907,17908,17905,17906'
          rel='stylesheet'
        />
      </head>
      <body className={inter.className}>
        {children}
        <MobileNavbar />
      </body>
    </html>
  )
}
