import './globals.css'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col bg-white text-gray-800">
    <Navbar />
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <Footer />
    </body>
    </html>
  )
}
