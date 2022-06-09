import ReactDOM from 'react-dom';
import './OrderPrepared.css';

export const OrderPrepared = ({ open, onClose, id, dateEntry, handleUpdate }) => {
    if (!open) return null;
    //console.log(id)

    const orderReady = () => {
        const dateProcessed = new Date().getTime();
        const time = ((dateProcessed - dateEntry)/60000).toFixed()

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: 'ready',
                dateProcessed: dateProcessed,
                time: time
            })
        };
        let idOrder = 'https://62a22b92cd2e8da9b003f634.mockapi.io/orders/' + id;
        //console.log(idOrder);

        fetch(idOrder, requestOptions)
            .then(response => response.json())
            .then(onClose)
            .then(handleUpdate)
            .catch(res => console.log(res))
    };

    return ReactDOM.createPortal(
        <>
            <div className='wrapper'>
                <div className='modal-error'>
                    <button className="close-modal" onClick={onClose}> X </button>
                    <p className='txt-message txt-prepared'>Is the order complete and ready to be served?</p>
                    <div className='modal-btns'>
                        <button className="cancel-ready" onClick={onClose} > Cancel </button>
                        <button className="order-ready" onClick={() => { orderReady() }} > Yes </button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}
