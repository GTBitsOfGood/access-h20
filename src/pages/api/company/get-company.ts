import { getCompany } from "../../../../server/mongodb/actions/Company";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => getCompany(req.query.accountId).then((company) => {
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