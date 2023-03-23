import Link from 'next/link'
import Image from 'next/image'
export default function Navigation() {
  const navigations = [
    { id: 1, label: 'Afore Profuturo', href: '/', current: true },
    { id: 2, label: '¿Por qué Profuturo?', href: '/', current: false },
    { id: 3, label: 'Calcula', href: '/', current: false },
    { id: 4, label: 'Productos', href: '/', current: false },
    { id: 5, label: 'Blog', href: '/', current: false }
  ]

  return (
    <nav className='hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 justify-center items-center shadow z-10 text-sm'>
      <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
        <Link className='py-1' href='/'>
          {/* <h1 className='text-2xl font-bold'>Gestoría Peninsular</h1> */}
          <Image className='min-h-[20px] max-h-[65px] min-w-screen object-cover' width={250} height={20} src='/header-logo.png' alt='logo-gp' />
        </Link>
      </div>

      <div className='flex justify-between items-center uppercase'>
        <ul className='flex justify-between px-2 items-center'>
          {navigations.map((nav) => (
            <li key={nav.id} className='font-normal p-2 border-l-2 border-l-slate-200 border-r-slate-200 h-14 flex items-center'>
              <Link
                href={nav.href} className='text-slate-900 hover:text-primary'
              >
                {nav.label}
              </Link>
            </li>
          ))}
          <li className='text-primary font-normal p-2 border-r-2 border-l-2 border-l-slate-200 border-r-slate-200 h-14 flex items-center hover:bg-primary hover:text-white'>
            <Link className='px-2' href='/'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
