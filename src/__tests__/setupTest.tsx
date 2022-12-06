import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { AppState } from 'services/store'
import { aState } from '__tests__/reduxBuilder'

const mockStore = configureStore([])

const setupTest = (ui: React.ReactNode, state: AppState = aState().build()) => {
  const store = mockStore(state)

  const result = render(<Provider store={store}>{ui}</Provider>)

  return {
    store,
    ...result,
  }
}

export default setupTest
