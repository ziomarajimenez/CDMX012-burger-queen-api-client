import './ModifyEmployee.css'
import { DeleteUser } from '../DeleteUser Modal/DeleteUser';
import { EditEmployee } from '../EditEmployee/EditEmployee';
import { useState } from 'react';

export const ModifyEmployee = ({ id, name, lastName, email, role, handleUpdate }) => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [selected, setSelected] = useState("");

    const handleOnChange = (evt) => {
        if (evt.target.value === 'Delete') {
            setIsOpenDelete(true);
            setIsOpenEdit(false);
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
            <DeleteUser open={isOpenDelete} onClose={() => setIsOpenDelete(false)} idUser={id} handleUpdate={handleUpdate}></DeleteUser>
            <EditEmployee open={isOpenEdit} 
                onClose={() => setIsOpenEdit(false)} 
                idUser={id} 
                name={name}
                lastName={lastName}
                email={email}
                role={role}
                handleUpdate={handleUpdate}>
            </EditEmployee>
        </>
    );
}