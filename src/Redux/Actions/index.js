const LOGIN = 'LOGIN';

const LoginAction = (email) => (
  ({
    type: LOGIN,
    payload: {
      email,
    },
  })
);

export default LoginAction;
