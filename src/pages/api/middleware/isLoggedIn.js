import consts from '../../../../utils/consts'

export const isLoggedIn = (handler) => {
  return async (req, res) => {
    if (req.cookies?.token === undefined) {
      return res.status(401).json({
        success: false,
        message: consts.token.DOESNT_EXIST
      })
    }

    return handler(req, res)
  }
}
