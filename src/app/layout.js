import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mis XV Maria Jose',
  description: 'Invitacion a mis XV Wouuuu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
