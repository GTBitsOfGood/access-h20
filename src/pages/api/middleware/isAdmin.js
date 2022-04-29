import { getUserFromToken } from '../../../../server/mongodb/actions/User'
import consts from '../../../../utils/consts'

export const adminOnly = (handler) => {
  return async (req, res) => {
    await getUserFromToken(req.cookies?.token)
      .then((user) => {
        if (!user.isUtilityCompany) {
          // req.body.id = user.id
          return handler(req, res)
        } else {
          return res.status(403).json({
            success: false,
            message: consts.user.ADMIN_ONLY
          })
        }
      })
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      )
  }
}
