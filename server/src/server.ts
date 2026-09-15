import express, { response } from 'express'
import cors from 'cors'
import { request } from 'node:http'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = Number(process.env.PORT) || 3333

app.get('/helth', (request, response) => {
    return response.status(200).json({
        status: 'ok',
    })
})

app.listen(PORT, () => {
    console.log(`HTTP server running on http://localhost:${PORT}`)
})