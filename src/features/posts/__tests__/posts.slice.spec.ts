import { aState } from '__tests__/reduxBuilder'
import { getArchivedPosts } from '../posts.slice'

describe('getArchivedPosts', () => {
  it('should return a empty list', () => {
    const state = aState().build()

    expect(getArchivedPosts(state)).toEqual([])
  })

  it('should return a list of ids', () => {
    const archivedPosts = ['id1', 'id2']
    const state = aState().withArchivedPosts(archivedPosts).build()

    expect(getArchivedPosts(state)).toEqual(archivedPosts)
  })
})
