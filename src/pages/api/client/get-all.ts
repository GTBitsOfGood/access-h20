import { getAll } from '../../../../server/mongodb/actions/Client'
import { NextApiRequest, NextApiResponse } from 'next'
import { adminOnly } from '../middleware/isAdmin'
import { isLoggedIn } from '../middleware/isLoggedIn'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return getAll()
    .then((clients) => {
      res.status(200)
      res.send({
        success: true,
        payload: clients
      })
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    )
}

// export default handler
export default isLoggedIn(adminOnly(handler))
