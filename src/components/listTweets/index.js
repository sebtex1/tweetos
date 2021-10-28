import React from 'react';
import styled from 'styled-components';
import Tweet from '../tweet';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

const ListTweets = (props) => {
  return (
    <Container>
      {props.list?.sort((a, b) => b.id - a.id).map(x => {
        return(
          <OneTweet key={x.id}>
            { x.profilePicture ? <ProfilePicture src={x.profilePicture}/> : <AccountIcon />}
            <Tweet infos={x}/>
          </OneTweet>
        )
      })}
      <NoMoreTweet>{props.page === 'home' ? 'Pas de nouveau tweet dans votre TL' : 'Vous pouvez rechercher ici des users et leurs tweets'}</NoMoreTweet>
      <IconTweetos />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const OneTweet = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};
  margin-bottom: 5px;
`

const ProfilePicture = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
  height: 13%;
  width: 13%;
  border-radius: 50%;
`

const AccountIcon = styled(AccountCircle)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
  height: 15%;
  width: 15%;
`

const NoMoreTweet = styled.span`
  margin-top: 20px;
  color: ${props => props.theme.borderColor};
`

const IconTweetos = styled(Twitter)`
  margin-top: 10px;
  margin-bottom: 70px;
  width: 10%;
  color: ${props => props.theme.borderColor};
`

export default ListTweets;