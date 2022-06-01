import {
    createUserWithEmailAndPassword,
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    updateCurrentUser,
    deleteUser
} from "firebase/auth";
import { auth } from './firebaseConfig';

export const createAccWithEmail = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}

export const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

export const currentUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        return user;
    }
}

export const updateUser = async (originalUser) => {
    await updateCurrentUser(auth, originalUser);
}

// const user = auth.currentUser;
// const auth = getAuth();


export const deleteFirebase = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    deleteUser(user).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}