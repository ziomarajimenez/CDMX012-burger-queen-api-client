import '../CreateAcc/CreateAcc.css';
import ReactDOM from "react-dom";
import { useState } from 'react';
import badge from '../../assets/Badge.png';

export const CreateAccModal = ({ open, onClose, saveInformation, initialValues, titleText, buttonText }) => {
    const [values, setValues] = useState(initialValues)
    const [password, setPassword] = useState(initialValues.password);
    const [passwordConf, setPasswordConf] = useState(initialValues.password);

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
        values.password = password;
        evt.preventDefault();
        const errorArea = document.getElementById('errorArea');

        if (password === passwordConf) {
            saveInformation(values, setValues, errorArea, password);
        } else { //handle when passwords don't match
            errorArea.innerText = 'Passwords do not match, please try again.';
        }
    }

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal new-employee-modal'>
                <button className="close-modal" onClick={() => {
                    setValues(initialValues);
                    onClose();
                }}> X </button>

                <div className='new-employee-title'>
                    <img src={badge} alt="badge icon" className="badge-icon"></img>
                    <h1 className='new-employee-h1'>{titleText}</h1>
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}>
                    </input>

                    <label htmlFor='password-conf'>Confirm password</label>
                    <input
                        type='password'
                        id='passwordConf'
                        name='password-conf'
                        placeholder='mypassword123'
                        value={passwordConf}
                        onChange={(e) => setPasswordConf(e.target.value)}>
                    </input>

                    <label htmlFor='role'>Role</label>
                    <select name='role' value={values.role} onChange={handleChange}>
                        <option value='Waiter' selected>Waiter</option>
                        <option value='Chef'>Chef</option>
                        <option value='Manager'>Manager</option>
                    </select>

                    <span id='errorArea' className='error-msg' />

                    <button type='submit' className='new-employe-btn'>{buttonText}</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
