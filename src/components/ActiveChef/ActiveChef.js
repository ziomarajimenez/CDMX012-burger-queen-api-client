import { useState } from "react";
import './ActiveChef.css';
import { OrderPrepared } from "../OrderPrepared/OrderPrepared";

export const ActiveChef = ({ orders }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    const sentOrders = orders?.filter(order => order.status === 'sent');

    return (
        <>
            {sentOrders?.map((order, index) => {
                return (
                    <div className='wrapperOrder' key={order.id}>
                        <section className="top-order">
                            <h3>Table {order.table} </h3>
                            <h3>Recieved {new Date(order.dateEntry).toLocaleString({ timeZone: 'America/Mexico_City' })} </h3>
                        </section>
                        <section className="active-bottom-order">
                            <div key={index} className='product-order'>
                                {order.products.map((product, indexProduct) => {
                                    return (
                                        <div key={indexProduct} className='each-product'>
                                            <span className='qty'> ({product.qty})</span>
                                            <span className="prod-name"> {product.product} </span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='wrapper-btn'>
                                <button className='btn-ready' onClick={() => setIsOpen(true)}> Ready to serve </button>
                            </div>
                        </section>
                        <OrderPrepared open={isOpen} onClose={() => setIsOpen(false)} id={order.id} dateEntry={order.dateEntry}/>
                    </div>
                );
            })}
        </>
    );
}
