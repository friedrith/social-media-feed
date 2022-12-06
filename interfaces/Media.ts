export type Video = {
  url: string
  type: 'video'
}

export type Image = {
  url: string
  type: 'image'
}

export type Media = Video | Image

export default Media