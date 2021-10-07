import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { signInWithGoogle } from '../services/firebase';

export const MainPage = () => {

    const user = useContext(UserContext);

    const createEvent = () => {
        if (user) {
            // Redirect
        } else {
            signInWithGoogle().then(() => {
                // Redirect
            })
        }
    }

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