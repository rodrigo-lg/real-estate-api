import { app } from '@root/app'
import request from 'supertest'

describe('Broker Controller', () => {
    it('should be able to list all brokers', () => {
        request(app)
            .get('/brokers/list')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((error) => {
                if (error) throw error
            })
    })
})
