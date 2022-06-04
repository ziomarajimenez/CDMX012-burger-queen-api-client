import { useState } from "react";
import { EditProduct } from "../EditProduct/EditProduct";

export const ModifyProduct = ({ handleUpdateProd, name, price, type, menu }) => {
    //const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [selected, setSelected] = useState("");

    const handleOnChange = (evt) => {
        if (evt.target.value === 'Delete') {
            //setIsOpenDelete(true);
            setIsOpenEdit(false);
        } else if (evt.target.value === 'Edit') {
            console.log('saludos');
            //setIsOpenDelete(false);
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

            {/* modales */}
            <EditProduct 
                open={isOpenEdit} 
                onClose={() => setIsOpenEdit(false)}
                name={name}
                price={price}
                type={type}
                menu={menu}
                handleUpdateProd={handleUpdateProd}
            />

        </>
    )
}
