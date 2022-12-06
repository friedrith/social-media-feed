import Media from 'interfaces/Media'

type SocialMediaPost = {
  id: string
  title: string
  body: string
  createdDate: Date
  origin: string
  media: Media[]
}

export default SocialMediaPost
