import './CreateAcc.css';
import { createAccWithEmail, currentUser, updateUser } from '../../lib/firebaseAuth';
import { createAccError } from '../../utils/errorMessage';
import { CreateAccModal } from '../CreateAccModal/CreateAccModal';
import { saveFirestore } from '../../lib/firestore';

export const CreateAcc = ({ open, onClose, handleUpdate, updateEmployees }) => {
    const emptyValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 'Waiter'
    }

    if (!open) return null;

    const saveNewEmployee = (values, uid) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: uid,
                name: values.firstName,
                lastName: values.lastName,
                email: values.email,
                roles: values.role,
                admin: values.role === 'Manager' ? true : false
            })
        };
        fetch('http://localhost:3333/users', requestOptions)
            .then(response => {
                response.json();
                handleUpdate(updateEmployees);
            })
            .catch(res => console.log(res))
    }

    const saveInformation = (values, setValues, errorArea, password) => {
        values.password = password; //setting the matched passwords as value

        const originalUser = currentUser(); // current user, user that originally loged in

        createAccWithEmail(values.email, values.password)
            .then(() => {
                console.log('saveFirestore')
                //saveFirestore();

                errorArea.innerText = '';

                const newUser = currentUser();
                const { uid } = newUser; // gets new user uid
                //console.log(uid)
                updateUser(originalUser); //gets back to the original user
                return uid;

            }).then((uid) => {
                //HERE we would need to save the data -----------------
                saveNewEmployee(values, uid);

                setValues(emptyValues); //clears the form
                onClose(); //closes the modal window
                return saveFirestore(values, uid)
            }).then((hola) => {
                console.log(hola)
            })
            .catch(error => { //handle erros in the createacc process
                errorArea.innerText = createAccError(error.code);
            });
    }

    return (
        <CreateAccModal open={open}
            onClose={onClose}
            saveInformation={saveInformation}
            initialValues={emptyValues}>
        </CreateAccModal>
    );
}
