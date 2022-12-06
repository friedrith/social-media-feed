import { useTranslation } from 'react-i18next'

import Post from 'features/posts/Post'
import SocialMediaPost from 'interfaces/SocialMediaPost'
import Spinner from 'components/atoms/Spinner'
import usePosts from 'features/posts/usePosts'
import useCurrentUser from 'features/users/useCurrentUser'
import PostListContainer from './PostListContainer'
import PostSkeletons from 'features/posts/PostSkeletons'

const PostList = () => {
  const { t } = useTranslation()

  const { posts, isLoading, isError } = usePosts()

  const currentUser = useCurrentUser()

  return (
    <>
      {isError && (
        <div className="text-center font-medium text-red-500">
          {t('Failed to load')}
        </div>
      )}
      {!isError && isLoading && (
        <>
          <div className="flex justify-center">
            <Spinner />
          </div>
          <PostSkeletons />
        </>
      )}
      {!isError && !isLoading && (
        <PostListContainer>
          {posts.map((p: SocialMediaPost) => (
            <Post post={p} key={p.id} />
          ))}
        </PostListContainer>
      )}
    </>
  )
}

export default PostList
