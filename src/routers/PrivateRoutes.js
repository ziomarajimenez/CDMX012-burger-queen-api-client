import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../pages/Orders/Orders';
import { Mainscreen } from '../pages/Main screen/mainScreen'
import { ActiveOrders } from '../pages/Active orders/ActiveOrders';
import { VerifyOrder } from '../pages/VerifyOrder/VerifyOrder';
import { AdminView } from "../pages/AdminView/AdminView";

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Mainscreen />} />
            <Route path="/activeorders" element={<ActiveOrders />} />
            <Route path="/verify-order" element={<VerifyOrder />} />
            <Route path="/admin" element={<AdminView />} />
        </Routes>
    );
}