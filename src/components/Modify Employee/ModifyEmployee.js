import './ModifyEmployee.css'
import { Delete } from '../Delete Modal/Delete';
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

            <Delete open={isOpenDelete} onClose={() => setIsOpenDelete(false)} 
                id={employee.id} 
                handleUpdate={handleUpdate}
                section={'employees'}>
            </Delete>

            <EditEmployee open={isOpenEdit} 
                onClose={() => setIsOpenEdit(false)} 
                employee={employee}
                handleUpdate={handleUpdate}>
            </EditEmployee>
        </>
    );
}