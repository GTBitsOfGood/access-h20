import { getUserFromToken } from '../../../../server/mongodb/actions/User'

export const adminOnly = (handler) => {
  return async (req, res) => {
    await getUserFromToken(req.cookies?.token)
      .then((user) => {
        if (!user.isUtilityCompany) {
          req.query.accountId = user.id
          return handler(req, res)
        } else {
          return res.status(403).json({
            success: false,
            message: 'Only admin can access this content'
          })
        }
      })
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      )
  }
}
