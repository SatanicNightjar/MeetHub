import React from 'react';
import './App.css';
import Login from './Login';
import { UserProvider } from './providers/UserProvider';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { logOut } from './services/firebase';
import { Box, ChakraProvider, extendTheme, Heading } from "@chakra-ui/react"
import { CreatePage } from './pages/CreatePage';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  }
}

const theme = extendTheme({ colors });

function App() {

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Box w='100%' padding='0 20% 0 20%'>
        <Heading orientation='horizontal'>MeetHub</Heading>
        
          <HashRouter>
            <Switch>
              <Route path='/' component={CreatePage} />
              <Route path='/' component={MainPage}/>
            </Switch>
          </HashRouter>
          <MainPage/>
          <Login />
            <button onClick={logOut}>
              Logout
            </button>
        </Box>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
