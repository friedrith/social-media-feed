import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ id: 'userId', email: 'foo.bar@baz.com' })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
