import * as dotenv from 'dotenv'
import express from 'express'
import { searchVehicleByIdAndTimestampUseCase } from '../dependencies.js'
import { searchVehicleByIdAndTimestampvalidator } from '../validators.js'
dotenv.config()

const app = express()
const port = 3000

app.get('/vehicles', async (req, res) => {
  try {
    searchVehicleByIdAndTimestampvalidator(req, res)
    const result = await searchVehicleByIdAndTimestampUseCase.execute(req.query.id, req.query.timestamp)
    if (!result) {
      res.status(404).json({ status: '404', message: 'No records found' })
    } else {
      res.status(200).json(result)
    }
  } catch (err) {
    console.log('Error:', err.message)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

export default app
