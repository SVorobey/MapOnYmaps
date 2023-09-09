import styled from 'styled-components';

export const LocationButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 20px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #000;
  background: #000;
  color: #FFF;
  &:hover {
    color: #FFA500;
    transition: 0.7s all;
  }
`;

export const SearchButton = styled.button`
  font-size: 17px;
  width: 35px;
  border-radius: 50%;
  height: 35px;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 5px;
  display: flex;
  color: #FFF;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #FFF;
  background: #000;
  &:hover {
    background: #FFF;
    color: #000;
    transition: 0.6s all;
  }
`;

export const SearchInput = styled.input`
  font-size: 16px;
  color: #FFF;
  margin-top: 10px;
  border-radius: 8px;
  outline: none;
  padding: 5px 15px 5px 10px;
  border: 1px solid #FFF;
  background: #000;
`;

export const SearchForm = styled.form`
  position: absolute;
  display: flex;
  top: 0;
  right: 15px;
  z-index: 11;
`;

export const RadiusInput = styled.input`
  width: 72px;
  background: #000;
  border: 1px solid #FFF;
  color: #FFF;
  margin: 10px 10px 0 0;
  padding: 5px;
  text-align: center;
  &::placeholder {
    color: #FFF;
    font-weight: 400;
  }
  border-radius: 10px;
`;

export const User = styled.button`
  width: 45px;
  height: 45px;
  font-size: 30px;
  color: #000;
  border-radius: 10px;
  background: #FFF;
  border: 1px solid #000;
  position: absolute;
  bottom: 10px;
  left: 5px;
  z-index: 12;
`;
