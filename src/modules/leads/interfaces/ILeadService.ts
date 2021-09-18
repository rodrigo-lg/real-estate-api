import { ILead } from './ILead'

export interface ILeadService {
    listAll: () => ILead[]
}
