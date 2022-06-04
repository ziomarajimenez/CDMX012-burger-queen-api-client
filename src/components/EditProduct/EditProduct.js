import { AddProductModal } from '../AddProductModal/AddProductModal';

export const EditProduct = ({open, onClose, idProd, name, price, type, menu, handleUpdateProd}) => {
    if (!open) return null;

    const prodValues = {
        name: name,
        price: price,
        type: type,
        menu: menu,
    };

    const saveInformation = (values) => {
        const productToEdit = 'http://localhost:3333/products/' + idProd;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: idProd,
                name: values.name,
                price: values.price,
                type: values.type,
                menu: values.menu,
            })
        };
        
        fetch(productToEdit, requestOptions)
            .then(response => {
                console.log('product edited');
                response.json();
                onClose();
                handleUpdateProd();
            })
            .catch(res => console.log(res))
    }


    return(
        <AddProductModal 
            open={open} 
            onClose={onClose} 
            saveInfo={saveInformation} 
            defaultValues={prodValues}
            titleText='Edit the product information' 
            btnText='Save'>
        </AddProductModal>
    )
}