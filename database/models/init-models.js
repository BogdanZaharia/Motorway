const DataTypes = require('sequelize').DataTypes
const _stateLogs = require('./state-log').default
const _vehicles = require('./vehicle')

function initModels (sequelize) {
  const stateLogs = _stateLogs(sequelize, DataTypes)
  const vehicles = _vehicles(sequelize, DataTypes)

  return {
    stateLogs,
    vehicles
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
