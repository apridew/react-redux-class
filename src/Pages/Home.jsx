import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/type';

const Home = () => {
  // const state = useSelector((state) => state);
  const { userReducer, authReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isAuth = authReducer.isAuth;
  const usersList = userReducer.userList;

  console.log(userReducer);

  const handleLogin = () => {
    dispatch({
      type: TYPES.LOGIN,
      payload: {
        isAuth: true,
      },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: TYPES.LOGOUT,
      payload: {
        isAuth: false,
      },
    });
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <p>{isAuth ? 'Sudah Log In' : 'Belum Log In'}</p>

      {!isAuth ? (
        <button className="btn btn-primary mb-2" onClick={handleLogin}>
          Log In
        </button>
      ) : (
        <button className="btn btn-danger mb-2" onClick={handleLogout}>
          Log Out
        </button>
      )}

      {usersList.map((user, id) => (
        <div className="card my-2 px-2 w-50" key={id}>
          <p>ID : {user.id}</p>
          <p> Name : {user.name}</p>
          <p> Email : {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
