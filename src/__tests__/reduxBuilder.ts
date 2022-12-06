import User from 'interfaces/User'

class ReduxBuilder {
  state = {
    posts: { archived: [] },
    users: {
      currentUser: null,
    },
  }

  withArchivedPosts(posts: string[]) {
    this.state = {
      ...this.state,
      posts: {
        archived: posts,
      },
    }

    return this
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
