import Image from 'next/image'
import Link from 'next/link'
import Header from 'src/components/Header'

export default function Tramites() {
  return (
    <>
      <Header title='Trámites' />

      <div className='text-lg text-slate-600 tracking-wide'>
        <div className='max-w-[920px] mx-auto mb-5 pb-10'>
          <div className='bg-slate-50 m-4 mb-0 pb-0 p-8 text-justify'>
            <p>Aquí encontrará información sobre los trámites de apoyo por desempleo, pensiones y negativas de pensión en México. Aprenda cómo solicitar apoyo por desempleo, cómo solicitar una pensión y cómo obtener una negativa de pensión. También encontrará información sobre los requisitos y documentos necesarios para cada trámite. ¡Comience su proceso de solicitud hoy mismo!</p>
          </div>

          {/* DESEMPLEO */}
          <div className='text-justify'>
            <div id='desempleo' className='grid sm:grid-cols-2 items-center gap-8 pt-20'>
              <div className='flex flex-col py-2 px-3'>
                <h2 className='text-center text-slate-700 text-3xl font-bold py-4'>Apoyo por desempleo</h2>
                <p className='text-base'>El trámite de apoyo por desempleo es un beneficio que tienen los trabajadores que cotizan al Instituto Mexicano del Seguro Social (IMSS) y que se encuentran sin empleo formal. Esto significa que no están recibiendo un salario ni aportando al sistema de seguridad social. El beneficio consiste en retirar una parte del saldo acumulado en su cuenta individual de Afore, que se destina a su ahorro para el retiro. La Afore es la Administradora de Fondos para el Retiro, una entidad financiera que administra los recursos de los trabajadores afiliados al IMSS o al ISSSTE (Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado). El ahorro para el retiro es el dinero que se acumula en la cuenta individual durante la vida laboral del trabajador y que se utiliza para obtener una pensión al momento de dejar de trabajar.</p>

              </div>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/desempleo.png.webp' alt='desempleo' />
            </div>

            <div className='flex flex-col py-12 px-3'>
              <h2 className='text-center text-2xl font-bold text-slate-700 py-4'>Requisitos para solicitar tu apoyo de desempleo</h2>
              <p className='text-base'>Para acceder al retiro parcial por desempleo, debe reunir los requisitos que señala la Ley del Seguro Social en México para los ex trabajadores formales que necesitan esta ayuda.</p>

              <ul className='flex flex-col gap-2 list-disc pl-10 text-base'> <li className='mt-3'>Encontrarse desempleado como mínimo durante 46 días.</li> <li>Haber estado registrado en una AFORE al menos durante 3 años.</li> <li>No haber ejercido el derecho de retiro parcial en los últimos 5 años.</li> <li>Poseer un Expediente de Identificación del Trabajador actualizado.</li> <li>Constar con un Enrolamiento Biométrico generado por la AFORE.</li> <li>Tener tres años con una cuenta individual abierta y 12 bimestres de cotización en la misma, cuando se opta por la Modalidad A de retiro.</li> <li>Acreditar 5 años o más de estar cotizando a una cuenta individual aperturada a su nombre, para solicitar la Modalidad B.</li> </ul>

              <p className='text-base pt-6'>Gestoría Peninsular te ayuda si estás desempleado. Te orientamos, gestionamos y seguimos tu solicitud de retiro parcial por desempleo. Te asesoramos para que administres tus ahorros y tu retiro.</p>
              <div className=' flex justify-center mt-16'>
                <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
              </div>
            </div>
          </div>

          {/* PENSIONES */}
          <div className='text-justify'>
            <div id='pensiones' className='grid sm:grid-cols-2 items-center gap-8 pt-20'>

              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/pensiones.webp' alt='pensiones' />
              <div className='flex flex-col py-2 px-3'>
                <h2 className='text-center text-slate-700 text-3xl font-bold py-4'>Pensiones</h2>
                <p className='text-base'>El trámite de pensión es el proceso que se realiza para obtener un ingreso mensual por parte de una institución de seguridad social, cuando se cumple con ciertos requisitos de edad y cotización. Existen diferentes tipos de pensión, como la de jubilación, la de cesantía en edad avanzada o la de vejez. Cada tipo de pensión tiene sus propios requisitos y procedimientos, que pueden variar según la ley del seguro social que corresponda al trabajador. Es importante acudir a la institución que otorga la pensión o a la AFORE para recibir orientación y asesoría sobre el trámite más adecuado para cada caso.</p>

              </div>

            </div>

            <div className='flex flex-col py-12 px-3'>
              <h2 className='text-center text-2xl font-bold text-slate-700 py-4'>Requisitos para solicitar tu pensión</h2>
              <p className='text-base'>Los requisitos para tramitar la pensión pueden variar según el tipo de pensión y la ley del seguro social que te corresponda. Sin embargo, algunos requisitos generales son:</p>

              <ul className='flex flex-col gap-2 list-disc pl-10 text-base'> <li className='mt-3'>Tener la edad mínima requerida, que puede ser 60 años para la pensión de cesantía en edad avanzada o 65 años para la pensión de vejez</li> <li>Haber estado registrado en una AFORE al menos durante 3 años.</li> <li>Haber cotizado el número mínimo de semanas, que puede ser 500 o 1000 según el régimen de pensión.</li> <li>Haber causado baja en el régimen obligatorio del seguro social y no tener un trabajo remunerado.</li> <li>Presentar una solicitud de pensión en el formato autorizado por el instituto que otorga la pensión.</li> <li>Presentar RFC con homoclave y número de cuenta bancaria.</li></ul>

              <p className='text-base pt-6'>En Gestoría Peninsular te orientamos, gestionamos y seguimos tu solicitud de pensión. Te asesoramos para que administres tus ahorros y tu retiro.</p>
              <div className=' flex justify-center mt-16'>
                <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
              </div>
            </div>
          </div>

          {/* NEGATIVAS */}
          <div className='text-justify'>
            <div id='negativa' className='grid sm:grid-cols-2 items-center gap-8 pt-20'>
              <div className='flex flex-col py-2 px-3'>
                <h2 className='text-slate-700 text-3xl font-bold py-4 text-center'>Negativa de pensión</h2>
                <p className='text-base'>El trámite de negativa de pensión es el proceso que se realiza para obtener la entrega de los recursos de la cuenta individual, cuando no se cumple con los requisitos mínimos que establece la ley del seguro social para pensionarse12. Este trámite puede aplicar para los trabajadores que cotizan bajo el régimen de la ley 73 o la ley 97 del IMSS, o bajo la ley del ISSSTE. Es importante acudir a la AFORE o al instituto que otorga la pensión para recibir orientación y asesoría sobre el trámite más adecuado para cada caso.</p>

              </div>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/negativa.jpg' alt='negativa' />
            </div>

            <div className='flex flex-col py-12 px-2'>
              <h2 className='text-center text-2xl font-bold text-slate-700 py-4'>Requisitos para solicitar tu negativa de pensión</h2>
              <p className='text-base'>Es posible que se requieran otros documentos según el caso, por lo que se recomienda consultar con la AFORE o el instituto que otorga la pensión antes de iniciar el trámite. Los requisitos para el trámite de negativa de pensión son:</p>

              <ul className='flex flex-col gap-2 list-disc pl-10 text-base'> <li className='mt-3'>Solicitud de disposición de recursos, debidamente llenada y firmada.</li> <li>Resolución o constancia de negativa de pensión .</li> <li>Identificación oficial vigente, que puede ser credencial para votar, pasaporte, cédula profesional, cartilla militar, documento migratorio o matrícula consular .</li> <li>Comprobante de domicilio con vigencia no mayor a 3 meses .</li> <li>Estado de cuenta bancario a nombre del trabajador con cuenta CLABE .</li>  </ul>

              <p className='text-base pt-6'>En Gestoría Peninsular te orientamos, gestionamos y seguimos tu solicitud de negativa de pensión. Te asesoramos para que administres tus ahorros y tu retiro.</p>
              <div className=' flex justify-center mt-16'>
                <Link className='py-5 px-12 text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800' href='/contact'>Contáctanos</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
