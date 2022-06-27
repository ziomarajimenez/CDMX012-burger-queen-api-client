import { AddProductModal } from "../AddProductModal/AddProductModal";


export const AddProduct = ({open, onClose, handleUpdateProd}) => {
    const defaultValues = {
        id: '',
        name: '',
        price: '',
        type: 'beverage',
        dateEntry: '',
        menu: 'breakfast'
    };

    if (!open) return null;

    const saveNewProduct = (values, setValues, lastProduct) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: lastProduct.id + 1, //fetch values
                name: values.name,
                price: values.price,
                type: values.type,
                dateEntry: new Date().getTime(),
                menu: values.menu
            })
        };
        fetch('https://62a22b92cd2e8da9b003f634.mockapi.io/products', requestOptions)
            .then(response => {
                //console.log('saved');
                response.json();
                handleUpdateProd();
                setValues(defaultValues);
                onClose()
            })
            .catch(res => console.log(res))
    }

  return (
    <AddProductModal 
        open={open} 
        onClose={onClose} 
        defaultValues={defaultValues} 
        saveInfo={saveNewProduct}
        titleText='Register a new product'
        btnText='Add new product'
    />
  )
}
