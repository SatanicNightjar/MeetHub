import { User } from "firebase/auth";
import { collection, collectionGroup, doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const saveEvent = (user: User, event: object) => {
    setDoc(doc(collection(db, 'users', user.uid, 'events')), event);
}

export const getOwnEvents = (user: User) => {
    return collection(db, 'users', user.uid, 'events');
}

export const getAllEvents = () => {
    return collectionGroup(db, 'events');
}

export const listenAllEvents = (callback: (event: object) => void) => (
    onSnapshot(
        collectionGroup(db, 'events'),
        (snapshot) => (callback(snapshot))
    )
)