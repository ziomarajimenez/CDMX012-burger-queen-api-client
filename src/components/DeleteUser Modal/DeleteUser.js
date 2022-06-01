import React from 'react';
import ReactDOM from 'react-dom';
import './DeleteUser.css';

export const DeleteUser = ({ open, onClose }) => {

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='wrapper'>
                <div className='modal-delete'>
                    <button className="close-modal" onClick={onClose}> X </button>
                    <p className='txt-message'> Are you sure you want to delete this? </p>
                    <button className="cancel-delete"> Cancel </button>
                    <button className="confirm-delete"> Confirm </button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}
