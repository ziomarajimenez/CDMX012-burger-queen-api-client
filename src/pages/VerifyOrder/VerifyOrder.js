import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './VerifyOrder.css';
import arrow from '../../assets/flecha-izquierda.png';
import { currentUser } from "../../lib/firebaseAuth";
import { SentModal } from '../../components/SentModal/SentModal'

export const VerifyOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const order = location.state.order;


    const [isOpenModal, setIsOpenModal] = useState(false)

    const modifyOrder = () => {
        navigate('/orders', {
            state: {
                order
            }
        });
    }

    const filtered = order.products.filter((product) => {
        return product.qty > 0;
    });

    const [total, setTotal] = useState('0')

    useEffect(() => {
        const pricesList = Array.from(document.querySelectorAll('.price-num'));
        const prices = pricesList.map(element => parseInt(element.innerText));
        const sum = prices.reduce((prev, current) => prev + current, 0);
        setTotal(sum);
    }, []);

    const [lastOrder, setLastOrder] = useState();

    useEffect(() => {
        fetch('https://62a22b92cd2e8da9b003f634.mockapi.io/orders')
            .then((response) => {
                return response.json()
            })
            .then((orders) => {
                setLastOrder(orders[orders.length - 1]);
            })
    }, []);


    const saveOrder = (order) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: lastOrder ? lastOrder.id + 1 : 1,
                userId: currentUser().uid,
                table: order.client,
                products: filtered,
                status: "sent",
                dateEntry: new Date().getTime(),
                dateProcessed: ""
            })
        };
        fetch('https://62a22b92cd2e8da9b003f634.mockapi.io/orders', requestOptions)
            .then(response => response.json())
            .then(() => setIsOpenModal(true))
            /* .then(() => navigate('/')) */
            .catch(res => console.log(res))
    }

    return (
        <div className="verify-order-container">
            <Header />

            <button className="go-back-order" onClick={() => modifyOrder()}>
                <img src={arrow} alt="go back arrow" className="arrow"></img>
            </button>

            <p className="table">Table: <span className="table-num">{order.client}</span></p>

            <h1 className="complete-order-title">Complete order</h1>

            <section className="order-summary">
                <div className="summary-grid">
                    {filtered.map((product, index) => {
                        return <div key={index} className="product-in-list">
                            <span className="qty"> ( {product.qty} ) </span>
                            <span className="prod-name"> {product.product} </span>
                            <span className="prod-price"> $ <span className="price-num">{product.price * product.qty}</span></span>
                        </div>
                    })
                    }
                </div>
                <p className="order-total"><span className="total">Total:</span> ${total}</p>
                <button className="send-kitchen" onClick={() => saveOrder(order)}>Send to the kitchen</button>
            </section>
            <SentModal open={isOpenModal} onClose={() => {
                setIsOpenModal(false);
                navigate('/');
            }} />
            <Footer />
        </div>
    )
}
