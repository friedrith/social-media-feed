import User from 'interfaces/User'

export const persistUser = (user: User) =>
  localStorage.setItem('user', JSON.stringify(user))

export const loadUser = () => {
  try {
    const persistedUSer =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('user'))
        : null

    return (persistedUSer as User)?.id ? persistedUSer : null
  } catch (error) {
    return null
  }
}
