import LoginReducer from './LoginContainer/login.state';
import { helloSaga } from './LoginContainer/login.saga';
const LoginSagas = {
  helloSaga,
};
export {
  LoginReducer,
  LoginSagas,
};
