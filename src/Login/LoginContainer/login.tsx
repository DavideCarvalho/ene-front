import React, {ChangeEvent, useCallback} from 'react'
import {Input} from "../../Components/Input";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {changeEmailValue, changePasswordValue} from "./login.actions";

const LoginContainer = () => {
  const email: string = useSelector<IState, string>((state) => state.login.email);
  const password: string = useSelector<IState, string>((state) => state.login.password);
  const dispatch = useDispatch();

  const changeEmail = useCallback(
    ((event: ChangeEvent<HTMLInputElement>) => dispatch(changeEmailValue({email: event.target.value}))),
    [dispatch]
  );

  const changePassword = useCallback(
    ((event: ChangeEvent<HTMLInputElement>) => dispatch(changePasswordValue({password: event.target.value}))),
    [dispatch]
  );

  return (
    <div className={'flex-container'}>
      <form className={'flex-row'}>
        <legend>Login</legend>
        <fieldset>
          <Input type={"text"} value={email}
                 onChange={changeEmail}/>
          <br/>
          <Input type={"password"} value={password} autoComplete={"off"}
                 onChange={changePassword}/>
          <br/>
          <button type={"submit"}>Entrar</button>
        </fieldset>
      </form>
    </div>
  )
};

export default LoginContainer;
