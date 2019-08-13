import { LoginSagas } from "./Login";
import { fork, all } from 'redux-saga/effects';

export default function* () {
  yield all([
    ...Object.values(LoginSagas),
  ].map(fork));
}
