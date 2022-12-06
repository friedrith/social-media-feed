import useSWR from 'swr'

import fetcher from 'utils/fetcher'
import { useAppSelector } from 'hooks/redux'
import { getArchivedPosts } from './posts.slice'

const useForceRefresh = () => {}

// https://swr.vercel.app/docs/getting-started
const usePosts = () => {
  // better not using useEffect https://www.reddit.com/r/reactjs/comments/vi6q6f/what_is_the_recommended_way_to_load_data_for/
  const { data, error, isValidating, mutate } = useSWR(
    '/api/socialMediaPosts',
    fetcher,
    { revalidateOnFocus: false }
  )

  const archivedPosts = useAppSelector(getArchivedPosts)

  return {
    posts: Array.isArray(data)
      ? data.filter(post => !archivedPosts.includes(post.id))
      : data,
    isLoading: isValidating,
    isError: error,
    refresh: mutate,
  }
}

export default usePosts
