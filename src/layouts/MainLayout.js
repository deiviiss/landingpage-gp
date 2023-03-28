import Footer from '../components/Footer'
import Navbar from 'src/components/Navbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className='mt-24'>
        {children}
      </main>
      <Footer />
    </>
  )
}
