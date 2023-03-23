import Link from 'next/link'
import Header from 'src/components/Header'

export default function Privacy() {
  return (
    <>
      <Header title='Política de privacidad' />

      <div className='text-lg text-slate-600 tracking-wide mb-20'>
        <div className='max-w-[920px] mx-auto mb-5 pb-10'>

          <div className='bg-slate-50 m-4 mb-12 p-8 text-justify'>
            <p>En Gestoría Peninsular, respetamos su privacidad y entendemos la importancia de proteger sus datos personales. Por ello, queremos informarle de cómo recogemos y utilizamos sus datos de contacto a través de nuestra página web.</p>
          </div>

          <div className='px-3'>
            <h2 className='text-slate-700 text-3xl font-bold py-4'>1. Información que recogemos</h2>
            <p className='pb-4'>Recogemos su nombre, teléfono celular y dirección de correo electrónico a través de nuestro formulario de contacto en la página web.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>2. Cómo utilizamos su información</h2>
            <p className='pb-4'>Utilizamos su información únicamente para ponerse en contacto con usted en relación con los servicios que ofrecemos. No compartiremos su información con terceros.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>3. Protección de su información</h2>
            <p className='pb-4'>Tomamos medidas de seguridad para proteger su información de accesos no autorizados y para garantizar su confidencialidad.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>4. Cambios en esta política de privacidad</h2>
            <p className='pb-4'>Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Si realizamos cambios significativos, publicaremos un aviso en nuestra página web para informarle de los cambios y de cómo afectarán a su información.</p>

            <p>Si tiene alguna pregunta sobre esta política de privacidad o sobre cómo manejamos su información, no dude en ponerse en contacto con nosotros a través de nuestro formulario de contacto.</p>

          </div>

          <div className='mt-16 text-center'>
            <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
          </div>
        </div>
      </div>
    </>
  )
}
