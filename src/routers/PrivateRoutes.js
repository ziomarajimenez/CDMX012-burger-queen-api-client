import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../pages/Orders/Orders';
import { CreateAcc } from "../pages/CreateAcc/CreateAcc";
import { Mainscreen } from '../pages/Main screen/mainScreen'
import { ActiveOrders } from '../pages/Active orders/ActiveOrders';
import { VerifyOrder } from '../pages/VerifyOrder/VerifyOrder'
import { saveNewUser } from '../lib/firestore';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Mainscreen />} />
            <Route path="/activeorders" element={<ActiveOrders />} />
            <Route path="/createacc" element={<CreateAcc saveNewUser={saveNewUser} />} />
            <Route path="/verify-order" element={<VerifyOrder />} />
        </Routes>
    );
}