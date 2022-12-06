import LoginPopup from 'components/organisms/LoginPopup'
import useCurrentUser from 'features/users/useCurrentUser'

type Props = {
  children: React.ReactNode
}

const AuthenticatedPage = ({ children }: Props) => {
  const currentUser = useCurrentUser()

  return (
    <>
      {children}
      <LoginPopup open={!Boolean(currentUser)} />
    </>
  )
}

export default AuthenticatedPage
