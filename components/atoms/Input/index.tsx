import classNames from 'classnames'
import InputGeneric, { Props } from './InputGeneric'

const Input = {
  Text: (props: Props) => <InputGeneric type="text" {...props} />,
  Email: (props: Props) => <InputGeneric type="email" {...props} />,
  Password: (props: Props) => <InputGeneric type="password" {...props} />,
}

export default Input
