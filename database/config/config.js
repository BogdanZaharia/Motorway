import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST
}

const DbConfig = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
    logging: false
  }
)

export default DbConfig
