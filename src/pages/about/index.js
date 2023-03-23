import Image from 'next/image'
import Header from 'src/components/Header'

export default function About() {
  return (
    <>
      <Header title='Gestoria Peninsular: una historia de éxito en la gestión de trámites' />

      <div className='text-lg text-slate-600 tracking-wide'>
        <div className='max-w-[920px] mx-auto mb-5 pb-10'>
          <div className='bg-slate-50 m-4 mb-0 pb-0 p-8 text-justify'>
            <p>¿Sabías que en México hay más de 2 millones de personas que reciben algún tipo de apoyo por desempleo, negativa de pensión o pensión? Estos trámites pueden ser complicados y requieren de un conocimiento especializado para evitar errores y retrasos
            </p>
          </div>

          <div className='text-justify'>
            <div className='grid sm:grid-cols-2 items-center gap-8 pt-16'>
              <div className='flex flex-col py-2 px-3'>
                <h2 className='text-slate-700 text-3xl font-bold py-4 text-left'>Por eso, en Gestoria Peninsular</h2>
                <p className='text-base'>Nos dedicamos a ofrecer un servicio integral y personalizado para ayudar a nuestros clientes a obtener los beneficios que les corresponden por ley. Somos una empresa fundada en 2018 por nuestro director general, Héctor Zuluaga, quien tiene más de 10 años de experiencia en el sector.</p>
                <p className='text-base'>
                  Desde entonces, hemos logrado ayudar a más de 7000 personas a resolver sus trámites con éxito y satisfacción. Contamos con un equipo de profesionales capacitados y comprometidos con nuestra misión: facilitar la vida de nuestros clientes y defender sus derechos.
                </p>
              </div>
              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/why2.png' alt='image-why1' />
            </div>

            <div className='flex flex-col py-12 gap-4'>
              <div className='px-3'>
                <h2 className='text-center text-3xl font-bold text-slate-700 py-4'>Historia</h2>
                <p className='text-base'>En el año 2018, un joven emprendedor llamado Héctor Zuluaga decidió crear una empresa que se dedicara a gestionar los trámites de apoyo por desempleo, negativas de pensión y pensiones para las personas que lo necesitaran. Su motivación era ayudar a los ciudadanos a obtener sus derechos y beneficios ante las instituciones públicas, así como orientarlos sobre las mejores opciones para su futuro financiero.</p>
                <p className='text-base'>Así nació Gestoria Peninsular, una empresa que desde sus inicios se ha caracterizado por su profesionalismo, eficiencia y compromiso con sus clientes. Con sede en Campeche, Gestoria Peninsular ha logrado expandirse a diferentes estados del país.</p>

                <p className='text-base'>Hoy en día, Gestoria Peninsular tiene una base de clientes que ha ayudado de más de 7000 personas, las cuales han podido acceder a sus prestaciones sociales o mejorar su situación económica gracias al asesoramiento personalizado y especializado que ofrece la empresa.</p>
              </div>
              <h2 id='sucursales' className='text-center text-3xl font-bold text-slate-700 pt-24'>Sucursales</h2>
              <ul className='flex flex-col gap-2 list-disc px-8 text-base mb-3'>
                <li className='mt-3'>Cuernavaca: Av. Morelos Sur #1000 Col. Centro CP 62000 Tel: 777 123 4567</li>
                <li>Jiutepec: Calle Emiliano Zapata #50 Col. Civac CP 62500 Tel: 777 234 5678</li>
                <li>Ocotepec: Carretera Federal Cuernavaca-Tepoztlán Km 10 Col. Lomas de Ocotepec CP 62100 Tel: 777 345 6789</li>
                <li>Ixtapaluca: Av. Cuauhtémoc #200 Col. San Buenaventura CP 56530 Tel: 55 1234 5678</li>
                <li>Chetumal: Av. Insurgentes #500 Col. Centro CP 77000 Tel: 983 1234-5678</li>
                <li>Cozumel: Calle Adolfo Rosado Salas #100 Col. Centro CP77600 Tel:987-123-4567</li>
                <li>Campeche: Int #106 Av Adolfo Ruiz Cortinez Edificio AH KIM PECH CP24014 Tel:981-227-0643</li>
              </ul>

              <Image className='min-h-[410px] max-h-[410px] min-w-full object-cover' width={478} height={410} src='/why2.png' alt='image-why1' />

              <div className='px-3'>
                <h2 className='text-center text-3xl font-bold text-slate-700 pt-12 py-4'>Anécdota del fundador</h2>

                <p className='text-base'>Héctor Zuluaga siempre tuvo un espíritu emprendedor y solidario desde pequeño. Cuando tenía diez años, organizó una colecta entre sus compañeros de escuela para comprar juguetes para los niños de un orfanato cercano. Su maestra quedó tan impresionada por su iniciativa que le regaló un libro sobre finanzas personales que despertó su interés por el tema.</p>

                <p className='text-base'>Años más tarde, cuando estudiaba la carrera de administración en la universidad, Héctor tuvo la oportunidad de hacer unas prácticas en una gestoría donde aprendió los procesos y requisitos para tramitar pensiones y subsidios por desempleo. Ahí se dio cuenta de que muchas personas desconocían sus derechos o tenían dificultades para acceder a ellos por falta de información o asesoría.</p>

                <p className='text-base'>Fue entonces cuando decidió crear su propia empresa que ofreciera un servicio integral y personalizado a los ciudadanos que necesitaran ayuda con estos trámites. Así nació Gestoria Peninsular, una empresa que combina el conocimiento financiero con el compromiso social.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
