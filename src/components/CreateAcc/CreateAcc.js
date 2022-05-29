import { useState } from 'react';
import './CreateAcc.css';
import { saveNewUser } from '../../lib/firestore';
import ReactDOM from "react-dom";
import badge from '../../assets/Badge.png';

export const CreateAcc = ({ open, onClose }) => {
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
            <div className='modal new-employee-modal'>
                <button className="close-modal" onClick={onClose}> X </button>

                <div className='new-employee-title'>
                    <img src={badge} alt="badge icon" className="badge-icon"></img>
                    <h1 className='new-employee-h1'>Register a new employee</h1>
                </div>
                
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

                    <button type='submit' className='new-employe-btn'>Add new employee</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
