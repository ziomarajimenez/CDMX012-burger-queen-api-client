import React from 'react';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import './CreateAcc.css';


export const CreateAcc = ({createAccWithEmail}) => 
{
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        role: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createAccWithEmail(values.email, values.password);
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

    return (
        <>
            <Header />
            <h1>Create a new account</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input 
                    type='text' 
                    id='firstName' 
                    name='firstName' 
                    value={values.firstname}
                    onChange={handleChange}>
                </input>

                <label htmlFor='lastName'>Last Name</label>
                <input 
                    type='text' 
                    id='lastName' 
                    name='lastName' 
                    value={values.lastname}
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
                    type='text' 
                    id='password' 
                    name='password' 
                    placeholder='mypassword123'
                    value={values.password}
                    onChange={handleChange}>
                </input>

                <label htmlFor='role'>Role</label>
                <input 
                    type='text' 
                    id='role' 
                    name='role' 
                    placeholder='Waiter/Cook/Admin' 
                    value={values.role}
                    onChange={handleChange}>
                </input>

                <button type='submit'>Sign up</button>

            </form>

            <Footer />
        </>
    );
}