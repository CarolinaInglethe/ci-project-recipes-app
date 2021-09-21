const LOGIN = 'LOGIN';

const Login = (email, password) => (
  ({
    type: LOGIN,
    payload: {
      email,
      password,
    },
  })
);

export default Login;
