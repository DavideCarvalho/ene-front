import {createAction} from 'redux-actions';
import {CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE, SUBMIT_FORM} from './login-container.constants';

export const changeEmailValue = createAction(CHANGE_EMAIL_VALUE);
export const changePasswordValue = createAction(CHANGE_PASSWORD_VALUE);
export const submitForm = createAction(SUBMIT_FORM);
