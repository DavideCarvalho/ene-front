import {handleActions} from 'redux-actions';
import {CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE} from "./login.constants";

export interface ILoginState {
  email: string,
  password: string,
}

const INITIAL_STATE: ILoginState = {
  email: '',
  password: '',
};

export default handleActions({
  [CHANGE_EMAIL_VALUE]: (state, {payload}) => ({
    ...state,
    email: payload.email
  }),
  [CHANGE_PASSWORD_VALUE]: (state, {payload}) => ({
    ...state,
    password: payload.password
  }),
}, INITIAL_STATE);
