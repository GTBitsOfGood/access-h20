import { getAll } from '../../../../server/mongodb/actions/Client'
import { NextApiRequest, NextApiResponse } from 'next'
import { adminOnly } from '../middleware/isAdmin'

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  getAll()
    .then((clients) => {
      res.status(200)
      res.send({
        success: true,
        payload: clients
      })
      return res
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    )

export default adminOnly(handler)
