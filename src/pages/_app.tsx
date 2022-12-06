import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'

import 'styles/globals.css'
import store from 'services/store'
import useDarkTheme from 'hooks/useDarkTheme'

// https://stackoverflow.com/questions/57609931/next-js-with-fortawesome-and-ssr
function MyApp({ Component, pageProps }: AppProps) {
  useDarkTheme()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp)
