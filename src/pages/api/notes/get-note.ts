import { getNotes } from '../../../../server/mongodb/actions/Note'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => getNotes(req.query.accountId as string).then((note) => {
    // console.log('src/pages/api/get-all: ' + JSON.stringify(clients))
    res.status(200)
    res.send({
        success: true,
        payload: note
    })
    return res
}).catch((error) => 
    res.status(400).json({ success: false, message: error.message})
)

export default handler;