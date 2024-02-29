import '@styles/globals.css'
import Footer from '@components/Layout/Footer/Footer'
import Navbar from '@components/Layout/Navbar/Navbar'

export const metadata = {
  title: 'Lili Land La Marsa',
  description: 'Parc d\'attractions pour enfants à La Marsa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
