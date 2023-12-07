import { useSelector } from 'react-redux';

const CreateMenu = () => {
  const state = useSelector((state) => state.menuReducer);

  console.log(state.list);

  return (
    <div className="container">
      <h1>Create Menu</h1>
    </div>
  );
};

export default CreateMenu;
