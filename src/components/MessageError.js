import { ErrorMessage } from 'formik'

export default function MessageError({ name }) {
  return (
    <ErrorMessage component='p' className='text-red-600 text-sm' name={name} />
  )
}
