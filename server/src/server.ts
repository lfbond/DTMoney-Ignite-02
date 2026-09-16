import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = Number(process.env.PORT) || 3333

app.get('/health', (request, response) => {
  return response.status(200).json({
    status: 'ok',
  })
})

app.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`)
})