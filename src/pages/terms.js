import Link from 'next/link'
import Header from 'src/components/Header'

export default function Terms() {
  return (
    <>
      <Header title='Términos y Condiciones' />

      <div className='text-lg text-slate-600 tracking-wide mb-20'>
        <div className='max-w-[920px] mx-auto  mb-5 pb-10'>
          <div className='bg-slate-50 m-4 mb-12 p-8 text-justify'>
            <p>Bienvenido a nuestra página web. al utilizar el formulario de contacto de nuestra página
              web, usted acepta y está de acuerdo con los siguientes términos y condiciones de uso. Si no está de
              acuerdo con estos términos, no utilice el formulario de contacto de nuestra página web.
            </p>
          </div>

          <div className='px-3'>
            <h2 className='text-slate-700 text-3xl font-bold py-4'>1. Propiedad intelectual</h2>
            <p className='pb-4'>Todos los contenidos de nuestra página web, incluyendo textos, imágenes, gráficos, logotipos, iconos,
              fotografías y software, son propiedad de Gestoría Peninsular o de sus licenciantes y están
              protegidos
              por leyes de propiedad intelectual.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>2. Uso de nuestra página web</h2>
            <p className='pb-4'>Nuestra página web está disponible únicamente para uso personal y no comercial. No puede modificar,
              reproducir, distribuir, transmitir, publicar, vender, licenciar ni utilizar de ninguna otra forma los
              contenidos de nuestra página web sin nuestro consentimiento previo por escrito.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>3. Exclusión de garantías</h2>
            <p className='pb-4'>Nuestra página web se proporciona "tal cual" y sin garantías de ningún tipo, ya sean expresas
              o implícitas. No garantizamos que nuestra página web esté libre de errores ni que su uso sea ininterrumpido.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>4. Limitación de responsabilidad</h2>
            <p className='pb-4'>En ningún caso Gestoría Peninsular será responsable de daños indirectos, especiales,
              consecuentes o punitivos que resulten del uso de nuestra página web.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>5. Modificaciones de los términos y condiciones</h2>
            <p className='pb-4'>Nos reservamos el derecho a modificar estos términos y condiciones de uso en cualquier
              momento. Al utilizar nuestra página web después de realizar cambios en estos términos, usted acepta quedar
              vinculado por los términos modificados.
            </p>

            <h2 className='text-slate-700 text-3xl font-bold py-4'>6. Ley aplicable</h2>
            <p className='pb-4'>Este contrato se regirá e interpretará de acuerdo con las leyes del Estado de Quintana Roo,
              México. Cualquier disputa que surja en relación con este contrato será resuelta exclusivamente por los
              tribunales del Estado de Campeche, México.
            </p>

          </div>
          <div className='mt-16 text-center'>
            <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
          </div>
        </div>
      </div>
    </>
  )
}
