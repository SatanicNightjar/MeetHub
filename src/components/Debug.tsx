import { Button } from '@chakra-ui/button';
import { Box, Divider } from '@chakra-ui/layout';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../providers/UserProvider';
import { getAllEvents } from '../services/database';
import { logOut } from '../services/firebase';

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