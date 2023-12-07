import { TYPES } from '../type';

const menuState = {
  list: [
    {
      id: 1,
      name: 'Soto',
    },
    {
      id: 2,
      name: 'Mie Ayam',
    },
  ],
  menuList: [],
};

export const menuReducer = (state = menuState, action) => {
  switch (action.type) {
    case TYPES.MENUS:
      return {
        ...state,
        menuList: action.payload.data,
      };

    default:
      return state;
  }
};
