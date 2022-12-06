import { sampleSocialMediaPostsData } from '../sample-data'

describe('sampleSocialMediaPostsData', () => {
  it('should have data', () => {
    expect(sampleSocialMediaPostsData).toHaveLength(15)
  })
})
