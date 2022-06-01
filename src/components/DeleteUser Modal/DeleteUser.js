import React from 'react';
import ReactDOM from 'react-dom';
import { deleteFirebase } from '../../lib/firebaseAuth';
import './DeleteUser.css';

export const DeleteUser = ({ open, onClose, idUser }) => {

    if (!open) return null;


    const deleteEmployee = () => {
        let userId = 'http://localhost:3333/users/' + idUser.id;

        fetch(userId, { method: 'DELETE' })
            .then(response => response.json())
            .then(onClose)
            .catch(res => console.log(res))

        deleteFirebase(idUser)
    }


    return ReactDOM.createPortal(
        <>
            <div className='wrapper'>
                <div className='modal-delete'>
                    <button className="close-modal" onClick={onClose}> X </button>
                    <p className='txt-message'> Are you sure you want to delete this? </p>
                    <div className="button-wraper">
                        <button className="cancel-delete"> Cancel </button>
                        <button className="confirm-delete" onClick={deleteEmployee}> Confirm </button>
                    </div>

                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}
