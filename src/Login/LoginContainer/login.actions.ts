import {createAction} from 'redux-actions';
import {CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE} from './login.constants';

export const changeEmailValue = createAction(CHANGE_EMAIL_VALUE);
export const changePasswordValue = createAction(CHANGE_PASSWORD_VALUE);
