/* eslint-disable react/prop-types */
import React from 'react';
import {
  WelcomeWrapper, Welcome, Username, LogOut,
} from './style';

// eslint-disable-next-line react/prop-types
export default function WelcomeBlock({ setIsAuthorized }) {
  return (
    <WelcomeWrapper>
      <Welcome>
        Здравствуйте,
      </Welcome>
      <Username>
        Penis
      </Username>
      <LogOut type="button" onClick={() => setIsAuthorized(false)}>
        Выйти из аккаунта
      </LogOut>
    </WelcomeWrapper>
  );
}
