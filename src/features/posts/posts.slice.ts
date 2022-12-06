import { createSlice } from '@reduxjs/toolkit'

import User from 'interfaces/User'
import type { AppState } from 'services/store'

export interface PostsState {
  archived: string[]
}

const initialState: PostsState = {
  archived: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    archivePost: (state, action) => {
      state.archived.push(action.payload.id)
    },
  },
})

export const { archivePost } = postsSlice.actions

export const getArchivedPosts = (state: AppState) => state.posts.archived

export default postsSlice.reducer
