import { getAll } from '../../../../server/mongodb/actions/Client'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => getAll().then((clients) => {
    // console.log('src/pages/api/get-all: ' + JSON.stringify(clients))
    res.status(200)
    res.send({
        success: true,
        payload: clients
    })
    return res
}).catch((error) => 
    res.status(400).json({ success: false, message: error.message})
)

export default handler;