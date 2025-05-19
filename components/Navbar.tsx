'use client'
import Link from 'next/link'

export const Navbar = () => (
  <nav className="shadow-md">
    <div className="container mx-auto flex justify-between p-4">
      <Link href="/" className="font-bold text-xl">Dev</Link>
      <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  </nav>
)
