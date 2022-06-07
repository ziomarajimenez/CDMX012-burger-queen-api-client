import { Routes, Route } from "react-router-dom";
import { Orders } from '../pages/Orders/Orders';
import { Mainscreen } from '../pages/Main screen/mainScreen';
import { ActiveOrders } from '../pages/Active orders/ActiveOrders';
import { VerifyOrder } from '../pages/VerifyOrder/VerifyOrder';
import { AdminView } from "../pages/AdminView/AdminView";
import { ChefView } from '../pages/ChefView/ChefView'
import { doc, getDoc } from "firebase/firestore";
import { currentUser } from '../lib/firebaseAuth';
import { db } from '../lib/firebaseConfig';
import { useState } from "react";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import loading from '../assets/loading.gif';

export const PrivateRoutes = () => {
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const user = currentUser();

    const getUser = () => {
        const docRef = doc(db, "employees", user.uid);
        const docSnap = getDoc(docRef);
        return docSnap
    }

    getUser().then((res) => {
        if (res.exists()) {
            setRole(res.data().roles)
        }
        setIsLoading(false);
    }).catch((error) => {
        console.log(error)
    })

    if (isLoading === true) {
        return (
            <>
            <img src={loading} alt="loading icon"></img>
            <h1>Loading...</h1>
            </>
        )
    }

    if (role === 'Waiter') {
        return (
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Mainscreen />} />
                <Route path="/activeorders" element={<ActiveOrders />} />
                <Route path="/verify-order" element={<VerifyOrder />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        );
    } else if (role === 'Manager') {
        return (
            <Routes>
                <Route path="/" element={<AdminView />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        );
    } else if (role === 'Chef') {
        return (
            <Routes>
                <Route path="/" element={<ChefView />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        );
    }


}