// app/school/layout.tsx
import SchoolHeader from '@/components/SchoolHeader'
import SchoolFooter from '@/components/SchoolFooter'

export default function SchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchoolHeader />
      <main className="container mx-auto p-6">{children}</main>
      <SchoolFooter />
    </>
  )
}
