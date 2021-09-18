import { BrokerService } from './BrokerService'

describe('Broker Service', () => {
    it('should be able to list all the brokers', () => {
        const brokerService = new BrokerService()

        const brokers = brokerService.listAll()

        expect(brokers.length).toBe(4)

        expect(brokers).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    key: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    int_code: expect.any(String),
                    phone: expect.any(String),
                    commissions: expect.arrayContaining([
                        expect.objectContaining({
                            value: expect.any(String),
                            property_code: expect.any(String),
                            date: expect.any(String)
                        })
                    ])
                })
            ])
        )
    })
})
