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
    setFillteredTimeline(timeline.filter(t => t.username.includes(searchValue)))
  }, [searchValue])

  return (
    <div>
      <TopBar />
      <h1>Search:</h1>
      <StyledInput value={searchValue} onChange={event => setSearchValue(event.target.value)} />
      { fillteredTimeline !== '' ? <ListTweets list={fillteredTimeline}/> : ''}
      <NavBar page="search"/>
    </div>
  );
};

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

export default Search