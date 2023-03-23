import { createPool } from 'mysql2/promise'
const HOST = process.env.NEXT_PUBLIC_HOST
const DATABASE = process.env.NEXT_PUBLIC_DATABASE
const USER = process.env.NEXT_PUBLIC_USER
const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD
const PORT = process.env.NEXT_PUBLIC_PORT

const pool = createPool({
  host: HOST,
  database: DATABASE,
  user: USER,
  password: PASSWORD,
  port: PORT
})

export { pool }
