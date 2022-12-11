import {LOGIN, LOGOUT} from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  token: null,
  userId: null,
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {
        ...initialState,
        isAuthenticated: true,
        token: payload.token,
        userId: payload.userId,
      };
    case LOGOUT:
      return {
        ...initialState,
        isAuthenticated: false,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
