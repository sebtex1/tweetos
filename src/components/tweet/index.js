import React, { useState } from 'react';
import styled from 'styled-components';
import { Retweet } from '@styled-icons/evil/Retweet';
import { Chat1 } from '@styled-icons/remix-line/Chat1';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';

const Tweet = (props) => {

  const [tweetInfos, setTweetInfos] = useState(props.infos)

  const changeButtonStatus = (key, value) => {
    setTweetInfos({...tweetInfos, [key]: value})
    // if (key === 'isLike') {
    //   if (value === 'true') {
    //     setTweetInfos({...tweetInfos, nbLikes: tweetInfos.nbLikes + 1})
    //   } else {
    //     setTweetInfos({...tweetInfos, nbLikes: tweetInfos.nbLikes - 1})
    //   }
    // } else if (key === 'isRetweet') {
    //   if (value === 'true') {
    //     setTweetInfos({...tweetInfos, nbRetweets: tweetInfos.nbRetweets + 1})
    //   } else {
    //     setTweetInfos({...tweetInfos, nbRetweets: tweetInfos.nbRetweets - 1})
    //   }
    // } else if (key === 'isChat') {
    //   if (value === 'true') {
    //     setTweetInfos({...tweetInfos, nbChats: tweetInfos.nbChats + 1})
    //   } else {
    //     setTweetInfos({...tweetInfos, nbChats: tweetInfos.nbChats - 1})
    //   }
    // }
    if (key === 'isLike' && value === true) {
      const likedTimeline = JSON.parse(localStorage.getItem('likedTweets'))
      if (likedTimeline !== null) {
        localStorage.setItem('likedTweets', JSON.stringify([...likedTimeline, tweetInfos]))
      } else {
        localStorage.setItem('likedTweets', JSON.stringify([tweetInfos]))
      }
    }
    console.log(tweetInfos)
  }

  return (
    <TweetDiv>
      <TweetInfo>
        <UsernameText>{tweetInfos.username}</UsernameText>
        <TweetInfos>{tweetInfos.usernameTag}</TweetInfos>
        <Separateur>&#183;</Separateur>
        <TweetInfos>{tweetInfos.timePosted}</TweetInfos>
      </TweetInfo>
      <TweetContent>{tweetInfos.content}</TweetContent>
      <ToggleButtons>
        { tweetInfos.isChat ? <ChatIconActive onClick={() => changeButtonStatus('isChat', false)}/> : <ChatIcon onClick={() => changeButtonStatus('isChat', true)}/>}
        { tweetInfos.isChat ? <NbChatActive>{tweetInfos.nbChats}</NbChatActive> : <NbChat>{tweetInfos.nbChats}</NbChat>}
        { tweetInfos.isRetweet ? <RetweetIconActive onClick={() => changeButtonStatus('isRetweet', false)} /> : <RetweetIcon onClick={() => changeButtonStatus('isRetweet', true)}/>}
        { tweetInfos.isRetweet ? <NbRetweetActive>{tweetInfos.nbRetweets}</NbRetweetActive> : <NbRetweet>{tweetInfos.nbRetweets}</NbRetweet>}
        { tweetInfos.isLike ? <LikeIconActive onClick={() => changeButtonStatus('isLike', false)} /> : <LikeIcon onClick={() => changeButtonStatus('isLike', true)} />}
        { tweetInfos.isLike ? <NbLikeActive>{tweetInfos.nbLikes}</NbLikeActive> : <NbLike>{tweetInfos.nbLikes}</NbLike>}
      </ToggleButtons>
    </TweetDiv>
  );
};

const TweetInfo = styled.div`
  display: flex;
  width: 100%;
`

const TweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`

const ToggleButtons = styled.div`
  display: flex;
  margin-bottom: 5px;
`

const UsernameText = styled.span`
  margin-left: 10px;
  margin-right: 5px;
  font-weight: bold;
`

const TweetInfos = styled.span`
  color: ${props => props.theme.borderColor};
`

const Separateur = styled.span`
  margin-left: 4px;
  margin-right: 4px;
  color: ${props => props.theme.borderColor};
`

const TweetContent = styled.span`
  margin-left: 11px;
  margin-top: 5px;
  margin-bottom: 5px;
`

const ChatIcon = styled(Chat1)`
  margin-left: 11px;
  width: 7%;
  color: ${props => props.theme.borderColor};
  transform: scaleX(-1);
`

const ChatIconActive = styled(Chat1)`
  margin-left: 11px;
  width: 7%;
  color: ${props => props.theme.secondary};
  transform: scaleX(-1);
`

const NbChat = styled.span`
  margin-top: 5px;
  margin-left: 2px;
  color: ${props => props.theme.borderColor};
`

const NbChatActive = styled.span`
  margin-top: 5px;
  margin-left: 2px;
  color: ${props => props.theme.secondary};
`

const RetweetIcon = styled(Retweet)`
  margin-left: 20px;
  width: 9%;
  color: ${props => props.theme.borderColor};
`

const RetweetIconActive = styled(Retweet)`
  margin-left: 20px;
  width: 9%;
  color: ${props => props.theme.reTweet};
`

const NbRetweet = styled.span`
  margin-top: 5px;
  margin-left: 2px;
  color: ${props => props.theme.borderColor};
`

const NbRetweetActive = styled.span`
  margin-top: 5px;
  margin-left: 2px;
  color: ${props => props.theme.reTweet};
`

const LikeIcon = styled(Heart)`
  margin-left: 20px;
  width: 5%;
  color: ${props => props.theme.borderColor};
`

const LikeIconActive = styled(HeartFill)`
  margin-left: 20px;
  width: 5%;
  color: ${props => props.theme.like};
`

const NbLike = styled.span`
  margin-top: 5px;
  margin-left: 2px;
  color: ${props => props.theme.borderColor};
`

const NbLikeActive = styled.span`
  margin-top: 5px;
  margin-left: 2px;
  color: ${props => props.theme.like};
`

export default Tweet;