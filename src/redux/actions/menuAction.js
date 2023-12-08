import axios from 'axios';
import { TYPES } from '../type';

export const getMenus = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.mudoapi.tech/menus`);
    const listMenu = res.data.data.Data;

    dispatch({
      type: TYPES.MENUS,
      payload: {
        data: listMenu,
      },
    });
    console.log(listMenu);
  } catch (error) {
    console.log(error);
  }
};
