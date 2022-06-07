import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import './ChefView.css';
import { useState, useEffect } from "react";
import { ActiveChef } from "../../components/ActiveChef/ActiveChef";
import { PreparedChef } from "../../components/PreparedChef/PreparedChef";
import loading from '../../assets/loading.gif';

export const ChefView = () => {
    const [view, setView] = useState('active');
    const [orders, setOrders] = useState();
    const [updateOrders, setUpdate] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3333/orders')
            .then((response) => {
                return response.json()
            })
            .then((orders) => {
                setOrders(orders.reverse())
                setIsLoading(false);
            })
    }, [updateOrders]);

    const sentOrders = orders?.filter(order => order.status === 'sent');

    const handleUpdate = () => {
        setUpdate(updateOrders + 1);
    };

    if (isLoading === true) {
        return (
            <>
            <img src={loading} alt="loading icon"></img>
            <h1>Loading...</h1>
            </>
        )
    }

    return (

        <>
            <Header />
            <div className="top-buttons">
                <h1 className="chef-order-title">Orders</h1>
                <div className="selection-buttons">
                    <button type="button" className="active-btn" onClick={() => setView('active')}>Active</button>
                    <button type="button" className="prepared-btn" onClick={() => setView('prepared')}>Prepared</button>
                </div>

                { view === 'active' ? <style> {`
                    .prepared-btn {
                        background-color: white;
                        color: #B5A8A8;
                    }
                `}</style> 
                : <style>{`
                    .active-btn {
                        background-color: white;
                        color: #B5A8A8;
                    }
                `}</style> }

            </div>
            <section className="table-section">
                {view === 'active' ? sentOrders?.map((order, index) => <ActiveChef 
                    order={order} 
                    index={index} 
                    handleUpdate={handleUpdate} 
                    key={order.id}/>) 
                : <PreparedChef orders={orders}/>}
            </section>
            <Footer />
        </>
    )
}