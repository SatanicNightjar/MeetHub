import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Divider, Heading, Text, Image, HStack, IconButton, useBreakpointValue, Popover, PopoverTrigger, PopoverHeader, PopoverContent, PopoverBody, WrapItem, Wrap, PopoverArrow, Stack, Button } from '@chakra-ui/react';
import { DocumentData } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import { UserContext } from '../providers/UserProvider';
import { joinEvent, leaveEvent, listenAllEvents } from '../services/database';



export const MainPage = () => {

    //const user = useContext(UserContext);
    const [events, setEvents] = React.useState<DocumentData[]>([]);

    useEffect(() => {
        listenAllEvents(events => setEvents(
            events.docs
            .map(doc => 
                ({...doc.data(), id: doc.id, creatorId: doc.ref.parent.parent?.id}))
            .sort((a:any, b:any) => a.date.seconds - b.date.seconds))) // TODO: remove this once index is built
    }, []);

    return (
        <div>
            <Stack direction='row' justify='space-between' align='end' >
                <Heading fontWeight='medium' mt='5' size='lg'>All Events</Heading>
                <Button 
                    as={Link}
                    variant='outline'
                    to='/create'
                    >Create Event</Button>
            </Stack>
            
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

    const [isLoading, setIsLoading] = useState(false);

    const icons = useBreakpointValue({
        base: 2, 
        sm: 4, 
        md: 5, 
        lg: 10, 
        xl: 15});

    const userArray = event.event.interested ? [...Object.values(event.event.interested)].sort((a:any, b:any) => a.userId.localeCompare(b.userId)) : []

    return (
        <Box p={5} pt={3} overflow='initial'>
            
            <Stack direction='row' justify='space-between'>
                <Text pt={2} fontFamily={'heading'} fontWeight={700} fontSize='md' color={'gray.500'}>{new Date(event.event.date.seconds * 1000).toLocaleDateString()}</Text>
                <HStack pt={0}>
                    {userArray.length > icons! ? 
                        <Popover trigger='hover' placement='top' isLazy>
                            <PopoverTrigger>
                                
                                <HStack>
                                    {userArray.slice(0, icons).map((user: any) => <Image key={user.userId} src={user.photoURL} rounded='full' boxSize='6'/>) }
                                    <Text fontSize='14' p='1' >+{userArray.length - icons!} </Text>
                                </HStack>

                            </PopoverTrigger>
                            <PopoverContent>
                            <PopoverHeader pt={4} fontWeight="bold" border="0">
                                Interested Users
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverBody>
                                <Wrap>
                                    {userArray.map((user: any, idx) => 
                                        <WrapItem key={user.userId+idx}>
                                            <Image src={user.photoURL} rounded='full' boxSize='6'/>
                                        </WrapItem>
                                    )}
                                </Wrap> 
                            </PopoverBody>
                            </PopoverContent>
                        </Popover>

                    : userArray.length > 0 && 
                        userArray.slice(0, icons).map((user: any) => <Image key={user.userId} src={user.photoURL} rounded='full' boxSize='6'/>) 
                   
                    }
                   

                    {user && <IconButton
                        aria-label="interested"
                        icon={user_has_joined ? <MinusIcon />  : <AddIcon />} 
                        isRound={true}
                        size='sm'
                        variant='ghost'
                        isLoading={isLoading}
                        onClick={() => {
                            user_has_joined ? leaveEvent(event.event.creatorId, event.event.id, user!) : joinEvent(event.event.creatorId, event.event.id, user!)
                            setIsLoading(true);
                            setTimeout(() => setIsLoading(false), 500);
                        }}
                        />}

                </HStack>
            </Stack>
            <Heading mb={3} fontSize={{base: 'xl', md: '2xl'}}>{event.event.title}</Heading>
            <Text fontSize={'md'} color={'gray.400'}>{event.event.description}</Text>

        </Box>
    )
}



