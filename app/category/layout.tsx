import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ingredient Savvy | Category',
  description: 'Discover categories',
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
