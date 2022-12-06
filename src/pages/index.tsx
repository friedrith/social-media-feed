import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from 'components/templates/Layout'
import MaxWidth from 'components/templates/MaxWidth'
import usePosts from 'features/posts/usePosts'
import useCurrentUser from 'features/users/useCurrentUser'
import AuthenticatedPage from 'components/templates/AuthenticatedPage'
import Header from 'components/organisms/Header'

import PostList from 'features/posts/PostList'
import PostSkeletons from 'features/posts/PostSkeletons'
import { useAppDispatch } from 'hooks/redux'

const IndexPage = () => {
  const { t } = useTranslation()

  const { posts, isLoading, isError, refresh } = usePosts()

  const currentUser = useCurrentUser()

  const dispatch = useAppDispatch()

  return (
    <AuthenticatedPage>
      <Layout title={t('Social Media Feed')}>
        <Header onForceRefresh={() => refresh()} />
        <MaxWidth>
          <div className="flex flex-col space-y-14 sm:space-y-10 py-10">
            {currentUser ? <PostList /> : <PostSkeletons />}
          </div>
        </MaxWidth>
      </Layout>
    </AuthenticatedPage>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default IndexPage
