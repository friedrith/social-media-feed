export type Video = {
  url: string
  type: string
}

export type Image = {
  url: string
  type: string
}

export type Media = Video | Image

export default Media
