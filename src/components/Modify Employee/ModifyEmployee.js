
import './ModifyEmployee.css'
import { DeleteUser } from '../DeleteUser Modal/DeleteUser';

export const ModifyEmployee = () => {

    const handleOnClick = () => {

    }

    return (
        <select name='modify-option' id="modifyOption">
            <option ></option>
            <option value='Edit' onClick={handleOnClick}>Edit</option>
            <option value='Delete'>Delete</option>
        </select>
    );
}
