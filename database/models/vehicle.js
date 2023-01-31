import sequelize from '../config/config.js'
import { DataTypes } from 'sequelize'
import StateLog from './state-log.js'

const Vehicle = sequelize.define('vehicle', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  make: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  model: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  state: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'vehicles',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: 'vehicles_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

Vehicle.hasMany(StateLog)
StateLog.belongsTo(Vehicle, { foreignKey: 'vehicleId' })

export default Vehicle
