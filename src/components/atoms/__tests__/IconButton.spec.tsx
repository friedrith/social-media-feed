import { fireEvent, render } from '@testing-library/react'

import IconButton from '../IconButton'

const children = <div data-testid="foo" />

describe('Media', () => {
  it('should render children', () => {
    const { queryByTestId } = render(
      <IconButton aria-label="foo">{children}</IconButton>
    )

    expect(queryByTestId('foo')).toBeInTheDocument()
  })

  it('should add aria-label', () => {
    const { queryByLabelText } = render(
      <IconButton aria-label="bar">{children}</IconButton>
    )

    expect(queryByLabelText('bar')).toBeInTheDocument()
  })

  it('should trigger onClick', () => {
    const onClick = jest.fn()
    const { queryByLabelText } = render(
      <IconButton aria-label="bar" onClick={onClick}>
        {children}
      </IconButton>
    )

    fireEvent.click(queryByLabelText('bar'))

    expect(onClick).toHaveBeenCalled()
  })

  it('should not trigger onClick by default', () => {
    const onClick = jest.fn()
    const { queryByLabelText } = render(
      <IconButton aria-label="bar" onClick={onClick}>
        {children}
      </IconButton>
    )

    expect(onClick).not.toHaveBeenCalled()
  })
})
