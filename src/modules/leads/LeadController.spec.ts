import { app } from '@root/app'
import request from 'supertest'

describe('Lead Controller', () => {
    it('should be able to list all leads', () => {
        request(app)
            .get('/leads/list')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((error) => {
                if (error) throw error
            })
    })
})
