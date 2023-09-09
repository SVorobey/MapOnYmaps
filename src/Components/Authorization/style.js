/* eslint-disable no-use-before-define */
import styled from 'styled-components';

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 19;
  display: none;
  &.active_block {
    display: block;
    transition: 1s all;
  }
`;

export const UnderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 19;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.6;
  }
`;

export const AuthForm = styled.form`
  position: absolute;
  width: 300px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  padding: 35px;
  background: #FFF;
  border-radius: 10px;
`;

export const Input = styled.input`
  color: #000;
  background: #f7f7f7;
  opacity: 1;
  border: 2px solid #000;
  margin-bottom: 12px;
  border-radius: 10px;
  font-size: 14px;
  padding: 5px 10px;
  &::placeholder {
    color: #000;
    font-weight: 400;
  }
`;

export const Submit = styled.button`
  padding: 8px;
  min-width: 95px;
  color: #000;
  border: 2px solid #000;
  background: #f7f7f7;
  border-radius: 15px;
  &:hover {
    background: #000;
    color: #FFF;
    transition: 0.6s all;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #000;
  margin-top: 5px;
`;

export const LogIn = styled.button`
  font-size: 13px;
  font-weight: 400;
  color: #01f;
  background: transparent;
  border: none;
  margin-left: 3px;
`;

export const CloseForm = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 19;
  cursor: pointer;
  width: 15px;
  height: 15px;
  &::after {
    content: "";
    width: 15px;
    height: 1px;
    background: #000;
    transform: rotate(45deg);
    display: block;
  }
  &::before {
    content: "";
    width: 15px;
    height: 1px;
    background: #000;
    transform: rotate(-45deg) translate(-1px,1px);
    display: block;
  }
  &:hover::before {
    transform: rotate(135deg) translate(1px,-1px);
    transition: 0.3s all;
  }
  &:hover::after {
    transform: rotate(225deg);
    transition: 0.3s all;
  }
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Welcome = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: italic; 
  margin: 10px 0 10px 0;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LogOut = styled.button`
  font-size: 14px;
  font-weight: 400;
  width: 140px;
  height: 35px;
  background: #000;
  border: 1px solid #000;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background: #FFF;
    color: #000;
    transition: 0.7s all; 
  }
`;
