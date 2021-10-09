import { User } from "firebase/auth";
import { collection, collectionGroup, doc, setDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, DocumentData, deleteField, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveEvent = (user: User, event: object) => {
    setDoc(doc(collection(db, 'users', user.uid, 'events')), event);
}

export const getOwnEvents = (user: User) => {
    return getDocs(query(collection(db, 'users', user.uid, 'events'), orderBy('date')));
}

export const getAllEvents = () => {
    //return getDocs(query(collectionGroup(db, 'events'), orderBy('date')));
    return getDocs(collectionGroup(db, 'events')); // replace by the line above once index is built
}

export const listenAllEvents = (callback: (event: QuerySnapshot<DocumentData>) => void) => (
    onSnapshot(
        collectionGroup(db, 'events'),
        (snapshot) => (callback(snapshot))
    )
)

export const joinEvent = (creatorId: string, eventId: string, user: User) => {

    return updateDoc(doc(db, 'users', creatorId, 'events', eventId), 'interested.'+user.uid, {
        userId: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous
    });

}

export const leaveEvent = (creatorId: string, eventId: string, user: User) => {

    return updateDoc(doc(db, 'users', creatorId, 'events', eventId), 'interested.'+user.uid, deleteField());

}