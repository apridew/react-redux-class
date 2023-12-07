import { TYPES } from '../type';

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };

    default:
      return state;
  }
};
