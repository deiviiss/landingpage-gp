import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronRight, Menu } from 'react-feather'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.asPath])

  const navigations = [
    { id: 1, label: 'Quiénes somos', href: '', current: true, submenu: [{ id: 1, label: 'Intro', href: '/#intro' }, { id: 2, label: 'Valores', href: '/#metas' }, { id: 3, label: 'Contáctanos', href: '/contact' }] },
    { id: 2, label: 'Qué hacemos', href: '/', current: false, submenu: [{ id: 1, label: 'Trámites', href: '/#services' }] },
    { id: 3, label: 'Nuestro equipo', href: '/', current: false, submenu: [{ id: 1, label: 'Únete', href: 'contact' }, { id: 2, label: 'Sucursales', href: '/about#sucursales' }] }
  ]

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full h-24 px-3 ${scrolled ? 'bg-white' : 'bg-white'
      } transition-colors duration-300 ease-in-out border-b-1 shadow-md`}
    >
      <div className='mx-auto flex justify-between items-center max-w-[1170px] h-full'>
        <Link href='/'>
          <Image width={200} height={15} src='/header-logo.png' alt='logo-gp' className='sm:min-w-[260px]' />
        </Link>

        <button type='button' onClick={() => setMenuOpen(!menuOpen)} className='md:hidden px-3'>
          <Menu />
          <span />
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} text-sm font-semibold absolute right-1 top-20 md:static md:block md:border-0 md:shadow-none md:bg-transparent md:pb-0 bg-white border rounded-md shadow-md px-4 pb-4`}>
          <ul className='md:flex gap-1'>
            {navigations.map((nav) => (
              <li className='flex items-center group relative' key={nav.id}>
                <p className='mx-1 my-4 block'>{nav.label}</p>
                {nav.submenu && nav.submenu.length > 0 && (
                  <ChevronRight className='transform transition duration-300 group-hover:rotate-90 w-4 h-4' />
                )}
                {nav.submenu && nav.submenu.length > 0 && (
                  <div className='hidden group-hover:block absolute top-10 left-0 z-10'>
                    <ul className='bg-white border rounded-md shadow-md py-1 px-4'>
                      {nav.submenu.map((submenuItem) => (
                        <li className='p-2 hover:underline' key={submenuItem.id}><Link href={submenuItem.href}>{submenuItem.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <div className='flex items-center gap-4 mt-2 px-1 md:mt-0'>
              <Link href='https://www.facebook.com/GestoriaPeninsularMx' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faFacebook} className='fa-stack-1x w-5 h-5 text-primary hover:text-secondary' />
              </Link>

              {/* <Link href='https://www.facebook.com/GestoriaPeninsularMx'>
                <FontAwesomeIcon icon={faTwitter} className='fa-stack-1x w-5 h-5 text-primary hover:text-secondary' />
              </Link> */}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
