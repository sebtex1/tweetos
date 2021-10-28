import React from 'react';
import styled from 'styled-components';
import { HomeCircle } from '@styled-icons/boxicons-regular/HomeCircle';
import { HomeCircle as HomeCircleSolid} from '@styled-icons/boxicons-solid/HomeCircle';
import { Search } from '@styled-icons/evil/Search';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';
import { useHistory } from 'react-router-dom';


const NavBar = (props) => {
  const history = useHistory()

  return (
    <Container>
      <Button onClick={() => history.push('/home')}>{props.page === 'home' ? <HomeIconSolid /> : <HomeIcon />}</Button>
      <Button onClick={() => history.push('/search')}>{props.page === 'search' ? <SearchIconSolid /> : <SearchIcon />}</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: ${props => props.theme.primary};
`

const Button = styled.button`
  display: flex;
  background: none;
  justify-content: center;
  color: ${props => props.theme.text};
  border: none;
  border-top: 1px solid;
  border-color: ${props => props.theme.borderColor};
  flex: 1;
`

const HomeIcon = styled(HomeCircle)`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 15%;
`

const HomeIconSolid = styled(HomeCircleSolid)`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 15%;
`

const SearchIcon = styled(Search)`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 15%;
`

const SearchIconSolid = styled(SearchOutline)`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 15%;
`

export default NavBar;