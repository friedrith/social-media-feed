type Props = {
  onSubmit: () => void
  children: React.ReactNode
}

const Form = ({ onSubmit, children }: Props) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit()
      }}
    >
      {children}
    </form>
  )
}

export default Form
