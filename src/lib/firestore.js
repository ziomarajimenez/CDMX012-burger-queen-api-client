import { db } from "./firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

export function saveFirestore(values, uid) {
    setDoc(doc(db, "employees", uid), {
        id: uid,
        name: values.firstName,
        lastName: values.lastName,
        email: values.email,
        roles: values.role,
        admin: values.role === 'Manager' ? true : false
    });
}


// export async function getEmployees() {
//     const querySnapshot = await getDocs(collection(db, "employees"));
//     return querySnapshot.docs.map((doc) => {
//         return doc.data()
//       })
// } 

