import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import './ChefView.css';
import { useState, useEffect } from "react";
import { ActiveChef } from "../../components/ActiveChef/ActiveChef"
import { PreparedChef } from "../../components/PreparedChef/PreparedChef";

export const ChefView = () => {
    const [view, setView] = useState('active');
    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch('http://localhost:3333/orders')
            .then((response) => {
                return response.json()
            })
            .then((orders) => {
                setOrders(orders)
            })
    }, []);

    return (

        <>
            <Header />
            <div className="top-buttons">
                <h1>Orders</h1>
                <div className="selection-buttons">
                    <button type="button" className="active-btn" onClick={() => setView('active')}>Active</button>
                    <button type="button" className="prepared-btn" onClick={() => setView('prepared')}>Prepared</button>
                </div>
            </div>
            <section className="table-section">
                {view === 'active' ? <ActiveChef orders={orders} /> : <PreparedChef orders={orders} />}
            </section>
            <Footer />
        </>
    )
}