import Leads from '@data/leads.json'

import { ILeadService } from './interfaces/ILeadService'
import { ILead } from './interfaces/ILead'

class LeadService implements ILeadService {
    private leads: ILead[]

    constructor () {
        this.leads = Leads
    }

    listAll () {
        return this.leads
    }
}

export { LeadService }
