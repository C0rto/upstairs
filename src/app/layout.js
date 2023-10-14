import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/provider/ThemeProvider'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import AuthProvider from '@/provider/AuthProvider'

export const metadata = {
  title: 'Upstairs',
  description: 'A Blog about Movies by the man on the upstairs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
