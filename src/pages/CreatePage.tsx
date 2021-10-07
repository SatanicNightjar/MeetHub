import React, { useContext } from 'react';
import { Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from '@chakra-ui/react';
import { DatePicker } from '@orange_digital/chakra-datepicker';
import { UserContext } from '../providers/UserProvider';
import { db } from '../services/firebase';
import { collection, doc, setDoc } from '@firebase/firestore';


// Titel, desc, datum, creator, number of people? (min max),
export const CreatePage = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [creator, setCreator] = React.useState('');
    const [numberOfPeopleMin, setNumberOfPeopleMin] = React.useState(0);
    const [numberOfPeopleMax, setNumberOfPeopleMax] = React.useState(0);

    const user = useContext(UserContext);

    const saveEvent = (event: object) => {
        setDoc(doc(collection(db, 'users', user!.uid, 'events')), event);
    }

    return (
        <div>
            <h1>Create Page</h1>
            <Box borderWidth='1px' borderRadius='lg' padding='2'>
                <form onSubmit={(event) => {event.preventDefault();console.log(event)}}>

                    <FormControl isRequired id="createEvent" >
                        <FormLabel>Title</FormLabel>
                        <Input type="text" onChange={(event) => setTitle(event.target.value)}/>
                        <FormLabel>Description</FormLabel>
                        <Textarea onChange={(event) => setTitle(event.target.value)}/>
                        <FormLabel>Date</FormLabel>
                        <DatePicker initialValue={new Date()} onDateChange={(date) => date && setDate(date)}/>
                        <FormLabel>Creator</FormLabel>
                        <Input type="text" onChange={(event) => setCreator(event.target.value)}/>
                        <FormLabel>Number of people</FormLabel>
                        <NumberInput defaultValue={10} min={2} max={100}>
                            <HStack>
                                <NumberInputField onChange={(event) => setNumberOfPeopleMin(+event.target.value)}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                                <NumberInputField onChange={(event) => setNumberOfPeopleMin(+event.target.value)}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>

                            </HStack>
                        </NumberInput>
                        <Button
                            mt={4}
                            colorScheme="teal"
                            type="submit"
                        >
                            Create Event
                        </Button>
                    </FormControl>
                </form>

            </Box>
            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                onClick={() => saveEvent({
                    title: 'Test',
                    description: 'Test',
                    date: new Date(),
                })}
            >
                Create Event
            </Button>
        </div>
    );
};
