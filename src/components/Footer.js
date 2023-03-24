import Link from 'next/link'

import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <>
      <footer className='py-24 bg-primary text-white text-center'>
        <div className='max-w-[1140px] mx-auto px-2'>
          <div className='grid sm:grid-cols-3 text-sm'>
            <div className='md:mx-10'>
              <h6 className='text-base font-bold pb-3'>Acerca de</h6>
              <p className=''>Página web de Gestoría Peninsular, líder en servicios de tramitación de apoyo por desempleo, negativas y pensiones en el estado de Campeche.
              </p>
            </div>
            <div className='md:mx-10 py-4'>
              <h6 className='text-base font-bold pb-3'>Enlaces</h6>
              <ul className='pb-6'>
                <li>Importante: <Link href='/terms'>Términos y condiciones</Link>,  <Link href='/privacy'>Política de privacidad </Link>
                </li>
                <li>Menu: <Link href='/'>Inicio</Link>, <Link href='/#services'>Servicios</Link>, <Link href='/#metas'>Metas</Link>, <Link href='/contact'>Contacto</Link>
                </li>
              </ul>
            </div>
            <div className='sm:text-right text-center'>

              <div className='flex justify-center py-2 sm:justify-end gap-4'>
                <Link href='https://www.facebook.com/GestoriaPeninsularMx' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} className='fa-stack-1x w-8 h-8' />
                </Link>

                <Link href='https://www.facebook.com/GestoriaPeninsularMx' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faTwitter} className='fa-stack-1x w-8 h-8' />
                </Link>
              </div>

              <p className='py-3'><Link href='mailto:gestoriapeninsularcampeche@gmail.com'><strong>gestoriapeninsularcampeche@gmail.com</strong></Link>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className='pb-6 bg-primary text-center text-white'>
        <div className=''>
          <div className=''>
            <div className=''>
              <p className=''>Copyright © Gestoría Peninsular</p>
              <Link href='https://app-gestoria.herokuapp.com/' target='_blank' className='hover:underline' rel='noreferrer'>iniciar sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
