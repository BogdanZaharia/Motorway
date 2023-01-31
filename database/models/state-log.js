import sequelize from '../config/config.js'
import { DataTypes } from 'sequelize'

const StateLog = sequelize.define('stateLog', {
  vehicleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'stateLogs',
  schema: 'public',
  timestamps: false
})

export default StateLog
