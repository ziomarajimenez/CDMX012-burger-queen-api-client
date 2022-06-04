import { AddProductModal } from '../AddProductModal/AddProductModal';

export const EditProduct = ({open, onClose, name, price, type, menu, handleUpdateProd}) => {
    if (!open) return null;

    const prodValues = {
        name: name,
        price: price,
        type: type,
        menu: menu,
    };

    /* const saveInformation = (values) => {
        const userId = 'http://localhost:3333/users/' + idUser;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: idUser,
                name: values.firstName,
                lastName: values.lastName,
                email: values.email,
                roles: values.role,
                admin: values.role === 'Manager' ? true : false
            })
        };
        
        fetch(userId, requestOptions)
            .then(response => {
                console.log('hola');
                response.json();
                onClose();
                handleUpdate();
            })
            .catch(res => console.log(res))
    } */

    const saveInfo = () => {
        console.log('edición guardada')
    }

    return(
        <AddProductModal 
            open={open} 
            onClose={onClose} 
            saveInfo={saveInfo} 
            defaultValues={prodValues}
            titleText='Edit the product information' 
            btnText='Save'>
        </AddProductModal>
    )
}