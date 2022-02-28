import { NextApiRequest, NextApiResponse } from "next";
import { addOtherQuestion } from "server/mongodb/actions/FormQuestion";


const handler = (req: NextApiRequest, res: NextApiResponse) => addOtherQuestion(req.body).then((question) => {
    res.status(200)
    res.send({
        success: true,
        payload: question
    })
    return res
}).catch((error) => 
    res.status(400).json({ success: false, message: error.message})
)

export default handler