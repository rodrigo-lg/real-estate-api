import { Router } from 'express'

import { brokersRouter } from './modules/brokers/broker.routes'
import { leadsRouter } from './modules/leads/lead.routes'

const router = Router()

router.use('/brokers', brokersRouter)
router.use('/leads', leadsRouter)

export default router
