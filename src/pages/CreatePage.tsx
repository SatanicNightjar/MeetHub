import React, { useContext, useEffect } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Textarea } from '@chakra-ui/react';
import { SingleDatepicker } from '../components/DatePicker'
import { UserContext } from '../providers/UserProvider';
import { listenAllEvents, saveEvent } from '../services/database';
import { Login } from '../Login';
import { useHistory } from 'react-router';


// Titel, desc, datum, creator, number of people? (min max),
export const CreatePage = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [creator, setCreator] = React.useState('');
    const [numberOfPeopleMin, setNumberOfPeopleMin] = React.useState(2);
    const [numberOfPeopleMax, setNumberOfPeopleMax] = React.useState(10);

    const user = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        listenAllEvents(e => {
            console.log('Listening on events...', e.docs.map(d => d.data()));
        })
    }, [])

    return (
        <div>
            <Heading fontWeight='medium' mt='5' size='lg'>Create Page</Heading>
            <Box borderWidth='1px' borderRadius='lg' padding='5' mt='2'>
                {user ? 
                <form 
                    onSubmit={(event) => {
                        event.preventDefault();
                        console.log({title: title, description: description, date: date, creator: creator, numberOfPeopleMin: numberOfPeopleMin, numberOfPeopleMax: numberOfPeopleMax})
                        user && saveEvent(user, {title: title, description: description, date: date, creator: creator, numberOfPeopleMin: numberOfPeopleMin, numberOfPeopleMax: numberOfPeopleMax});
                        history.push('/');
                    }}>

                    <FormControl isRequired id="createEvent">
                        <FormLabel>Title</FormLabel>
                        <Input type="text" onChange={(event) => setTitle(event.target.value)}/>
                        <FormLabel mt='5'>Description</FormLabel>
                        <Textarea onChange={(event) => setDescription(event.target.value)}/>
                        <FormLabel mt='5'>Date</FormLabel>
                        <SingleDatepicker date={date} onDateChange={value => setDate(value)}/>
                        <FormLabel mt='5'>Creator</FormLabel>
                        <Input type="text" onChange={(event) => setCreator(event.target.value)}/>
                        <FormLabel mt='5'>Number of people</FormLabel>
                        
                        <Stack isInline>
                            <NumberInput defaultValue={2} min={2} max={numberOfPeopleMax} onChange={(valueString, valueNumber) => setNumberOfPeopleMin(valueNumber)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput defaultValue={10} min={numberOfPeopleMin} max={100} onChange={(valueString, valueNumber) => setNumberOfPeopleMax(valueNumber)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Stack>
                        
                        <Button
                            mt={10}
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
            
        </div>
    );
};
