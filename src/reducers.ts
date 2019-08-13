import {combineReducers} from 'redux';
import {ILoginState} from './Login/LoginContainer/login.state';
import {LoginReducer} from './Login';

export interface IState {
  login: ILoginState
}

export default combineReducers({
  login: LoginReducer,
});
