import errors from '../../../../utils/consts'
import { getUserFromToken } from '../../../../server/mongodb/actions/User'
import { result } from 'lodash'
import { resolveHref } from 'next/dist/shared/lib/router/router'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

export const adminOnly = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await getUserFromToken(req.cookies?.token)
      .then((user) => {
        if (!user.isUtilityCompany) {
          req.query.accountId = user.id
          return handler(req, res)
        } else {
          return res.status(403).json({
            success: false,
            message: errors.user.ADMIN_ONLY
          })
        }
      })
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      )
  }
}

// export const adminOnly = async (req, res) => {
//   console.log('adminOnly, cookies: ', req.headers.cookies)
//   await getUserFromToken(req.cookies?.token)
//     .then((user) => {
//       if (!user.isUtilityCompany) {
//         req.query.accountId = user.id
//         return res
//       } else {
//         return res.status(403).json({
//           success: false,
//           message: urls.api.user.adminOnly
//         })
//       }
//     })
//     .catch((error) =>
//       res.status(400).json({ success: false, message: error.message })
//     )
// }
