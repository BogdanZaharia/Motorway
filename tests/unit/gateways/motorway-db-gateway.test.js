import MotorwayDbGateway from '../../../api/gateways/motorway-db-gateway.js'
import DbConfig from '../../../database/config/config.js'

describe('motorway-db-gateway', () => {
  afterAll(() => {
    DbConfig.close()
  })

  it('Returns vehicle information and state by vehicle id and timestamp', async () => {
    const id = 3
    const timestamp = '2022-09-12 10:00:00+00'
    const result = await MotorwayDbGateway().getVehicleStateByIdAndTimestamp(id, timestamp)
    expect(result).toStrictEqual({ id: 3, make: 'VW', model: 'GOLF', state: 'selling', timestamp: new Date('2022-09-11T23:21:38.000Z') })
  })

  it('Returns null when id cannot be found', async () => {
    const id = 5
    const timestamp = '2022-09-12 10:00:00+00'
    const result = await MotorwayDbGateway().getVehicleStateByIdAndTimestamp(id, timestamp)
    expect(result).toBeNull()
  })

  it('Returns null when timestamp is older than the first vehicle record', async () => {
    const id = 3
    const timestamp = '2020-09-12 10:00:00+00'
    const result = await MotorwayDbGateway().getVehicleStateByIdAndTimestamp(id, timestamp)
    expect(result).toBeNull()
  })

  it('Returns the last state recorded for a vehicle when timestamp is after that date/time', async () => {
    const id = 3
    const timestamp = '2022-12-12 10:00:00+00'
    const result = await MotorwayDbGateway().getVehicleStateByIdAndTimestamp(id, timestamp)
    expect(result).toStrictEqual({ id: 3, make: 'VW', model: 'GOLF', state: 'sold', timestamp: new Date('2022-09-12 12:41:41+00') })
  })
})
