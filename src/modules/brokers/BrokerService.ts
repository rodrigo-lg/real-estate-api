import Brokers from '@data/brokers.json'
import { IBroker } from './interfaces/IBroker'
import { IBrokerService } from './interfaces/IBrokerService'

class BrokerService implements IBrokerService {
    private brokers: IBroker[]

    constructor () {
        this.brokers = Brokers
    }

    listAll () {
        return this.brokers
    }
}

export { BrokerService }
