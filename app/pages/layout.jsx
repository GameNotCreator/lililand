import Footer from '@components/Layout/Footer/Footer'
import Navbar from '@components/Layout/Navbar/Navbar'
import '@styles/globals.css'

export const metadata = {
  title: 'Interact Club Marsa Mind',
  description: 'Organisation à but non lucratifm parrainé par le club @rotarylamarsa',
}

export default function Layout({ children }) {
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