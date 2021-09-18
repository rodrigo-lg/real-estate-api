import { Request, Response } from 'express'

import { LeadService } from './LeadService'

const leadService = new LeadService()

class LeadController {
    listAll (request: Request, response: Response) {
        try {
            const leads = leadService.listAll()

            return response.json(leads)
        } catch (error) {
            console.error(error)

            return response.status(500).send({ error: 'Internal server error' })
        }
    }
}

export { LeadController }
