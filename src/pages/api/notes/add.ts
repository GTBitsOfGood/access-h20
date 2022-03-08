import { addNote } from "../../../../server/mongodb/actions/Note";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => addNote(req.body).then((note) => {
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