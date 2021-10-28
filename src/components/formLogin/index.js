import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import icon from '../../assets/tweetos_blue.ico';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const FormLogin = () => {
  const history = useHistory()

  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [usernameFocus, setUsernameFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [usernameFilled, setUsernameFilled] = useState(false)
  const [passwordFilled, setPasswordFilled] = useState(false)

  const tweetSound = new Audio('/twitter-sound-effect.mp3')

  const loggedSound = () => {
    tweetSound.play()
  }

  const connection = (e, params) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: params
    }).then((response) => {
      console.log(response)
      console.log(response.headers['x-access-token'])
      if (response.headers['x-access-token'] !== undefined) {
        localStorage.setItem('token', response.headers['x-access-token'])
        localStorage.setItem('username', usernameValue)
        loggedSound()
        history.push('/home')
      } else {
        alert('Un paramètre est manquant dans la connexion')
      }
    })
  }

  useEffect(() => {
    usernameValue === '' ? setUsernameFilled(false) : setUsernameFilled(true)
    passwordValue === '' ? setPasswordFilled(false) : setPasswordFilled(true)
  }, [usernameValue, passwordValue])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      history.push('/home')
    }
  }, [])

  return (
    <Container>
      <FormDiv>
        <IconTweetos src={icon}/>
        <TextLogin>Se connecter à Tweetos</TextLogin>
        <StyledForm onSubmit={(e) => connection(e, { username: usernameValue, password: passwordValue })}>
          <StyledLabel focus={usernameFocus} filled={usernameFilled}>Username</StyledLabel>
          <StyledInput autoComplete="off" type="text" name="username" value={usernameValue} onChange={event => setUsernameValue(event.target.value)} onFocus={() => setUsernameFocus(true)} onBlur={() => setUsernameFocus(false)} />
          <StyledLabel focus={passwordFocus} filled={passwordFilled}>Password</StyledLabel>
          <StyledInput type="password" name="password" value={passwordValue} onChange={event => setPasswordValue(event.target.value)} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} />
          <StyledButton type="submit">Connexion</StyledButton>
        </StyledForm>
      </FormDiv>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormDiv =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid; */
  width: fit-content;
`

const IconTweetos = styled.img`
  width: 15%;
  margin: 5px;
`

const TextLogin = styled.span`
  font-weight: bold;
  margin: 5px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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

const StyledLabel = styled.label`
  width: 50px;
  position: relative;
  color: ${props => props.focus ? props.theme.secondary : 'grey'};
  top: ${props => props.focus || props.filled ? '20px' : '45px'};
  left: 5px;
  transition: top 500ms;
`

const StyledButton = styled.button`
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  padding: 10px 10px 10px 5px;
  border: none;
  border-radius: 16px;
`

export default FormLogin;