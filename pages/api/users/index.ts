import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // we force a timeout to show loading
    // await new Promise(resolve => setTimeout(resolve, 3000))

    res.status(200).json({ id: 'userId' })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
