import Image from 'next/image'
import * as Media from 'interfaces/Media'

type Props = {
  media: Media.Media
  className?: string
  alt: string
}

/* eslint-disable jsx-a11y/media-has-caption */
const MediaComponent = ({ media, className, alt }: Props) => {
  return (
    <>
      {media.type === 'video' && (
        <video className={className} controls>
          <source src={media.url} />
          Your browser does not support the video tag.
        </video>
      )}
      {media.type === 'image' && (
        <Image className={className} src={media.url} alt={alt} />
      )}
    </>
  )
}

export default MediaComponent
