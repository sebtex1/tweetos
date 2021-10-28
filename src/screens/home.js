import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import TopBar from '../components/topBar';
import ListTweets from '../components/listTweets';
import styled from 'styled-components';
import { PlusCircleFill } from '@styled-icons/bootstrap/PlusCircleFill';

const Home = () => {

  const [timeline, setTimeline] = useState([])
  const [newTweet, setNewTweet] = useState(false)
  const [newTweetValue, setNewTweetValue] = useState('')

  const createNewTweet = () => {
    const newTweetContent = { id: timeline.length + 1, username: localStorage.getItem('username'), usernameTag: '@Sensei', timePosted: 'now', isChat: false, nbChats: 0, isRetweet: false, nbRetweets: 0, isLike: false, nbLikes: 0, content: newTweetValue, profilePicture: null}
    setTimeline([...timeline, newTweetContent])
    setNewTweet(false)
    setNewTweetValue('')
  }

  useEffect(() => {
    if (timeline.length > 0) {
      localStorage.setItem('timeline', JSON.stringify(timeline))
    }
  }, [timeline])

  useEffect(() => {
    if (localStorage.getItem('timeline') === null) {
      const timelineFromSkratch = [{ id: 1, username: 'Sasuke', usernameTag: '@Last_Uchiwa', timePosted: '1j', isChat: false, nbChats: 1000, isRetweet: false, nbRetweets: 12345, isLike: false, nbLikes: 10, content: 'Comment tuer son seul ami ?', profilePicture: 'https://media.discordapp.net/attachments/380771174508003339/902643201242980412/sasukeImg.png'},
      { id: 2, username: 'Naruto', usernameTag: '@UzumakiOneOfAKind', timePosted: '1j', isChat: false, nbChats: 2, isRetweet: false, nbRetweets: 5, isLike: false, nbLikes: 12345, content: 'Fais pas le con sasuk !!!! Reviens au village on va se faire des bons ramen !', profilePicture: 'https://cdn.discordapp.com/attachments/380771174508003339/902646070675378226/naruto.png'},
      { id: 3, username: 'Sakura', usernameTag: '@Sakura_noSauce', timePosted: '1j', isChat: false, nbChats: 0, isRetweet: false, nbRetweets: 0, isLike: false, nbLikes: 0, content: "@Last_Uchiwa je sais que t'essaie de faire le mec mystérieux mais ptn reviens au village au lieu de trainer avec un serpent chelou", profilePicture: 'https://cdn.discordapp.com/attachments/380771174508003339/902647631132635196/sakura.png'},
      { id: 4, username: 'Guy', usernameTag: "@Door's_key", timePosted: '18h', isChat: false, nbChats: 0, isRetweet: false, nbRetweets: 2, isLike: false, nbLikes: 500, content: "Mes seuls amis sont un mec masqué et mon disciple me ressemble (gigas sourcils)", profilePicture: 'https://cdn.discordapp.com/attachments/380771174508003339/902986211176644678/guy.png'},
      { id: 5, username: 'Kuuby', usernameTag: "@KuubyThe9th", timePosted: '6h', isChat: false, nbChats: 10000, isRetweet: false, nbRetweets: '5466', isLike: false, nbLikes: '200', content: "Wesh ça fart à Konoha depuis le temps ?", profilePicture: 'https://cdn.discordapp.com/attachments/380771174508003339/902680494016176168/Kurama.png'}
      ]
      setTimeline(timelineFromSkratch)
      localStorage.setItem('timeline', JSON.stringify(timelineFromSkratch))
    } else {
      setTimeline(JSON.parse(localStorage.getItem('timeline')))
    }
  }, [])

  return (
    <Container>
      <TopBar />
      { newTweet ?
        <ContainerNewTweet>
          <StyledInput  value={newTweetValue} onChange={event => setNewTweetValue(event.target.value)} ></StyledInput>
          <StyledButton onClick={createNewTweet}>Envoyer</StyledButton>
        </ContainerNewTweet> :
        ''}
      <ListTweets list={timeline} page="home"/>
      {/* permet de faire de nouveaux tweet affichage de l'input tout en haut */}
      <NewTweetIcon onClick={() => setNewTweet(!newTweet)}/>
      <NavBar page="home"/>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`
const ContainerNewTweet = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  margin-right: 10px;
  width: 95%;
  border-color: ${props => props.theme.primary};
`

const NewTweetIcon = styled(PlusCircleFill)`
  display: flex;
  position: fixed;
  width: 14%;
  bottom: 70px;
  right: 10px;
  z-index: 1;
  border-radius: 50%;
  background-color: ${props => props.theme.icon};
  color: ${props => props.theme.secondary};
`

const StyledInput = styled.input`
  background: none;
  color: ${props => props.theme.text};
  font-size: 18px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 10px 10px 5px;
  border-radius: 0;
  border-bottom: 1px solid grey;
  transition: border-bottom 100ms all;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.secondary};
  }
`

const StyledButton = styled.button`
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 75%;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  padding: 10px 10px 10px 5px;
  border: none;
  border-radius: 16px;
  width: 80px;
`

export default Home