import { useTranslation } from 'react-i18next'
import {
  ArrowRightOnRectangleIcon,
  ArrowPathIcon,
} from '@heroicons/react/20/solid'

import MaxWidth from 'components/templates/MaxWidth'
import ThemeSwitcher from 'components/atoms/ThemeSwitcher'
import IconButton from 'components/atoms/IconButton'
import useCurrentUser from 'features/users/useCurrentUser'
import { useAppDispatch } from 'hooks/redux'
import { logout } from 'features/users/users.slice'

const Header = () => {
  const { t } = useTranslation()

  const currentUser = useCurrentUser()

  const dispatch = useAppDispatch()

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed z-10 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <MaxWidth>
          <div className="container flex flex-wrap items-center ">
            <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex-1">
              {t('Framestore social feed')}
            </h1>
            {currentUser && (
              <IconButton aria-label={t('Log out')} className="mr-2">
                <ArrowPathIcon className="h-5 w-5" />
              </IconButton>
            )}
            <ThemeSwitcher />
            {currentUser && (
              <IconButton
                aria-label={t('Log out')}
                className="ml-2"
                onClick={() => dispatch(logout())}
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </IconButton>
            )}
          </div>
        </MaxWidth>
      </nav>
      <div className="h-20"></div>
    </>
  )
}

export default Header
