import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/type';

const Menus = () => {
  const dispatch = useDispatch();
  const { list, menuList } = useSelector((state) => state.menuReducer);

  useEffect(() => {
    getMenus();
  }, []);

  console.log('list :', list);
  console.log('menuList :', menuList);

  const getMenus = async () => {
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

  return (
    <div className="container">
      <h1>Menus</h1>
      {menuList.map((menu, id) => (
        <div className="card my-2 px-2 w-50" key={id}>
          <p>ID : {menu.id}</p>
          <p>Food Name : {menu.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Menus;
