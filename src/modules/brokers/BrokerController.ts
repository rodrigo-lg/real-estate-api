import { Request, Response } from 'express'

import { BrokerService } from './BrokerService'

const brokerService = new BrokerService()

class BrokerController {
    listAll (request: Request, response: Response) {
        try {
            const brokers = brokerService.listAll()

            return response.json(brokers)
        } catch (error) {
            console.error(error)

            return response.status(500).send({ error: 'Internal server error' })
        }
    }
}

export { BrokerController }
