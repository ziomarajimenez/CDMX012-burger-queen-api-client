import './CreateAcc.css';
import ReactDOM from "react-dom";
import badge from '../../assets/Badge.png';

const CreateAccModal = () => {
    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal new-employee-modal'>
                <button className="close-modal" onClick={() => {
                    setValues(emptyValues);
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

                    <span id='errorArea' className='error-msg' />

                    <button type='submit' className='new-employe-btn'>Add new employee</button>

                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
