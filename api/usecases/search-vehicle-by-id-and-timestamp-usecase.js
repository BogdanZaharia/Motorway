const SearchVehicleByIdAndTimestampUseCase = (options) => {
  // const dbGateway = options.motorwayDbGateway;
  const dbGateway = options.gateway

  return {
    execute: async (vehicleId, timestamp) => {
      const vehicleInformationAndState = await dbGateway.getVehicleStateByIdAndTimestamp(vehicleId, timestamp)
      return vehicleInformationAndState
    }
  }
}

export default SearchVehicleByIdAndTimestampUseCase
