import User from 'interfaces/User'

class ReduxBuilder {
  state = {
    posts: { archived: [] },
    users: {
      currentUser: null,
    },
  }

  withCurrentUser(currentUser: User | null) {
    this.state = {
      ...this.state,
      users: {
        currentUser,
      },
    }

    return this
  }

  build() {
    return this.state
  }
}

export const aState = () => new ReduxBuilder()
