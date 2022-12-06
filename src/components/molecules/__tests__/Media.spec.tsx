import { render } from '@testing-library/react'

import Media from '../Media'

const getVideo = (container: HTMLElement) => container.querySelector('video')
const getSource = (container: HTMLElement) => container.querySelector('source')
const getImage = (container: HTMLElement) => container.querySelector('img')

describe('Media', () => {
  it('should render a video', () => {
    const url = 'https://foo.com/video.mp4'
    const media = { type: 'video', url }

    const { container } = render(<Media alt="foo" media={media} />)

    expect(getVideo(container)).toBeInTheDocument()
    expect(getSource(container)).toBeInTheDocument()
    expect(getSource(container).src).toEqual(url)
    expect(getImage(container)).not.toBeInTheDocument()
  })

  it('should render an image', () => {
    const url = 'https://foo.com/image.png'
    const media = { type: 'image', url }

    const { container } = render(<Media alt="foo" media={media} />)

    expect(getImage(container)).toBeInTheDocument()
    expect(getImage(container).src).toEqual(url)
    expect(getImage(container).alt).toEqual('foo')
    expect(getVideo(container)).not.toBeInTheDocument()
  })
})
