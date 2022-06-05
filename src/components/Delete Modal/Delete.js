import React from 'react';
import ReactDOM from 'react-dom';
import './Delete.css';

export const Delete = ({ open, onClose, id, handleUpdate, section }) => {

    if (!open) return null;


    const deleteEmployee = () => {
        let userId = 'http://localhost:3333/users/' + id;

        fetch(userId, { method: 'DELETE' })
            .then(response => response.json())
            .then(onClose)
            .then(handleUpdate)
            .catch(res => console.log(res))

    }

    const deleteProduct = () => {
        let userId = 'http://localhost:3333/products/' + id;

        fetch(userId, { method: 'DELETE' })
            .then(response => response.json())
            .then(onClose)
            .then(handleUpdate)
            .catch(res => console.log(res))

    }


    return ReactDOM.createPortal(
        <>
            <div className='wrapper'>
                <div className='modal-delete'>
                    <button className="close-modal" onClick={onClose}> X </button>
                    <p className='txt-message'> Are you sure you want to delete this? </p>
                    <div className="button-wraper">
                        <button className="cancel-delete"> Cancel </button>
                        <button className="confirm-delete" onClick={section === 'employees' ? deleteEmployee : deleteProduct}> Confirm </button>
                    </div>

                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}