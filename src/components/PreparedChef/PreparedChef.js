import './PreparedChef.css';

export const PreparedChef = ({ orders }) => {
    const readyOrders = orders?.filter(order => order.status === 'ready');

    return (
        <>
            {readyOrders?.map((order, index) => {
                return (
                    <div className='wrapperOrder' key={order.id}>
                        <section className="top-order">
                            <h3>Table {order.table} </h3>
                            <h3>Preparation time: {order.time} minutes</h3>
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
                            <p>Delivered {new Date(order.dateProcessed).toLocaleString({ timeZone: 'America/Mexico_City' })}</p>
                        </section>
                    </div>
                );
            })}
        </>
    );
}