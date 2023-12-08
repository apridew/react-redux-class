import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../redux/actions/menuAction';

const Menus = () => {
  const dispatch = useDispatch();
  const { list, menuList } = useSelector((state) => state.menuReducer);

  useEffect(() => {
    dispatch(getMenus());
  }, []);

  console.log('list :', list);
  console.log('menuList :', menuList);

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
