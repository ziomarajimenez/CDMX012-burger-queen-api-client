/* import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function saveNewUser(values) {
    try {
        const docRef = await addDoc(collection(db, "employees"), {
            id: '', //user.uid,
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            role: values.role
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getEmployees() {
    const querySnapshot = await getDocs(collection(db, "employees"));
    return querySnapshot.docs.map((doc) => {
        return doc.data()
      })
} */

