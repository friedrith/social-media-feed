import React from 'react'
import classNames from 'classnames'

type Props = {
  'aria-label': string
  children: React.ReactNode
  onClick?: (event: React.SyntheticEvent) => void
  className?: string
}

const IconButton = ({
  children,
  'aria-label': ariaLabel,
  onClick = () => {},
  className,
}: Props) => {
  return (
    <button
      onClick={onClick}
      id="theme-toggle"
      type="button"
      aria-label={ariaLabel}
      className={classNames(
        'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5',
        className
      )}
    >
      {children}
    </button>
  )
}

export default IconButton
