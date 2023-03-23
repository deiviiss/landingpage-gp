import Head from 'next/head'
import Image from 'next/image'

import Carousel from 'src/components/Carousel'
import { ChevronRight } from 'react-feather'
import Link from 'next/link'
import Accordion from 'src/components/Acordion'

// const demoVideo = 'carousel/dubai-31956.mp4'

const slides = [
  {
    id: 1,
    url: '/carousel/1.png'
  },
  {
    id: 2,
    url: '/carousel/2.png'
  },
  {
    id: 3,
    url: '/carousel/3.png'
  },
  {
    id: 4,
    url: '/carousel/4.png'
  }
]

const items = [
  {
    id: 1,
    title: 'Visión y Plan de Expansión',
    content:
      'Nuestro objetivo a largo plazo es seguir creciendo y expandiendo nuestra presencia en el mercado de gestión de trámites y beneficios gubernamentales, ofreciendo nuestros servicios a más personas en situación de necesidad. Además, seguiremos mejorando y actualizando nuestros servicios y procesos para ofrecer siempre el mejor servicio a nuestros clientes.'
  },
  {
    id: 2,
    title: 'Cultura de la empresa',
    content:
      'En GP valoramos el compromiso con nuestros clientes, la transparencia en nuestros procesos y la integridad en nuestras prácticas de trabajo. Fomentamos un ambiente de trabajo colaborativo, donde la empatía y la honestidad son fundamentales en nuestras relaciones internas y con nuestros clientes.'
  },
  {
    id: 3,
    title: 'Logros y premios',
    content:
      'Nuestros principales logros incluyen haber ayudado a cientos de personas en situación de necesidad a obtener los beneficios y recursos que les corresponden, así como haber establecido relaciones sólidas y duraderas con nuestros clientes.'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Gestoría Peninsular</title>
        <meta name='description' content='Gestoría Peninsular es una empresa especializada en brindar servicios de asesoramiento y trámites de pensión y retiro por desempleo. ¡Haz una cita con nosotros y simplifica tus trámites!' />
        <meta name='keywords' content='gestoría, pensión, retiro por desempleo, trámites, asesoramiento' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <div id='header' className='max-w-screen flex items-center justify-center flex-col border-b-2 border-slate-200'>

        <Carousel autoSlide autoSlideinterval={4000}>
          {[
            ...slides.map((slide) => (
              <Image className='min-w-full max-w-screen max-h-[800px]  object-cover' width={1240} height={800} key={slide.id} src={slide.url} alt='image-carousel' />
            ))
            // <video className='min-h-[500px] max-h-[597px] min-w-full object-cover' key={5} src={demoVideo} autoPlay muted loop />
          ]}
        </Carousel>

        {/* INTRO */}
        <div className='w-full  bg-white text-center sm:max-w-[1200px]'>

          <div id='intro' className='px-3 sm:flex py-24'>
            {/* <div className='pt-9 sm:ml-72' /> */}
            <div className='sm:ml-10 text-left sm:pr-44'>
              <p className='text-primary font-bold text-xs py-3'>INTRO</p>
              <h1 className='text-4xl mb-8 pr-10 font-bold uppercase text-black'>Quiénes somos</h1>

              <p className='px-1'>Gestoría Peninsular es una empresa dedicada a brindar servicios de asesoría y gestión en trámites de apoyo por desempleo, pensiones, negativas y recuperación de saldos. Nuestros fundadores, con amplia experiencia en el sector, establecieron la empresa con la misión de ayudar a las personas en situación de necesidad a obtener los beneficios y recursos que les corresponden.</p>

              <div className='flex uppercase text-xs text-primary font-bold pl-24 sm:pl-1 pt-3 items-center hover:underline hover:underline-offset-2'>
                <Link href='/about'>Saber más</Link>
                <ChevronRight className='ml-4' />
              </div>
            </div>
          </div>

          {/* PROMOCIONAL */}
          <div className='grid sm:grid-cols-2 justify-center items-center'>
            {/* col 1 */}
            <div className='relative'>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/why1.png' alt='image-why1' />
              <div className='absolute bottom-6 right-0 left-0 text-left pl-4 text-white uppercase bg-primary bg-opacity-70'>
                <h1 className='mt-4 mb-4 text-sm'>¿Sabes en qué afore te encuentras?</h1>
                <h2 className='mt-4 mb-4 text-xl font-semibold'>Nosotros te ayudamos a saberlo</h2>
                <div className='flex text-xs items-center hover:underline hover:underline-offset-2'>
                  <Link className='text-sm' href='/blog#afore'>Saber más</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>
            </div>

            {/* col 2 */}
            <div className='relative'>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/why2.png' alt='image-why1' />
              <div className='absolute bottom-6 right-0 left-0 text-left pl-4 text-white uppercase bg-primary bg-opacity-70'>
                <h1 className='mt-4 mb-4 text-sm'>Preparar tu futuro</h1>
                <h2 className='mt-4 mb-4 text-xl font-semibold'>Conoce la importancia ahora</h2>
                <div className='flex text-xs w-2/3 items-center hover:underline hover:underline-offset-2'>
                  <Link className='text-sm' href='/blog#planear-retiro'>Saber más</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GOALS */}
        <div className='flex w-full pt-16 md:pt-20 md:mt-14' id='metas'>
          <div className='w-full sm:w-1/2 min-h-[550px] max-h-[1440px] bg-acordion bg-no-repeat bg-cover hidden md:block' />
          <div className='flex flex-col sm:w-1/2 my-12 justify-center sm:ml-20'>
            <h2 className='text-3xl mb-8 font-bold uppercase text-slate-700 ml-10'>Metas y Valores</h2>
            <Accordion
              items={items}
            />
          </div>
        </div>

        {/* SERVICES */}
        <div className='w-full z-10 bg-white text-center  sm:max-w-[1200px] sm:mb-6'>
          <div id='services' className='px-3 md:flex md:flex-col py-24'>

            <div className='sm:ml-10 text-left sm:pr-44'>
              <p className='text-primary font-bold text-xs py-3'>SERVICIOS</p>
              <h1 className='text-4xl mb-8 font-bold uppercase text-black'>Qué hacemos</h1>

              <p className='text-justify'>Ofrecemos una amplia variedad de servicios de asesoría y gestión, tales como la gestión de trámites y solicitud de beneficios por desempleo, asesoría y gestión en la obtención de pensiones y jubilaciones, apoyo en la obtención de negativas y en la recuperación de saldos. Todos nuestros servicios son realizados por profesionales altamente calificados y con experiencia en la gestión de trámites y beneficios gubernamentales, garantizando un servicio de alta calidad y cumplimiento con los estándares de seguridad y normativas aplicables.</p>
            </div>

            <div className='grid text-left sm:grid-cols-3 mx-6 pt-12 gap-14'>
              <div className='px-2 pt-3 pb-3 mb-8'>
                <div className='flex flex-col items-center'>
                  <Image className='min-h-[31px] max-h-[31px] min-w-[31px] max-w-[31px]' width={31} height={31} src='/icons/descargas-icon.png' alt='image-descargas-icon' />
                  <h1 className='uppercase font-medium pt-2 pb-6'>Desempleo</h1>
                </div>
                <p className='pb-3 text-justify'>Es una prestación que te ofrece la AFORE cuando no estás cotizando al IMSS y te permite hacer un retiro parcial de los recursos que tienes para tu retiro.</p>
                <div className='flex justify-center text-xs text-primary items-center hover:underline hover:underline-offset-2'>
                  <Link className='uppercase text-sm font-semibold' href='/tramites#desempleo'>Ir a desempleo</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>

              <div className='px-2 pt-3 pb-3 mb-8'>
                <div className='flex flex-col items-center'>
                  <Image className='min-h-[31px] max-h-[31px] min-w-[31px] max-w-[31px]' width={31} height={31} src='/icons/preguntas-icon.png' alt='image-preguntas-icon' />
                  <h1 className='uppercase font-medium pt-2 pb-6'>Pensiones</h1>
                </div>
                <p className='pb-3 text-justify'>Es un pago que se da a quienes cumplen edad, semanas y ley. Puede ser por cesantía (60) o vejez (65) en el IMSS, o universal para mayores (68 o 65 indígenas) en el gobierno.</p>
                <div className='flex justify-center text-xs text-primary items-center hover:underline hover:underline-offset-2'>
                  <Link className='uppercase text-sm font-semibold' href='/tramites#pensiones'>Ir a pensiones</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>

              <div className='px-2 pt-3 pb-3 mb-8'>
                <div className='flex flex-col items-center'>
                  <Image className='min-h-[31px] max-h-[31px] min-w-[31px] max-w-[31px]' width={31} height={31} src='/icons/folder-icon.png' alt='image-folder-icon' />
                  <h1 className='uppercase font-medium pt-2 pb-6'>Negativas</h1>
                </div>
                <p className='pb-3 text-justify'>Es un documento que se emite cuando no cumples con los requisitos para obtener una pensión del IMSS y quieres hacer un retiro total de tu cuenta individual.</p>
                <div className='flex justify-center text-xs text-primary items-center hover:underline hover:underline-offset-2'>
                  <Link className='uppercase text-sm font-semibold' href='/tramites#negativa'>Ir a negativa</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
