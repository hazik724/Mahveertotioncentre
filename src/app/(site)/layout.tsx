// app/(site)/layout.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">{children}</main>
      <Footer />
    </>
  )
}
