import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { makeStore } from 'services/store'
import Layout from '../Layout'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const setupTest = (ui: React.ReactNode) => {
  const store = makeStore()
  return render(<Provider store={store}>{ui}</Provider>)
}

describe('Layout', () => {
  it('should render children', () => {
    const children = <div data-testid="children"></div>
    const { queryByTestId } = setupTest(<Layout>{children}</Layout>)

    expect(queryByTestId('children')).toBeInTheDocument()
  })

  it('should render a footer', () => {
    const { queryByText, debug } = setupTest(<Layout />)

    expect(queryByText(`© All rights reserved`)).toBeInTheDocument()
  })
})
