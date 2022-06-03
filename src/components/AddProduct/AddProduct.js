import { AddProductModal } from "../AddProductModal/AddProductModal";

export const AddProduct = ({open, onClose}) => {
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
        fetch('http://localhost:3333/products', requestOptions)
            .then(response => {
                console.log('saved');
                response.json();
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
    />
  )
}
