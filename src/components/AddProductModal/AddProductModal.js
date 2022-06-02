import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const AddProductModal = ({open, onClose}) => {
    const defaultValues = {
        id: '',
        name: '',
        price: '',
        type: 'beverage',
        dateEntry: '',
        menu: 'breakfast'
    };

    const [ values, setValues ] = useState(defaultValues);
    const [ lastProduct, setlastProduct ] = useState();

    useEffect(() => {
        fetch('http://localhost:3333/products')
            .then((response) => {
                return response.json()
            })
            .then((products) => {
                setlastProduct(products[products.length - 1]);
            })
    }, []);

    if (!open) return null;

    const saveNewProduct = (values) => {
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

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        saveNewProduct(values)
    }

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal new-product-modal'>
                <button className="close-modal" onClick={onClose}> X </button>

                <div className='new-prod-title'>
                    <h1 className='new-prod-h1'>Register a new product</h1>
                </div>

                <form onSubmit={handleSubmit} className='create-acc-form' id='createAccForm'>
                    <label htmlFor='name'>Name of the product</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='French fries'
                        value={values.name}
                        onChange={handleChange}>
                    </input> 

                    <label htmlFor='lastName'>Price</label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        placeholder='10'
                        value={values.price}
                        onChange={handleChange}>
                    </input> 

                    <label htmlFor='type'>Type</label>
                    <select id='type' name='type' value={values.type} onChange={handleChange}>
                        <option value='beverage'>Beverage</option>
                        <option value='burger'>Burger</option>
                        <option value='meal'>Meal</option>
                        <option value='side dish'>Side dish</option>
                    </select>

                    <label htmlFor='menu'>Menu</label>
                    <select id='menuInput' name='menu' value={values.menu} onChange={handleChange}>
                        <option value='breakfast'>Breakfast</option>
                        <option value='dinner'>Lunch/Dinner</option>
                    </select>

                    <span id='errorArea' className='error-msg' />

                    <button type='submit' className='new-employe-btn'>Add new product</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
