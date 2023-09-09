import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Column, Text, Wrapper, IconWrapper,
} from './style';
import categories from './categories';
import getRequest from '../../Helpers/Search/getRequest';

// eslint-disable-next-line react/prop-types
export default function Categories({ setData, setInputRequest, inputRadius }) {
  const categoryClick = (query) => {
    getRequest(query, setData, inputRadius);
    setInputRequest(query);
  };
  return (
    <Wrapper>
      {categories.map((item) => (
        <Column key={item.id} type="button" onClick={() => categoryClick(item.description)}>
          <IconWrapper>
            <FontAwesomeIcon
              icon={item.icon}
            />
          </IconWrapper>
          <Text>{item.description}</Text>
        </Column>
      ))}
    </Wrapper>
  );
}
