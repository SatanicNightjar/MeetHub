import { Button } from '@chakra-ui/button';
import { Box, Center, Divider } from '@chakra-ui/layout';
import React, { useContext, useEffect, useState } from 'react';
import { Login } from '../Login';
import { UserContext } from '../providers/UserProvider';
import { getAllEvents, getOwnEvents } from '../services/database';
import { logOut, signInAnonymously } from '../services/firebase';

export const Debug = () => {

    const user = useContext(UserContext);

    const [allEvents, setAllEvents] = useState<object[]>([]);

    useEffect(() => {
        getAllEvents().then(events => {
            setAllEvents(events.docs.map(doc => doc.data()));
        })
    }, []);

    return (
        <Box borderWidth='1px' borderRadius='lg' padding='2' margin='5em'>
            <h1>Log in</h1> <br/>
            <Center>
                <Login />
            </Center>
            <Divider margin='2em 0 2em 0' />

            <h1>Anyonmous Login</h1> <br/>
            <Button
                alignSelf='center'
                leftIcon={<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"} alt=''/>}
                onClick={signInAnonymously}
                isFullWidth={true}>
                Anonymously
                </Button>
            <Divider margin='2em 0 2em 0' />

            <h1>Events</h1>
            <Button
                mt={4}
                type="submit"
                isFullWidth={true}
                onClick={() => {
                    getOwnEvents(user!).then(events => console.log(events.docs.map(doc => doc.data())));
                }}
            >
                Print My Events
            </Button>

            <Button
                mt={4}
                type="submit"
                isFullWidth={true}
                onClick={() => {
                    getAllEvents().then(events => console.log(events.docs.map(doc => doc.data())));
                }}
            >
                Print All Events
            </Button>
            <Divider margin='2em 0 2em 0' />

            <h1>Logged in user:</h1> <br/>
            {JSON.stringify(user)}
            <Divider margin='2em 0 2em 0' />
            
            <h1>All Events:</h1> <br/>
            {JSON.stringify(allEvents)}
            <Divider margin='2em 0 2em 0' />
            
            <h1>Logout:</h1> <br/>
            <Button onClick={() => logOut()}>Logout</Button>
        </Box>
    )
}