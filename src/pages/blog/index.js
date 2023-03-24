import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from 'src/components/Header'

export default function Blog() {
  return (
    <div>
      <Header title='Blog' />

      <div className='text-lg text-slate-600 tracking-wide'>
        <div className='max-w-[920px] mx-auto  mb-5 pb-10'>

          {/* planear futuro */}
          <div className='text-justify'>
            <div id='planear-retiro' className='grid sm:grid-cols-2 items-center gap-8 pt-24'>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/preparar-futuro.png' alt='preparar-futuro' />
              <div className='flex flex-col px-3'>
                <h2 className='text-slate-700 text-3xl font-bold py-4 text-center'>La importancia de planear el retiro</h2>
                <p className='text-base py-2'> Planear el retiro es una parte importante de la vida financiera de cualquier persona. A medida que envejecemos, nuestras necesidades y gastos cambian y es importante tener un plan para asegurarnos de que podamos vivir cómodamente durante nuestros años dorados.</p>
                <p className='text-base py-2'>Una de las principales razones por las que es importante planear el retiro es para tener seguridad financiera. Al ahorrar e invertir para el futuro, podemos asegurarnos de tener suficiente dinero para cubrir nuestros gastos básicos y disfrutar de la vida durante la vejez. Además, al tener un plan sólido para el retiro, podemos evitar depender completamente del gobierno o de nuestra familia para nuestro sustento.</p>

              </div>
            </div>

            <div className='flex flex-col px-3'>

              <p className='text-base py-2'>Otra razón por la que es importante planear el retiro es para tener tranquilidad. Saber que tenemos un plan en marcha y que estamos trabajando hacia nuestras metas financieras puede reducir el estrés y la ansiedad asociados con el futuro. Además, al tener un plan sólido para el retiro, podemos tomar decisiones informadas sobre cómo gastar nuestro dinero y cómo invertirlo.</p>

              <p className='text-base py-2'>En Gestoria Peninsular ofrecemos servicios para ayudar a las personas a planificar su retiro. Nuestros expertos pueden brindar asesoramiento sobre cómo ahorrar e invertir para el futuro y cómo maximizar sus beneficios de pensión. Si estás interesado en aprender más sobre cómo podemos ayudarte a planificar tu retiro, no dudes en contactarnos.</p>

              <p className='text-base py-2'>En resumen, planear el retiro es una parte importante de nuestra vida financiera. Al tener un plan sólido en marcha, podemos asegurarnos de tener seguridad financiera y tranquilidad durante nuestros años dorados.</p>

              <h2 className='pt-10 text-center font-bold text-2xl'>¿Te gustaría saber más sobre cómo Gestoria Peninsular puede ayudarte a planificar tu retiro?</h2>
              <div className=' flex justify-center mt-16'>
                <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
              </div>
            </div>
          </div>

          {/* conocer tu afore */}
          <div className='text-justify'>
            <div id='afore' className='grid sm:grid-cols-2 items-center gap-8 pt-24'>
              <div className='flex flex-col px-3'>
                <h2 className='text-slate-700 text-3xl font-bold py-4 text-center'>La importancia de conocer tu AFORE</h2>
                <p className='text-base py-2'>En México, el AFORE (Administradora de Fondos para el Retiro) es una institución financiera encargada de administrar los ahorros para el retiro de los trabajadores. Si eres un trabajador en México, es importante que conozcas tu AFORE y entiendas cómo funciona.</p>
                <p className='text-base py-2'>Una de las principales razones por las que es importante conocer tu AFORE es para asegurarte de que estás ahorrando suficiente dinero para tu retiro. Al conocer tu AFORE, puedes verificar cuánto dinero tienes ahorrado y si estás en el camino correcto para alcanzar tus metas financieras para el retiro.</p>

              </div>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/afore.png' alt='afore' />
            </div>

            <div className='flex flex-col px-3'>

              <p className='text-base py-2'>Otra razón por la que es importante conocer tu AFORE es para tomar decisiones informadas sobre cómo invertir tus ahorros. Los AFORES ofrecen diferentes opciones de inversión y es importante elegir la opción que mejor se adapte a tus necesidades y metas financieras. Al conocer tu AFORE, puedes comparar las diferentes opciones y tomar una decisión informada.</p>

              <p className='text-base py-2'>Además, al conocer tu AFORE también puedes verificar si estás recibiendo todos los beneficios a los que tienes derecho. Por ejemplo, algunos empleadores hacen contribuciones a los ahorros para el retiro de sus empleados y es importante verificar si estás recibiendo estas contribuciones.</p>

              <p className='text-base py-2'>En resumen, conocer tu AFORE en México es importante para asegurarte de que estás ahorrando suficiente dinero para el retiro y tomando decisiones informadas sobre cómo invertir tus ahorros. Si no conoces tu AFORE o tienes preguntas sobre cómo funciona, no dudes en buscar ayuda profesional.</p>

              <h2 className='pt-10 text-center font-bold text-2xl'>¿Te gustaría saber más sobre cómo encontrar y entender tu AFORE?</h2>
              <div className=' flex justify-center mt-16'>
                <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
