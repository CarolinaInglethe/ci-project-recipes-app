const LOGIN = 'LOGIN';

export const INITIAL_STATE = {
  email: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload.email,
    };
  default:
    return state;
  }
};

export default loginReducer;
