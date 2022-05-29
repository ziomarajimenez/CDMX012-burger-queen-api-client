import ReactDOM from 'react-dom';
import check from '../../assets/check.png';

export function SentModal({ open, onClose }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal'>
                <button className="close-modal" onClick={onClose}> X </button>
                <img src={check} alt='check mark' className='check-mark'></img>
                <p className='txt-message'>Your order was sent to the kitchen!</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}
