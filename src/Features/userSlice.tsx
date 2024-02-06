import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../State/Reducer/reducers';

export interface UserInfo {
  userId: string;
  name: string;
  email: string;
  password: string;
  age: number | null | undefined;
  website: string;
  introduction: string;
}

interface UserState {
  currentUser: UserInfo | null;
  userList: UserInfo[];
  viewedUsers: UserInfo[];
}

const initialState: UserState = {
  currentUser: null,
  userList: [],
  viewedUsers: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    addUser: (state, action: PayloadAction<UserInfo>) => {

      console.log('USER SLICE => Adding user:', action.payload);
      state.userList.push(action.payload);
      return state
    },
    updateUser: (state, action: PayloadAction<{ userId: string; updatedUser: UserInfo }>) => {
      const { userId, updatedUser } = action.payload;
      state.userList = state.userList.map((user) =>
        user.userId === userId ? { ...user, ...updatedUser } : user
      );
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.userList = state.userList.filter((user) => user.userId !== action.payload);
    },
    viewUsers: (state) => {
      state.viewedUsers = [...state.userList];
      console.log('USER SLICE => Viewing user:', state);
    },

  },
});

export const {
  login,
  logout,
  addUser,
  updateUser,
  deleteUser,
  viewUsers,
} = userSlice.actions;

export const selectUserList = (state: RootState) => state.user?.userList ?? [];

export const selectCurrentUser = (state: RootState) => state.user?.currentUser;
export const selectViewedUsers = (state: RootState) => state.user.viewedUsers; 


export default userSlice.reducer;
