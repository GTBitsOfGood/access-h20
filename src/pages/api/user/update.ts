import { NextApiRequest, NextApiResponse } from 'next'
import { update } from 'server/mongodb/actions/User'

// @route   POST api/user/update
// @desc    Update User Request
// @access  Public
const handler = (req: NextApiRequest, res: NextApiResponse) =>
  update(req.body)
    .then((updatedUser) =>
      res.status(200).json({
        success: true,
        payload: updatedUser
      })
    )
    .catch((error) =>
      res.status(400).json({
        success: false,
        message: error.message
      })
    )

export default handler
