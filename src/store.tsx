import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Features/userSlice';

const store = configureStore({
  reducer: userSlice,
});

export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
