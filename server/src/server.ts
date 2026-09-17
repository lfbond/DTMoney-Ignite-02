import express from 'express'
import cors from 'cors'

import { transactionsRouter } from './routes/transactions.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = Number(process.env.PORT) || 3333

app.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'ok',
  })
})

app.use('/transactions', transactionsRouter)

app.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`)
})