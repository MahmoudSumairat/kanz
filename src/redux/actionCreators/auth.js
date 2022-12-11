import {LOGIN, LOGOUT} from '../actions/auth';

export const loginAction = payload => ({type: LOGIN, payload});
export const logoutAction = () => ({type: LOGOUT});
