import '@styles/globals.css'

export const metadata = {
  title: 'Interact Club Marsa Mind',
  description: 'Organisation à but non lucratifm parrainé par le club @rotarylamarsa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
