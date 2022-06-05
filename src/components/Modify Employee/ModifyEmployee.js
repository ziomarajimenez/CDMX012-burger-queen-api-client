import './ModifyEmployee.css'
import { DeleteUser } from '../DeleteUser Modal/DeleteUser';
import { EditEmployee } from '../EditEmployee/EditEmployee';
import { useState } from 'react';

export const ModifyEmployee = ({ employee, handleUpdate }) => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [selected, setSelected] = useState("");

    const handleOnChange = (evt) => {
        if (evt.target.value === 'Delete') {
            setIsOpenDelete(true);
            setIsOpenEdit(false);
        } else if (evt.target.value === 'Edit') {
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

            <DeleteUser open={isOpenDelete} onClose={() => setIsOpenDelete(false)} 
                idr={employee.id} 
                handleUpdate={handleUpdate}
                section={'employees'}>
            </DeleteUser>

            <EditEmployee open={isOpenEdit} 
                onClose={() => setIsOpenEdit(false)} 
                employee={employee}
                handleUpdate={handleUpdate}>
            </EditEmployee>
        </>
    );
}