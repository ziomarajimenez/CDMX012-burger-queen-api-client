import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../pages/Orders/Orders';
import { Mainscreen } from '../pages/Main screen/mainScreen'
import { ActiveOrders } from '../pages/Active orders/ActiveOrders';
import { VerifyOrder } from '../pages/VerifyOrder/VerifyOrder';
import { AdminView } from "../pages/AdminView/AdminView";
import { doc, getDoc } from "firebase/firestore";
import { currentUser } from '../lib/firebaseAuth'
import { db } from '../lib/firebaseConfig';
import { useState } from "react";

export const PrivateRoutes = () => {

    const [role, setRole] = useState('');

    const user = currentUser();
    console.log(user);

    const getUser = () => {
        const docRef = doc(db, "employees", user.uid);
        const docSnap = getDoc(docRef);
        return docSnap
    }

    getUser().then((res) => {
        if (res.exists()) {
            setRole(res.data().roles)
        }
    }).catch((error) => {
        console.log(error)
    })

    if (role === 'Waiter') {
        return (
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Mainscreen />} />
                <Route path="/activeorders" element={<ActiveOrders />} />
                <Route path="/verify-order" element={<VerifyOrder />} />
            </Routes>
        );
    } else if (role === 'Manager') {
        return (
            <Routes>
                <Route path="/" element={<AdminView />} />
            </Routes>
        );
    }
}