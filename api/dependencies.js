import SearchVehicleByIdAndTimestampUseCase from './usecases/search-vehicle-by-id-and-timestamp-usecase.js'
import MotorwayDbGateway from './gateways/motorway-db-gateway.js'

export const searchVehicleByIdAndTimestampUseCase = SearchVehicleByIdAndTimestampUseCase({
  gateway: MotorwayDbGateway()
})
