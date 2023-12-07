const userState = {
  userList: [
    {
      id: 1,
      name: 'Dewi',
      email: 'dewi@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Diana',
      email: 'diana@gmail.com',
      password: '123456',
    },
    {
      id: 3,
      name: 'Rezky',
      email: 'rezky@gmail.com',
      password: '123456',
    },
  ],
};

export const userReducer = (state = userState) => {
  return state;
};
