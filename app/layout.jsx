import '@styles/globals.css'
import Footer from '@components/Layout/Footer/Footer'
import Navbar from '@components/Layout/Navbar/Navbar'

export const metadata = {
  manifest: '/manifest.json',
  title: 'Lili Land La Marsa',
  description: 'Parc d\'attractions Lili Land à La Marsa',
  creator: "H&H corp",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: 'https://lililand.tn' ,
    title: 'Lili Land La Marsa',
    description: 'Parc d\'attractions pour enfants à La Marsa',
    siteName: 'Lili Land La Marsa',
    images: [
      {
        url: '/logofooter',
        width: 1200,
        height: 630,
        alt: 'Image du parc Lili Land La Marsa',
      },
    ],
  },


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logofooter.png" sizes='any'  />
      </head>
      <body>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
