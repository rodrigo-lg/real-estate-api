import { LeadService } from './LeadService'

describe('Lead Service', () => {
    it('should be able to list all leads', () => {
        const leadService = new LeadService()

        const leads = leadService.listAll()

        expect(leads.length).toBe(13)

        expect(leads).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    key: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    int_code: expect.any(String),
                    phone: expect.any(String),
                    created_at: expect.any(String),
                    broker_key: expect.any(Number),
                    interests: expect.arrayContaining([
                        expect.objectContaining({
                            code: expect.any(String),
                            title: expect.any(String),
                            sale_price: expect.any(String),
                            type: expect.any(String)
                        })
                    ])
                })
            ])
        )
    })
})
