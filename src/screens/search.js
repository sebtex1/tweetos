import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import TopBar from '../components/topBar';
import styled from 'styled-components';
import ListTweets from '../components/listTweets';

const Search = () => {

  const [searchValue, setSearchValue] = useState('')
  const [timeline, setTimeline] = useState([])
  const [fillteredTimeline, setFillteredTimeline] = useState('')

  useEffect(() => {
    setTimeline(JSON.parse(localStorage.getItem('timeline')))
    setFillteredTimeline(timeline.filter(t => t.username.toLowerCase().includes(searchValue.toLowerCase()) || t.content.toLowerCase().includes(searchValue.toLowerCase())))
  }, [searchValue])

  return (
    <div>
      <TopBar />
      <Container>
        <h1>Search:</h1>
        <StyledInput value={searchValue} onChange={event => setSearchValue(event.target.value)} />
      </Container>
      { fillteredTimeline !== '' ? <ListTweets list={fillteredTimeline} page="search" /> : ''}
      <NavBar page="search"/>
    </div>
  );
};

const Container = styled.div`
  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};
`

const StyledInput = styled.input`
  background: none;
  color: ${props => props.theme.text};
  font-size: 18px;
  border: none; 
  margin-bottom: 10px;
  border-radius: 0;
  border-bottom: 1px solid grey;
  transition: border-bottom 100ms all;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.secondary};
  }
`

export default Search