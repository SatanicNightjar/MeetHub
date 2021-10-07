import { Box, Divider, Heading, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { getAllEvents } from '../services/database';



export const MainPage = () => {

    //const user = useContext(UserContext);
    const [events, setEvents] = React.useState<DocumentData[]>([]);

    useEffect(() => {
        getAllEvents().then(events => setEvents(events.docs.map(doc => doc.data())));
    },[]);


    useEffect(() => {
        console.log(events);
    })

    return (
        <div>
            <Heading size='md'>All Events</Heading>
            
            
            <button>Create Event</button>

            <h2>Events</h2>
            <Box height='md' maxHeight='lg'>

            <Virtuoso
                useWindowScroll
                height='full'
                totalCount={events.length}
                itemContent={(index) => <EventItem event={(events[index])}></EventItem>}
            />
            </Box>


        </div>
    )
}

//type event = {title: string, description: string, date: Date, location: string, image: string}
export const EventItem = (event: any) => {
    return (
        <>
        <Divider/>
        <Stat>
            {/*<Box w='100%' p='4' color='white'>
            <Heading size='sm'>{event.event.title}</Heading>
            <Heading size='xs'>{event.event.description}</Heading>
            </Box>*/}
            <StatNumber>{event.event.title}</StatNumber>
            <StatLabel>{event.event.description}</StatLabel>
            <StatHelpText>{new Date(event.event.date.seconds * 1000).toLocaleDateString()}</StatHelpText>
        </Stat>

        </>
    )
}




