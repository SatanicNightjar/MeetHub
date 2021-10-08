import React from 'react';
import './App.css';
import { UserProvider } from './providers/UserProvider';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Box, ChakraProvider, extendTheme, Heading, ThemeConfig } from "@chakra-ui/react"
import { CreatePage } from './pages/CreatePage';
import { Debug } from './components/Debug';

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
        <Heading size='2xl' orientation='horizontal'>MeetHub</Heading>
        
          <HashRouter>
            <Switch>
              <Route path='/create' component={CreatePage} />
              <Route path='/' component={MainPage}/>
            </Switch>
          </HashRouter>
          
        </Box>

        <Debug />
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
