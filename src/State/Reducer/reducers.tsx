
import { combineReducers } from 'redux';
//import userReducer from './userReducer';
import authReducer from '../../Auth/authReducer';
import userSlice from '../../Features/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userSlice,
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

