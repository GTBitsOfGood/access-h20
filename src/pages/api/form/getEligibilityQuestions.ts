import { NextApiRequest, NextApiResponse } from "next";
import { getEligibilityQuestions } from "server/mongodb/actions/FormQuestion";


const handler = (req: NextApiRequest, res: NextApiResponse) => getEligibilityQuestions().then((questions) => {
    res.status(200)
    res.send({
        success: true,
        payload: questions
    })
    return res
}).catch((error) => 
    res.status(400).json({ success: false, message: error.message})
)

export default handler