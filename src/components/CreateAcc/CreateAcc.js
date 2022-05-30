import { useState } from 'react';
import './CreateAcc.css';
//import { saveNewUser } from '../../lib/firestore';
import { createAccWithEmail, currentUser, updateUser } from '../../lib/firebaseAuth';
import ReactDOM from "react-dom";
import badge from '../../assets/Badge.png';
import { createAccError } from '../../utils/errorMessage';

export const CreateAcc = ({ open, onClose }) => {
    const [ password, setPassword ] = useState('');
    const [ passwordConf, setPasswordConf ] = useState('');

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

    const clearForm = () => {
        const emptyValues = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            role: ''
        }

        setValues(emptyValues);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const errorArea = document.getElementById('errorArea');

        if(password === passwordConf){
            values.password = password; //setting the matched passwords as value

            const originalUser = currentUser(); // current user, user that originally loged in
            
            createAccWithEmail(values.email, values.password)
            .then(()=>{
                errorArea.innerText = '';

                const newUser = currentUser();
                const { uid } = newUser; // gets new user uid
                console.log(uid)
                updateUser(originalUser); //gets back to the original user

                //HERE we would need to save the data ----------------- (probably)

                clearForm();
                onClose();
            }) 
            .catch(error =>{ //handle erros in the createacc process
                errorArea.innerText = createAccError(error.code);
            });
        }  else { //handle when passwords don't match
            errorArea.innerText = 'Passwords do not match, please try again.';
        }
    }


    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal new-employee-modal'>
                <button className="close-modal" onClick={() => {
                    clearForm();
                    onClose();
                }}> X </button>

                <div className='new-employee-title'>
                    <img src={badge} alt="badge icon" className="badge-icon"></img>
                    <h1 className='new-employee-h1'>Register a new employee</h1>
                </div>
                
                <form onSubmit={handleSubmit} className='create-acc-form' id='createAccForm'>
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
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>

                    <label htmlFor='password-conf'>Confirm password</label>
                    <input
                        type='password'
                        id='passwordConf'
                        name='password-conf'
                        placeholder='mypassword123'
                        onChange={(e) => setPasswordConf(e.target.value)}>
                    </input>

                    <label htmlFor='role'>Role</label>
                    <select name='role' value={values.role} onChange={handleChange}>
                        <option value='Waiter'>Waiter</option>
                        <option value='Chef'>Chef</option>
                        <option value='Manager'>Manager</option>
                    </select>

                    <span id='errorArea' className='error-msg'/>
                
                    <button type='submit' className='new-employe-btn'>Add new employee</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
