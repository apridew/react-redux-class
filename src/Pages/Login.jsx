import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TYPES } from '../redux/type';
import { useState } from 'react';

const Login = () => {
  const { isAuth } = useSelector((state) => state.authReducer);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [success, setsuccess] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setName(e.target.value);
    setError('');
    setsuccess('');

    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError('');
    setsuccess('');

    console.log(e.target.value);
  };

  const handleSubmit = async () => {
    const bodyPayload = {
      username: name,
      password: password,
    };

    try {
      const res = await axios.post(`https://api.mudoapi.tech/login`, bodyPayload);

      localStorage.setItem('accessToken', res.data.data.token);
      // console.log(res.data.data.token);

      dispatch({
        type: TYPES.LOGIN,
        payload: {
          isAuth: true,
        },
      });

      const successMessage = res.data.message;
      // console.log(res.data.message);

      setsuccess(successMessage);

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      // console.log(err.response.data.message);
      const errorMessage = err.response.data.message;
      setError(errorMessage + ' !');
    }
  };
  return (
    <>
      <div className="container form">
        <h1>Log In</h1>
        <label className="fw-bold">Username</label>
        <input onChange={handleUsername} type="text" placeholder="input your username" />
        <label className="fw-bold">Password</label>
        <input onChange={handlePassword} placeholder="input your password" />
        <button
          disabled={!(name && password) || isAuth}
          onClick={handleSubmit}
          className={isAuth ? 'btn btn-danger' : 'btn btn-primary'}
        >
          {isAuth ? (
            <>
              <span className="spinner-border spinner-border-sm"></span>
              <span> Loading...</span>
            </>
          ) : (
            'Submit'
          )}
        </button>
        {isAuth ? (
          <p className="text-success text-center fw-bold">{success}</p>
        ) : (
          <p className="text-danger text-center fw-bold">{error}</p>
        )}
      </div>
    </>
  );
};

export default Login;
