/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  AuthWrapper, AuthForm, UnderWrapper, CloseForm,
} from './style';
import LogInForm from './LogInForm';
import WelcomeBlock from './WelcomeBlock';

export default function Authorization({
  username, setUsername, password, setPassword, email, setEmail, setUser, showBlock, setShowBlock,
  user,
}) {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <AuthWrapper
      className={showBlock ? 'active_block' : ''}
    >
      <UnderWrapper
        onClick={() => setShowBlock('')}
      />
      <AuthForm>
        <CloseForm onClick={() => setShowBlock('')} />
        {isAuthorized ? (
          <WelcomeBlock
            setIsAuthorized={setIsAuthorized}
            user={user}
          />
        ) : (
          <LogInForm
            isLoginForm={isLoginForm}
            username={username}
            email={email}
            password={password}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setShowBlock={setShowBlock}
            setIsLoginForm={setIsLoginForm}
            setUser={setUser}
            setIsAuthorized={setIsAuthorized}
          />
        )}
      </AuthForm>
    </AuthWrapper>
  );
}
