import { useState } from "react";
import ReactDOM from "react-dom";

export const AddProductModal = ({open, onClose}) => {
    const [values, setValues] = useState()

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
                    <label htmlFor='firstName'>First Name</label>
                    {/* <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='Jane'
                        value={values.firstName}
                        onChange={handleChange}>
                    </input> */}

                    <label htmlFor='lastName'>Last Name</label>
                    {/* <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Doe'
                        value={values.lastName}
                        onChange={handleChange}>
                    </input> */}

                    <span id='errorArea' className='error-msg' />

                    <button type='submit' className='new-employe-btn'>Add new product</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
