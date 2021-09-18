import { Router } from 'express'

import { LeadController } from './LeadController'

const leadController = new LeadController()

const leadsRouter = Router()

leadsRouter.get('/list', leadController.listAll)

export { leadsRouter }
