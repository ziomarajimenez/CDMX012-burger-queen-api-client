import { doc, setDoc } from "firebase/firestore";

export async function saveNewUser() {
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
}