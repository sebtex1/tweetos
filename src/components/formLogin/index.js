import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/tweetos_blue.ico';

const index = () => {
  return (
    <FormDiv>
      <IconTweetos src={icon}/>
      <TextLogin>Se connecter à Tweetos</TextLogin>
    </FormDiv>
  );
};

const FormDiv =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`

const IconTweetos = styled.img`
  width: 10%;
  height: 10%;
`

const TextLogin = styled.span`
  font-weight: bold;
  margin: 10px;
`

export default index;