import { Box, Divider, Heading, Text, Button, Center, Image, HStack } from '@chakra-ui/react';
import { DocumentData } from 'firebase/firestore';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { UserContext } from '../providers/UserProvider';
import { joinEvent, leaveEvent, listenAllEvents } from '../services/database';



export const MainPage = () => {

    //const user = useContext(UserContext);
    const [events, setEvents] = React.useState<DocumentData[]>([]);

    useEffect(() => {
        listenAllEvents(events => setEvents(events.docs.map(doc => ({...doc.data(), id: doc.id, creatorId: doc.ref.parent.parent?.id}))));
    }, []);

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

    const user = useContext(UserContext)

    const user_has_joined = user && event.event.interested && Object.keys(event.event.interested).includes(user.uid)

    const debug = true;


    return (
        <Box p={5}>
            <Text fontFamily={'heading'} fontWeight={700} mb={3} fontSize='md' color={'gray.500'}>{new Date(event.event.date.seconds * 1000).toLocaleDateString()}</Text>
            <Heading mb={3} fontSize={{base: 'xl', md: '2xl'}}>{event.event.title}</Heading>
            <Text fontSize={'md'} color={'gray.400'}>{event.event.description}</Text>
            
            {/* TODO: remove this */}
            {debug && <Box borderWidth='1px' borderRadius='lg' padding='2' >
                <Center paddingBottom='1'>
                    {user && <Button
                        onClick={() => (user_has_joined ? leaveEvent : joinEvent)(event.event.creatorId, event.event.id, user!)}
                    >{user_has_joined ? "I'm not interested anymore" : "I'm interested" }</Button>}
                </Center>
                <Center>
                    <HStack spacing='1'  >
                    <Box alignContent='center' justifyContent='center'>
                        Interested users: 
                    </Box>
                    {event.event.interested && Object.values(event.event.interested).length > 0
                        ? [...Object.values(event.event.interested)].sort((a:any, b:any) => a.userId.localeCompare(b.userId))
                            .map((user: any) => <Image key={user.userId} src={user.photoURL} rounded='full' boxSize='6'/>) 
                        : 'None'}
                    </HStack>
                </Center>
            </Box>} 
        </Box>
    )
}



