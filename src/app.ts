import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/healthcheck', (_, res) => res.status(200).send('Ok'))

app.use(routes)

export { app }
