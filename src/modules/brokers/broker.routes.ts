import { Router } from 'express'

import { BrokerController } from './BrokerController'

const brokerController = new BrokerController()

const brokersRouter = Router()

brokersRouter.get('/list', brokerController.listAll)

export { brokersRouter }
