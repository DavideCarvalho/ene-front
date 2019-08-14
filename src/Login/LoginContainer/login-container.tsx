import React, {ChangeEvent, useCallback} from 'react'
import {Input} from "../../Components/Input";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {changeEmailValue, changePasswordValue, submitForm} from "./login-container.actions";

const LoginContainer = () => {
  const email: string = useSelector<IState, string>((state) => state.login.email);
  const password: string = useSelector<IState, string>((state) => state.login.password);
  const dispatch = useDispatch();

  const changeEmailHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => dispatch(changeEmailValue({email: event.target.value})),
    [dispatch]
  );

  const changePasswordHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => dispatch(changePasswordValue({password: event.target.value})),
    [dispatch]
  );

  const submitFormHandler = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(submitForm({ email: email, password: password }))
    },
    [dispatch, email, password]
  );

  return (
    <div className={'flex-container'}>
      <form className={'flex-row'} onSubmit={submitFormHandler}>
        <legend>Login</legend>
        <fieldset>
          <Input type={"text"} value={email}
                 onChange={changeEmailHandler}/>
          <br/>
          <Input type={"password"} value={password} autoComplete={"off"}
                 onChange={changePasswordHandler}/>
          <br/>
          <button type={"submit"}>Entrar</button>
        </fieldset>
      </form>
    </div>
  )
};

export default LoginContainer;
