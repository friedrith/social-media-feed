type Props = {
  children: React.ReactNode
}

const PostListContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-col space-y-14 sm:space-y-10 py-10">
      {children}
    </div>
  )
}

export default PostListContainer
