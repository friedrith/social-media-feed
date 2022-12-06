import { useTranslation } from 'react-i18next'

import Post from 'features/posts/Post'
import SocialMediaPost from 'interfaces/SocialMediaPost'
import Spinner from 'components/atoms/Spinner'
import usePosts from 'features/posts/usePosts'
import PostSkeletons from 'features/posts/PostSkeletons'

const PostList = () => {
  const { t } = useTranslation()

  const { posts, isLoading, isError } = usePosts()

  if (isError) {
    return (
      <div className="text-center font-medium text-red-500">
        {t('Failed to load')}
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
      {/* we show the skeleton only when posts is undefined aka we never got data, otherwise it is better to keep showing the previous data until end of the fetch */}
      {isLoading && (!posts || posts.length === 0) && <PostSkeletons />}
      {Array.isArray(posts) && posts.length > 0 && (
        <>
          {posts.map((p: SocialMediaPost) => (
            <Post post={p} key={p.id} />
          ))}
        </>
      )}
      {/* this message doesn't bring a lot of value so we can hide is when reloading */}
      {Array.isArray(posts) && posts.length === 0 && !isLoading && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          {t('No posts')}
        </div>
      )}
    </>
  )
}

export default PostList
