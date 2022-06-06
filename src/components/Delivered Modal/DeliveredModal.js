import React from 'react';
import ReactDOM from 'react-dom';
import './DeliveredModal.css';

const DeliveredModal = ({ open, onClose, id, accept }) => {

    if (!open) return null;

    const orderDelivered = () => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: 'delivered',
            })
        };
        let idOrder = 'http://localhost:3333/orders/' + id;
        console.log(idOrder);

        fetch(idOrder, requestOptions)
            .then(response => response.json())
            .then(onClose)
            .then(accept)
            .catch(res => console.log(res))
    }

    return ReactDOM.createPortal(
        <>
            <div className='wrapper'>
                <div className='modal-error'>
                    <button className="close-modal" onClick={onClose}> X </button>
                    <p className='txt-message'>Was the order successfully delivered? :)</p>
                    <section className='button-wrapper'>
                        <button className="order-delivered" onClick={() => { orderDelivered() }} > Yes </button>
                        <button className="cancel-deliver" onClick={onClose} > No </button>
                    </section>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default DeliveredModal;