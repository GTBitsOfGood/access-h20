import { addInfo } from "../../../../server/mongodb/actions/InfoSubmission";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => addInfo(req.body).then((info) => {
    res.status(200)
    res.send({
        success: true,
        payload: info
    })
    return res
}).catch((error) => 
    res.status(400).json({ success: false, message: error.message})
)

export default handler;