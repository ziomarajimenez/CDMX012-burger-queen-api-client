import './ModifyEmployee.css'
import { DeleteUser } from '../DeleteUser Modal/DeleteUser';
import { useState } from 'react';

export const ModifyEmployee = (id) => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [selected, setSelected] = useState("");

    const handleOnChange = (evt) => {
        if (evt.target.value === 'Delete') {
            setIsOpenDelete(true);
        } else if (evt.target.value === 'Edit') {
            console.log('saludos');
            setIsOpenDelete(false);
            setIsOpenEdit(true);
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
            <DeleteUser open={isOpenDelete} onClose={() => setIsOpenDelete(false)} idUser={id}></DeleteUser>
        </>
    );
}
