import SearchVehicleByIdAndTimestampUseCase from '../../../api/usecases/search-vehicle-by-id-and-timestamp-usecase.js'

describe('search-vehicle-by-id-and-timestamp-usecase', () => {
  it('Calls gateway with correct id and timestamp', async () => {
    const gateway = { getVehicleStateByIdAndTimestamp: jest.fn(() => {}) }
    const searchVehicleByIdAndTimestampUseCase = SearchVehicleByIdAndTimestampUseCase({
      gateway
    })
    const id = 3
    const timestamp = '2022-09-12 10:00:00+00'
    await searchVehicleByIdAndTimestampUseCase.execute(id, timestamp)
    expect(gateway.getVehicleStateByIdAndTimestamp).toHaveBeenCalledWith(id, timestamp)
  })
})
