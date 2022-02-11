import { NextApiRequest, NextApiResponse } from "next";
import { testFunction2 } from "server/mongodb/actions/Note";

export interface TestFunctionTwo {
  success: boolean,
  payload?: string,
  message?: string,
}

export const testFunction2ServerCall = async () => {
  try {
    const res = await testFunction2()
    return {
      success: true,
      payload: res
    }
  } catch {
    return {
      success: false,
      message: "failure"
    }
  }
}

const handler = (req: NextApiRequest, res: NextApiResponse) => testFunction2ServerCall().then((payload) => {
  if (payload.success) res.status(201)
  else res.status(500)
  res.json(payload)
})

export default handler