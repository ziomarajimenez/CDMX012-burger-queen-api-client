import { useState } from 'react';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import './CreateAcc.css';


export const CreateAcc = ({saveNewUser}) => 
{
    const [values, setValues] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: ''
    });

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

    /* if(accCreated === true){
        saveNewUser(user, values);
    } */

    return (
        <>
            <Header />
            <h1>Create a new account</h1>
            <p>Insert below the data of the new employee</p>
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

            <Footer />
        </>
    );
}