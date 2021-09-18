import { IBroker } from './IBroker'

interface IBrokerService {
    listAll: () => IBroker[]
}

export { IBrokerService }
