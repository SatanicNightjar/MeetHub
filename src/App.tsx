import React from 'react';
import './App.css';
import Login from './Login';
import { UserProvider } from './providers/UserProvider';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { logOut } from './services/firebase';
import { Box, ChakraProvider, extendTheme, Heading, ThemeConfig } from "@chakra-ui/react"
import { CreatePage } from './pages/CreatePage';

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config });

function App() {

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Box w='100%' padding='5em 20% 5em 20%'>
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
