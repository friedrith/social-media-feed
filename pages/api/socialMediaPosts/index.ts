import { NextApiRequest, NextApiResponse } from 'next'
import { sampleSocialMediaPostsData } from 'utils/sample-data'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleSocialMediaPostsData)) {
      throw new Error('Cannot find data')
    }

    // we force a timeout to show loading
    await new Promise(resolve => setTimeout(resolve, 3000))

    res.status(200).json(sampleSocialMediaPostsData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
