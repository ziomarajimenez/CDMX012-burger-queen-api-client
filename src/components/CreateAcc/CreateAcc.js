import { useState } from 'react';
import './CreateAcc.css';
import { saveNewUser } from '../../lib/firestore';
import ReactDOM from "react-dom" 

export const CreateAcc = ({open, onClose}) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: ''
    });

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
        saveNewUser(values);
    }

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal'>
                <button className="close-modal" onClick={onClose}> X </button>
                <h1>Create a new account</h1>
                <form onSubmit={handleSubmit} className='create-acc-form'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='Jane'
                        value={values.firstName}
                        onChange={handleChange}>
                    </input>

                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Doe'
                        value={values.lastName}
                        onChange={handleChange}>
                    </input>

                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='myemail@gmail.com'
                        value={values.email}
                        onChange={handleChange}>
                    </input>

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='mypassword123'
                        value={values.password}
                        onChange={handleChange}>
                    </input>

                    <label htmlFor='role'>Role</label>
                    <select name='role' value={values.role} onChange={handleChange}>
                        <option value='waiter' defaultValue>Waiter</option>
                        <option value='cook'>Cook</option>
                        <option value='admin'>Manager</option>
                    </select>

                    <button type='submit'>Create Account</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )


}