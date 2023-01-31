import Vehicle from '../../database/models/vehicle.js'
import StateLog from '../../database/models/state-log.js'
import { Op } from 'Sequelize'

const MotorwayDbGateway = () => {
  return {
    getVehicleStateByIdAndTimestamp: async (vehicleId, timestampQuery) => {
      const vehicleRecord = await Vehicle.findAll({
        attributes: ['id', 'make', 'model'],
        raw: true,
        plain: true,
        include: [{
          model: StateLog,
          attributes: ['state', 'timestamp'],
          plain: true,
          duplicating: false,
          where: {
            vehicleId,
            timestamp: {
              [Op.lte]: timestampQuery
            }
          }
        }],
        order: [
          [StateLog, 'timestamp', 'DESC']
        ],
        limit: 1
      })
      if (vehicleRecord) {
        vehicleRecord.state = vehicleRecord['stateLogs.state']
        vehicleRecord.timestamp = vehicleRecord['stateLogs.timestamp']
        delete vehicleRecord['stateLogs.state']
        delete vehicleRecord['stateLogs.timestamp']
      }
      return vehicleRecord
    }
  }
}

export default MotorwayDbGateway
