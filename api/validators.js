import moment from 'moment'

export const searchVehicleByIdAndTimestampvalidator = (req, res) => {
  const timestamp = moment(req.query.timestamp, true)
  if (!req.query.id || !req.query.timestamp) {
    res.status(400).json({ status: 400, message: 'id and timestamp must be present' })
    throw new Error('id and timestamp must be present')
  }

  if (!parseInt(req.query.id) && !timestamp.isValid()) {
    res.status(400).json({ status: 400, message: 'The id and timestamp provided are invalid' })
    throw new Error('The id and timestamp provided are invalid')
  }

  if (!parseInt(req.query.id)) {
    res.status(400).json({ status: 400, message: 'The id provided is invalid' })
    throw new Error('The id provided is invalid')
  }

  if (!timestamp.isValid()) {
    res.status(400).json({ status: 400, message: 'The timestamp provided is invalid' })
    throw new Error('The timestamp provided is invalid')
  }
}
