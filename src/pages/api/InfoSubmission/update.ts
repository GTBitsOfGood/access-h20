import { update } from "../../../../server/mongodb/actions/InfoSubmission";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => update(req.body)
.then((info) => {
    res.status(200)
    res.send({
        success: true,
        payload: info
    })
    return res
}).catch((error) => res.status(400).json({success: false, message: error.message}))

export default handler