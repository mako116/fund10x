import { Inter } from 'next/font/google'
import './globals.css'
import Heads from '@/components/header/Heads'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fund10X',
  description: 'startup dream to life by matching your startup with the right investors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Heads/>
      {children}
      </body>
      
      </html>
  )
}
