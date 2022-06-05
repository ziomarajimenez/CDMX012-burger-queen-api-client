// import { useState, useEffect } from "react";
import './ActiveChef.css';
export const ActiveChef = ({ orders }) => {

    const sentOrders = orders?.filter(order => order.status === 'sent');

    return (
        <>
            {sentOrders?.map((order, index) => {
                return (
                    <>
                        <div className='wrapperOrder'>
                            <section className="top-order">
                                <h3>Table {order.table} </h3>
                                <h3>Recieved {new Date(order.dateEntry).toLocaleString({ timeZone: 'America/Mexico_City' })} </h3>
                            </section>
                            <section className="bottom-order">
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
                                    <button className='btn-ready'> Ready </button>
                                </div>
                            </section>
                        </div>
                    </>);
            })}
        </>
    );
}
