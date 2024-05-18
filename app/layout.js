
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import ToastProvider from '../components/tosat-provider'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitness School ',
  description: 'Fitness School',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastProvider/>
    <NavBar/>

        {children}
        <Footer/>
        </body>
    </html>
  )
}
