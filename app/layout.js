// RootLayout.js
import localFont from 'next/font/local'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import ContactsBar from './components/ContactsBar/ContactsBar'
import Footer from './components/Footer/Footer' // Імпортуйте Footer
import CallUsModalWrapper from './components/CallUsModalWrapper/CallUsModalWrapper'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'Mykola',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="headerContainer">
          <ContactsBar />
          <Header />
        </div>
        <div className="container">{children}</div>
        <Footer /> {/* Додаємо Footer */}
        {/* Додаємо CallUsModalWrapper */}
        <CallUsModalWrapper />
      </body>
    </html>
  )
}
