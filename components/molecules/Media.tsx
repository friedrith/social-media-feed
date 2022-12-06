import classNames from 'classnames'
import * as Media from 'interfaces/Media'

type Props = {
  media: Media.Media
  className?: string
  alt: string
}

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */
const MediaComponent = ({ media, className, alt }: Props) => {
  const url = media?.url

  return (
    <>
      {media.type === 'video' && (
        <video className={className} controls>
          <source src={url} />
          Your browser does not support the video tag.
        </video>
      )}
      {media.type === 'image' && (
        <div className={classNames('overflow-hidden', className)}>
          <img
            src={url}
            alt={alt}
            className="object-center object-cover indent-[-9999px]"
          />
        </div>
      )}
    </>
  )
}

export default MediaComponent
