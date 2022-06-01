import './ModifyEmployee.css'
import { DeleteUser } from '../DeleteUser Modal/DeleteUser';
import { useState } from 'react';

export const ModifyEmployee = ({ id, render }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleOnChange = (evt) => {
        if (evt.target.value === 'Delete') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
        setSelected("")
    }

    return (
        <>
            <select name='modify-option' id="modifyOption" onChange={handleOnChange} value={selected}>
                <option value=""></option>
                <option value='Edit'>Edit</option>
                <option value='Delete' >Delete</option>
            </select>
            <DeleteUser open={isOpen} onClose={() => setIsOpen(false)} idUser={id} render={render}></DeleteUser>
        </>
    );
}