import useSWR from 'swr'

import fetcher from 'utils/fetcher'

// https://swr.vercel.app/docs/getting-started
const usePosts = () => {
  const { data, error } = useSWR('/api/socialMediaPosts', fetcher)

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error && !(data && !Array.isArray(data)),
  }
}

export default usePosts
