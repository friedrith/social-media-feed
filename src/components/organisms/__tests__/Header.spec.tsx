import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { aState } from '__tests__/reduxBuilder'
import setupTest from '__tests__/setupTest'

import Header from '../Header'

const mockStore = configureStore([])

const onForceRefresh = jest.fn()

describe('Layout', () => {
  beforeEach(() => {
    onForceRefresh.mockReset()
  })

  it('should render text', () => {
    const { queryByText } = setupTest(
      <Header onForceRefresh={onForceRefresh} />
    )

    expect(queryByText('Framestore social feed')).toBeInTheDocument()
  })

  it('should render 3 buttons when authenticated', () => {
    const user = { id: 'userId', email: 'foo' }
    const state = aState().withCurrentUser(user).build()

    const { queryByLabelText } = setupTest(
      <Header onForceRefresh={onForceRefresh} />,
      state
    )

    expect(queryByLabelText('Log out')).toBeInTheDocument()
    expect(queryByLabelText('Refresh')).toBeInTheDocument()
    expect(queryByLabelText('Change Theme')).toBeInTheDocument()
  })

  it('should render 1 button when not authenticated', () => {
    const { queryByLabelText } = setupTest(
      <Header onForceRefresh={onForceRefresh} />
    )

    expect(queryByLabelText('Log out')).not.toBeInTheDocument()
    expect(queryByLabelText('Refresh')).not.toBeInTheDocument()
    expect(queryByLabelText('Change Theme')).toBeInTheDocument()
  })
})
