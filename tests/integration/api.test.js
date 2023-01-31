import * as dotenv from 'dotenv'
import request from 'supertest'
dotenv.config()

describe('MotorwayAPI', () => {
  it('Can return vehicle information and state by id and timestamp', async () => {
    const id = 3
    const timestamp = '2022-09-12%2010%3A00%3A00%2B00'
    const expectedData = {
      id: 3,
      make: 'VW',
      model: 'GOLF',
      state: 'selling',
      timestamp: '2022-09-11T23:21:38.000Z'
    }
    const expectedStatus = 200
    const response = await request(process.env.BASE_URL).get(`/vehicles?id=${id}&timestamp=${timestamp}`)
    expect(response.status).toBe(expectedStatus)
    expect(response.body).toStrictEqual(expectedData)
  })
})
