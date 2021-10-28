import React from 'react';
import './App.css';
import Routes from "./config/routes";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./config/globalStyle";
import { darkTheme } from './config/themes'

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Routes></Routes>
    </ThemeProvider>
  )
};