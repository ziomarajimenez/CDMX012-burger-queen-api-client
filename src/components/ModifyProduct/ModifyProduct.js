import { useState } from "react";
import { EditProduct } from "../EditProduct/EditProduct";
import { Delete } from "../Delete Modal/Delete";

export const ModifyProduct = ({ handleUpdateProd, id, name, price, type, menu }) => {
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
        setSelected("");
    }

    return (
        <>
            <select name='modify-option' id="modifyOption" onChange={handleOnChange} value={selected}>
                <option value=""></option>
                <option value='Edit'>Edit</option>
                <option value='Delete' >Delete</option>
            </select>

            <Delete
                open={isOpenDelete}
                onClose={() => setIsOpenDelete(false)}
                id={id}
                handleUpdate={handleUpdateProd}
                section={'products'}
            />

            <EditProduct 
                open={isOpenEdit} 
                onClose={() => setIsOpenEdit(false)}
                idProd={id}
                name={name}
                price={price}
                type={type}
                menu={menu}
                handleUpdateProd={handleUpdateProd}
            />

        </>
    )
}
