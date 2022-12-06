import classNames from 'classnames'

type Props = {
  htmlFor: string
  className?: string
  children?: React.ReactNode
  required?: boolean
}

const Label = ({ htmlFor, className, children, required }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
        className
      )}
    >
      {children}
      {required && '*'}
    </label>
  )
}

export default Label
