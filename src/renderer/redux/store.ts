import { configureStore } from '@reduxjs/toolkit';
import reducer from 'renderer/redux/rootReducer';

// const rootReducer = { cpu, general };

const store = configureStore({
  reducer,
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
