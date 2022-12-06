type Props = {
  children: React.ReactNode
}

const MaxWidth = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>
  )
}

export default MaxWidth
