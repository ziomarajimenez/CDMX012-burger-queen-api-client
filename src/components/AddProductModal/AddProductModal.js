import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './AddProductModal.css';
import mealIcon from '../../assets/meal-icon.png';


export const AddProductModal = ({open, onClose, defaultValues, saveInfo, titleText, btnText}) => {

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
        saveInfo(values, setValues, lastProduct);
    }

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal new-product-modal'>
                <button className="close-modal" onClick={onClose}> X </button>

                <div className='new-prod-title'>
                    <img src={mealIcon} alt='meal icon' className="meal-icon"/>
                    <h1 className='new-prod-h1'>{titleText}</h1>


                <form onSubmit={handleSubmit} className='create-acc-form new-prod-form' id='newProdForm'>
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

                    <button type='submit' className='new-employe-btn'>{btnText}</button>


                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
