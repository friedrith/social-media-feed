import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="h-[12rem]" />
      <footer className="absolute bottom-0 left-0 right-0 bg-white shadow dark:bg-gray-900">
        <hr className="py-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:py-2" />
        <div className="p-4 md:px-6 md:py-8 ">
          <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {t('All rights reserved')}
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
