/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData, setUser } from '../../Store/Slices/userSlice';
import {
  WelcomeWrapper, Welcome, Username, LogOut,
} from './style';
// eslint-disable-next-line react/prop-types
export default function WelcomeBlock({ setIsAuthorized }) {
  const dispatch = useDispatch();
  const user = useSelector(userData);
  const logOut = () => {
    setIsAuthorized(false);
    localStorage.removeItem('Token');
    dispatch(setUser({
      email: null,
      userName: null,
      token: null,
    }));
  };
  return (
    <WelcomeWrapper>
      <Welcome>
        Здравствуйте,
      </Welcome>
      <Username>
        {user}
      </Username>
      <LogOut type="button" onClick={logOut}>
        Выйти из аккаунта
      </LogOut>
    </WelcomeWrapper>
  );
}
