import User, { UserAuth } from 'interfaces/User'
import fetcher from 'utils/fetcher'

export const login = async ({ email, password }: UserAuth): Promise<User> => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetcher('/api/users', {
    method: 'POST',

    body: JSON.stringify({ email, password }),
  })

  return response
}
