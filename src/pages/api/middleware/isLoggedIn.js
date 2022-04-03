import urls from '../../../../utils/urls'

export const isLoggedIn = (handler) => {
  return async (req, res) => {
    if (req.cookies?.token === undefined) {
      return res.status(401).json({
        success: false,
        message: urls.api.user.adminOnly
      })
    }

    return handler(req, res)
  }
}
