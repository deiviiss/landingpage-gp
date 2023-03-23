import { pool } from '../../../config/db'

export default async function messageHandler(req, res) {
  const { name, message, email, telefono, acceptedTerms } = req.body

  await pool.query('INSERT INTO messages SET ?', {
    name,
    message,
    email,
    phone: telefono,
    status: false,
    accepted_terms: acceptedTerms
  })

  return res.status(200).json({ status: true })
}
