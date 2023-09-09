/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{
  Wrapper, Input, Button, ButtonWrapper, InputWrapper,
} from './style';
import routes from './routes';
import createRoute from '../../Helpers/Map/createRoute';

export default function RoutingTable({
  inputFrom, setInputFrom, inputTo, setInputTo, map, ymaps,
}) {
  const [selectRoute, setSelectRoute] = useState('');

  const handleClick = (route) => {
    createRoute(route, map, ymaps, inputTo, inputFrom);
    setSelectRoute(route);
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        {
          routes.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleClick(item.route)}
              className={item.route === selectRoute ? 'active_category' : ''}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Button>
          ))
        }
      </ButtonWrapper>
      <InputWrapper>
        <Input placeholder="Откуда" onChange={(e) => setInputFrom(e.target.value)} value={inputFrom} />
        <Input placeholder="Куда" onChange={(e) => setInputTo(e.target.value)} value={inputTo} />
      </InputWrapper>
    </Wrapper>
  );
}
