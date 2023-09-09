import styled from 'styled-components';

export const Panel = styled.div`
  overflow-y: scroll;
  height: 663px;
`;

export const PanelCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.6s;
  }
`;

export const CardName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #FFF;
`;

export const CardTime = styled.p`
  font-size: 12px;
  color: #7CFC00;
  margin-bottom: 5px;
`;

export const CardAddress = styled.p`
  font-size: 15px;
  color: #FFF;
  margin-bottom: 10px;
`;

export const CardURL = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #FFF;
`;
export const Wrapper = styled.div`
  position: absolute;
  padding-top: 60px;
  top: 0;
  right: 0;
  height: 100vh;
  background: #000;
  width: 280px;
  z-index: 10;
  overflow: hidden;
`;

export const Button = styled.button`
  margin: 10px 0 5px 0;
  border: 1px solid #D3D3D3;
  max-width: 135px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  color: #000;
  font-size: 12px;
  &:hover {
    background: #000;
    color: #FFF;
    transition: 0.7s all;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding: 5px 8px 10px 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddToFavourite = styled.button`
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #FFF;
  &:hover {
    background: #000;
    color: #FFF;
    transition: 0.6s all;
  }
`;
