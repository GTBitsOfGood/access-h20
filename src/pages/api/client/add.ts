import { addClient } from "../../../../server/mongodb/actions/Client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => addClient(req.body).then((client) => {
    res.status(200)
    res.send({
        success: true,
        payload: client
    })
    return res
}).catch((error) => 
    res.status(400).json({ success: false, message: error.message})
)

export default handler;