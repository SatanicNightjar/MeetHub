import React, { useContext, useEffect } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Textarea } from '@chakra-ui/react';
import { DatePicker } from '@orange_digital/chakra-datepicker';
import { UserContext } from '../providers/UserProvider';
import { getAllEvents, getOwnEvents, listenAllEvents, saveEvent } from '../services/database';
import { Login } from '../Login';


// Titel, desc, datum, creator, number of people? (min max),
export const CreatePage = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [creator, setCreator] = React.useState('');
    const [numberOfPeopleMin, setNumberOfPeopleMin] = React.useState(2);
    const [numberOfPeopleMax, setNumberOfPeopleMax] = React.useState(10);

    const user = useContext(UserContext);

    useEffect(() => {
        listenAllEvents(e => {
            console.log('Listening on events...', e.docs.map(d => d.data()));
        })
    }, [])

    return (
        <div>
            <h1>Create Page</h1>
            <Box borderWidth='1px' borderRadius='lg' padding='2'>
                {user ? 
                <form 
                    onSubmit={(event) => {
                        event.preventDefault();
                        console.log({title: title, description: description, date: date, creator: creator, numberOfPeopleMin: numberOfPeopleMin, numberOfPeopleMax: numberOfPeopleMax})
                        user && saveEvent(user, {title: title, description: description, date: date, creator: creator, numberOfPeopleMin: numberOfPeopleMin, numberOfPeopleMax: numberOfPeopleMax});
                    }}>

                    <FormControl isRequired id="createEvent" >
                        <FormLabel>Title</FormLabel>
                        <Input type="text" onChange={(event) => setTitle(event.target.value)}/>
                        <FormLabel>Description</FormLabel>
                        <Textarea onChange={(event) => setDescription(event.target.value)}/>
                        <FormLabel>Date</FormLabel>
                        <DatePicker initialValue={new Date()} onDateChange={(date) => date && setDate(date)}/>
                        <FormLabel>Creator</FormLabel>
                        <Input type="text" onChange={(event) => setCreator(event.target.value)}/>
                        <FormLabel>Number of people</FormLabel>
                        
                        <Stack isInline>
                            <NumberInput defaultValue={2} min={2} max={100}>
                                <NumberInputField onChange={(event) => setNumberOfPeopleMin(+event.target.value)}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput defaultValue={10} min={2} max={100}>
                                <NumberInputField onChange={(event) => setNumberOfPeopleMax(+event.target.value)}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Stack>
                        
                        <Button
                            mt={4}
                            colorScheme="teal"
                            type="submit"
                        >
                            Create Event
                        </Button>
                    </FormControl>
                </form>
    : <div>
        <Center>
            <Box padding='5em'>
                <Stack>
                    <h1>Please login to create an event</h1>
                    <Login />
                </Stack>
            </Box>
        </Center>
    </div>}

            </Box>
            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                onClick={() => {
                    getOwnEvents(user!).then(events => console.log(events.docs.map(doc => doc.data())));
                }}
            >
                Create Event
            </Button>

            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                onClick={() => {
                    getAllEvents().then(events => console.log(events.docs.map(doc => doc.data())));
                }}
            >
                Create Event
            </Button>
        </div>
    );
};
