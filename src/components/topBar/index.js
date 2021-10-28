import React from 'react';
import styled from 'styled-components';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { Stars } from '@styled-icons/bootstrap/Stars';

const TopBar = () => {
  return (
    <Container>
      <ButtonAccount><AccountIcon /></ButtonAccount>
      <ButtonTweetos><IconTweetos /></ButtonTweetos>
      <ButtonStars><StarsIcon /></ButtonStars>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: 10px;
`

const ButtonAccount = styled.button`
  display: flex;
  background: none;
  justify-content: start;
  color: ${props => props.theme.text};
  border: none;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};
  flex: 1;
`

const ButtonTweetos = styled.button`
  display: flex;
  background: none;
  justify-content: center;
  color: ${props => props.theme.text};
  border: none;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};
  flex: 1;
`

const ButtonStars = styled.button`
  display: flex;
  background: none;
  justify-content: end;
  color: ${props => props.theme.text};
  border: none;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};
  flex: 1;
`

const IconTweetos = styled(Twitter)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 20%;
  color: ${props => props.theme.secondary};
`

const AccountIcon = styled(AccountCircle)`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 20%;
`

const StarsIcon = styled(Stars)`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 20%;
`

export default TopBar;