import { useAppSelector } from 'hooks/redux'

import { getCurrentUser } from './users.slice'

const useCurrentUser = () => {
  const user = useAppSelector(getCurrentUser)

  return user
}

export default useCurrentUser
