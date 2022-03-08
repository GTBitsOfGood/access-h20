import { getInfo } from "../../../../server/mongodb/actions/InfoSubmission";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => getInfo(req.query.accountId as string).then((company) => {
    res.status(200)
    res.send({
        success: true,
        payload: company
    })
    return res
}).catch((error) => 
    res.status(400).json({success: false, message: error.message})
)

export default handler;