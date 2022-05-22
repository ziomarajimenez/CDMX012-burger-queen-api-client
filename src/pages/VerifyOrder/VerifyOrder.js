import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './VerifyOrder.css';
import arrow from '../../assets/flecha-izquierda.png';
import { currentUser } from "../../lib/firebaseAuth";

export const VerifyOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const order = location.state.order;

    const reversedOrd = [...order.products].reverse();

    const filtered = reversedOrd.filter((value, index, self) => {
        return self.findIndex(p => p.product === value.product) === index;
    });

    order.products = filtered;

    const [total, setTotal] = useState('0')

    useEffect(() => {
        const pricesList = Array.from(document.querySelectorAll('.price-num'));
        const prices = pricesList.map(element => parseInt(element.innerText));
        const sum = prices.reduce((prev, current) => prev + current, 0);
        setTotal(sum);
    }, []);


    //console.log(order);

    const saveOrder = (order) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: "1025",
                userId: currentUser.uid,
                table: order.client,
                products: order.products,
                status: "sent",
                dateEntry: new Date().getTime(),
                dateProcessed: ""
            })
        };
        fetch('http://localhost:3333/orders', requestOptions)
            .then(response => response.json())
            .catch(res => console.log(res))
    }

    return (
        <div className="verify-order-container">
            <Header />

            <button className="go-back" onClick={() => navigate('/orders')}>
                <img src={arrow} alt="go back arrow" className="arrow"></img>
            </button>

            <p className="table">Table: <span className="table-num">{order.client}</span></p>

            <h1 className="complete-order-title">Complete order</h1>

            <section className="order-summary">
                <div className="summary-grid">
                    {order.products.map((product, index) => {
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

            <Footer />
        </div>
    )
}
