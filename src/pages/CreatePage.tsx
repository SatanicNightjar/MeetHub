import React, { useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from '@chakra-ui/react';
import { DatePicker } from '@orange_digital/chakra-datepicker';
import { getDatabase, ref, set } from "firebase/database";
import { UserContext } from '../providers/UserProvider';


// Titel, desc, datum, creator, number of people? (min max),
export const CreatePage = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [creator, setCreator] = React.useState('');
    const [numberOfPeople, setNumberOfPeople] = React.useState(0);
    const [numberOfPeopleMin, setNumberOfPeopleMin] = React.useState(0);
    const [numberOfPeopleMax, setNumberOfPeopleMax] = React.useState(0);

    const user = useContext(UserContext);

    const saveEvent = (event: object) => {
        const db = getDatabase();
        set(ref(db, 'users/' + user?.uid + '/events'), event);
    }

    return (
        <div>
            <h1>Create Page</h1>
            <Box borderWidth='1px' borderRadius='lg' padding='2'>
                <form onSubmit={(event) => {event.preventDefault();console.log(event)}}>

                    <FormControl isRequired id="createEvent" >
                        <FormLabel>Titel</FormLabel>
                        <Input type="text" />
                        <FormLabel>Description</FormLabel>
                        <Textarea />
                        <FormLabel>Date</FormLabel>
                        <DatePicker initialValue={new Date()} />
                        <FormLabel>Creator</FormLabel>
                        <Input type="text" />
                        <FormLabel>Number of people</FormLabel>
                        <NumberInput defaultValue={10} min={2} max={100}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
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
