import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { listenAllEvents } from '../services/database';



export const MainPage = () => {

    //const user = useContext(UserContext);
    const [events, setEvents] = React.useState<DocumentData[]>([]);

    useEffect(() => {
        listenAllEvents(events => setEvents(events.docs.map(doc => doc.data())));
    },[]);

    return (
        <div>
            <Heading size='md'>All Events</Heading>
            
            
            <button>Create Event</button>

            <h2>Events</h2>
            <Box borderWidth='1px' borderRadius='lg' padding='10' marginTop='10'>
            
            {/* {events.map(e => <EventItem event={e} key={e.id}/>)} */}

            <Virtuoso
                style={{
                    margin: 10
                }}
                useWindowScroll
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
        <Box>
            <Heading>{event.event.title}</Heading>
            <Text>{event.event.description}</Text>
            <Text>{new Date(event.event.date.seconds * 1000).toLocaleDateString()}</Text>
        
        </Box>
        </>
    )
}




