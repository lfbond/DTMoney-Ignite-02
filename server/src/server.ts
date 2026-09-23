import express from 'express'
import cors from 'cors'
import { prisma } from './lib/prisma.js'

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

app.get('/database-health', async (req,res) => {
  try {
    const transactions = await prisma.transaction.findMany()

    return res.status(200).json({
      status: 'ok',
      database: 'connected',
      transactions,
    })
  }catch (error) {
    console.error(error)

    return res.status(500).json({
      status: 'error',
      database: 'disconnected'
    })
  }
})

app.use('/transactions', transactionsRouter)

app.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`)
})