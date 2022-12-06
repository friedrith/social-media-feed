import Layout from '../Layout'

import setupTest from '__tests__/setupTest'

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
