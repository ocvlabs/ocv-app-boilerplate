import { Poppins, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { ContextManager } from '@/providers/ContextManager'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const roboto_mono = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const metadata = {
  title: 'LABS',
  description: 'Powered by OnChainVision',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto_mono.variable} bg-beige`}>
        <ContextManager>
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1 px-4 md:px-8">{children}</main>
            <Footer />
          </div>
        </ContextManager>
      </body>
    </html>
  )
}
