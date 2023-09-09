/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  LogIn, Input, Submit, Text,
} from './style';
import handleChange from '../../Helpers/Authorization/handleChange';
import inputs from './inputs';
import handleSignUp from '../../Helpers/Authorization/handleSignUp';
import handleLogIn from '../../Helpers/Authorization/handleLogIn';

// eslint-disable-next-line max-len
export default function LogInForm({
  isLoginForm, username, email, password, setUsername, setEmail, setPassword, setShowBlock,
  setIsLoginForm, setUser, setIsAuthorized,
}) {
  const handleToggleForm = () => {
    setIsLoginForm((prevValue) => !prevValue);
  };
  const handleRegistration = () => {
    handleSignUp(email, password, username, setUser, setEmail, setPassword, setUsername);
    handleToggleForm();
  };
  /* const handleLoginned = () => {
    try {
      dispatch(setLogin({ email, password }));
      setShowBlock('');
      setIsAuthorized(true);
    } catch (error) {
      setIsAuthorized(false);
    }
  }; */
  return (
    <>
      {!isLoginForm && (
        <Input
          placeholder="Username"
          onChange={(e) => handleChange(e, 'username', setUsername, setEmail, setPassword)}
          value={username}
          type="text"
        />
      )}
      {inputs.map((item) => (
        item.id !== 'username' && (
          <Input
            key={item.id}
            placeholder={item.placeholder}
            onChange={(e) => handleChange(e, item.id, setUsername, setEmail, setPassword)}
            value={
              item.id === 'email' ? email
                : item.id === 'password' ? password
                  : ''
            }
            type={
              item.id === 'email' ? 'text'
                : item.id === 'password' ? 'password'
                  : 'text'
            }
          />
        )
      ))}
      {isLoginForm ? (
        <>
          <Submit type="button" onClick={() => handleLogIn(setShowBlock, setIsAuthorized)}>
            Войти
          </Submit>
          <Text>
            Нет аккаунта?
            <LogIn type="button" onClick={handleToggleForm}>
              Зарегистрироваться
            </LogIn>
          </Text>
        </>
      ) : (
        <>
          <Submit type="button" onClick={handleRegistration}>
            Зарегистрироваться
          </Submit>
          <Text>
            Уже есть аккаунт?
            <LogIn type="button" onClick={handleToggleForm}>
              Войти
            </LogIn>
          </Text>
        </>
      )}
    </>
  );
}
