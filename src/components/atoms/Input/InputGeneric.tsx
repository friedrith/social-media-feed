import classNames from 'classnames'

export type Props = {
  value?: string
  type?: string
  onChange?: (value: string) => void
  placeholder?: string
  id?: string
  className?: string
  name?: string
}

const InputGeneric = ({
  type = 'text',
  value = '',
  onChange = () => {},
  placeholder = '',
  id = '',
  className = '',
  name = '',
}: Props) => {
  return (
    <input
      id={id}
      name={name}
      className={classNames(
        'outline-none bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        className
      )}
      type={type}
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder}
    />
  )
}

export default InputGeneric
