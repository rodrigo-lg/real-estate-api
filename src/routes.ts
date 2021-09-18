import { Router } from 'express'

import { brokersRouter } from './modules/brokers/broker.routes'

const router = Router()

router.use('/brokers', brokersRouter)

export default router
