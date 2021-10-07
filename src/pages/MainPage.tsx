import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';


export const MainPage = () => {

    const user = useContext(UserContext);

   

    return (
        <div>
            <div>
                Current user{JSON.stringify(user)}
            </div>
            
            <button>Create Event</button>

            <h2>Events</h2>

        </div>
    )
}