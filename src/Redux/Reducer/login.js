const LOGIN = 'LOGIN';

export const INITIAL_STATE = {
  email: '',
  password: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload.email,
      password: payload.password,
    };
  default:
    return state;
  }
};

export default loginReducer;
