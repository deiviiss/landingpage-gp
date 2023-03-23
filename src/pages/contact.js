/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
import Link from 'next/link'
import { useMessage } from '../context/MessageProvider'
import { Formik, Form, Field } from 'formik'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import { MapPin, Mail, MessageCircle, Loader } from 'react-feather'

import MessageError from '../components/MessageError'
import { useState } from 'react'
import Header from 'src/components/Header'

export default function Contact() {
  const { addMessage } = useMessage()

  const [message] = useState({
    name: '',
    message: '',
    email: '',
    telefono: '',
    acceptedTerms: false
  })

  return (
    <>
      <Header title='Contáctanos' />

      <div id='contact' className='py-14 text-base text-slate-600'>
        <div className='max-w-[920px] mx-auto  mb-5 pb-10 grid sm:grid-cols-2 gap-16'>
          <div className='text-justify'>
            <p className='py-3 px-3'>En nuestra página de contacto, brindamos a nuestros clientes un formulario sencillo de utilizar que les permite enviar un mensaje y recibir una respuesta ágil de nuestro equipo. Solamente necesita proporcionar su nombre, teléfono celular y dirección de correo electrónico, y nos comunicaremos con usted en el menor tiempo posible.
            </p>
            <p className='py-2 px-3'>
              Nos encontramos siempre dispuestos a brindar nuestra asistencia.
            </p>
            <ul className='py-2'>

              <li className='flex items-center py-2 px-2 gap-3 hover:underline'><MapPin className='text-primary w-5 h-5' /><Link href='https://goo.gl/maps/ckAGEhsFSstXJSHN8' target='_blank' rel='noreferrer'>Calle 10 #329 Edificio San Ignacio Local 4 Colonia Centro CP 24000</Link>
              </li>
              <li className='flex gap-3 py-2 px-2 items-center hover:underline'><Mail className='text-primary w-5 h-5' /><Link href='tel:+529811338591'>981 133 8591</Link></li>
              <li className='flex gap-3 py-2 px-2 items-center hover:underline'><MessageCircle className='text-primary w-5 h-5' /><Link href='mailto:gestoriapeninsularcampeche@gmail.com'>gestoriapeninsularcampeche@gmail.com</Link></li>
            </ul>
          </div>

          <Formik
            initialValues={message}
            validationSchema={Yup.object({
              name: Yup.string().required('Este campo es requerido'),
              email: Yup.string().email('Formato de correo inválido').required('Este campo es requerido'),
              telefono: Yup.number().required('Este campo es requerido'),
              message: Yup.string().required('Este campo es requerido'),
              acceptedTerms: Yup.boolean().oneOf([true], 'Debes de aceptar los términos y condiciones')
            })}
            // send form
            onSubmit={async (values, actions) => {
              const rta = await addMessage(values)

              if (rta.status) {
                toast.success('Tu mensaje ha sido enviado\n\nGracias por contactarnos!',
                  {
                    duration: 6000
                  })
                actions.setSubmitting(false)
                actions.resetForm()
              }
            }}
            enableReinitialize
          >

            {/* form  */}
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className='px-5'>

                  <label htmlFor='name' className='text-sm block font-semibold text-primary pt-4'>Nombre</label>

                  <Field
                    type='text'
                    name='name'
                    autoComplete='off'
                    className='border-2 border-solid border-primary rounded w-full p-3 mt-2' placeholder='Escribe tu nombre'
                  />
                  <MessageError name='name' />

                  <label htmlFor='email' className='text-sm block font-semibold text-primary pt-4'>Correo electrónico</label>

                  <Field
                    type='mail'
                    name='email'
                    autoComplete='off'
                    className='border-2 border-solid border-primary rounded w-full p-3 mt-2' placeholder='Escribe tu correo electrónico'
                  />
                  <MessageError name='email' />

                  <label htmlFor='telefono' className='text-sm block font-semibold text-primary pt-4'>Teléfono</label>

                  <Field
                    type='tel'
                    pattern='([0-9]{10})'
                    name='telefono'
                    className='border-2 border-solid border-primary rounded w-full p-3 mt-2' placeholder='Escribe tu teléfono'
                  />
                  <MessageError name='telefono' />

                  <label htmlFor='message' className='text-sm block font-semibold text-primary pt-4'>Mensaje</label>
                  <Field
                    component='textarea'
                    rows={4}
                    name='message'
                    autoComplete='off'
                    placeholder='Escribe el mensaje'
                    className='border-2 border-solid border-primary rounded w-full p-3 mt-2'
                  />
                  <MessageError name='message' />

                  <div className='flex items-center gap-3 mt-4'>
                    <Field
                      type='checkbox'
                      name='acceptedTerms' placeolder='Acepta los terminos y condiciones' className='border-2 border-solid border-primary rounded w-5 p-3 my-3'
                    />
                    <label className='text-justify' htmlFor='acceptedTerms'>Estoy de acuerdo con la <Link className='underline hover:underline' href='/privacy'>Política de privacidad
                    </Link> y los <Link className='underline hover:text-primary' href='/terms'>Términos y condiciones</Link>
                    </label>
                  </div>
                  <MessageError name='acceptedTerms' />

                  <button
                    type='submit'
                    className='py-4 px-12 flex justify-center mt-4 w-full text-white text-sm transition-all duration-200 bg-primary rounded border-2 border-primary hover:bg-transparent hover:text-slate-800'
                    disabled={isSubmitting}
                  >
                    {/* Guardar */}
                    {isSubmitting
                      ? (
                        <Loader className='animate-spin h-5 w-5' />
                      )
                      : 'Enviar'}
                  </button>
                </div>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    </>
  )
}
