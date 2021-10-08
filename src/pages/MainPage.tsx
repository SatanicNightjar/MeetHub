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
            <Heading fontWeight='medium' mt='5' size='lg'>All Events</Heading>
            
            <Box borderWidth='1px' borderRadius='lg' padding='0' marginTop='2'>
            
            {/* {events.map(e => <EventItem event={e} key={e.id}/>)} */}

            <Virtuoso
                useWindowScroll
                totalCount={events.length}
                
                itemContent={(index) => <>{(index !== 0) && <Divider/>}<EventItem event={(events[index])}/></>}
            />
            </Box>


        </div>
    )
}

//type event = {title: string, description: string, date: Date, location: string, image: string}
export const EventItem = (event: any) => {
    return (
        <Box p={5}>
            <Text fontFamily={'heading'} fontWeight={700} mb={3} fontSize='md' color={'gray.500'}>{new Date(event.event.date.seconds * 1000).toLocaleDateString()}</Text>
            <Heading mb={3} fontSize={{base: 'xl', md: '2xl'}}>{event.event.title}</Heading>
            <Text fontSize={'md'} color={'gray.400'}>{event.event.description}</Text>
        </Box>
    )
}



