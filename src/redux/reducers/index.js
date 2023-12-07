import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { menuReducer } from './menuReducer';
import { userReducer } from './userReducers';

export const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  userReducer,
});
