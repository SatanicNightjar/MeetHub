import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/firebase"
import { onAuthStateChanged, User } from 'firebase/auth';
export const UserContext = createContext<User | null>(null);


export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        onAuthStateChanged(auth, async (_user: User | null) => {
            console.log('IP:', _user)
            setUser(_user)
        })
    }, [])

    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )
}