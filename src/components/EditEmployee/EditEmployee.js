import { CreateAccModal } from "../CreateAccModal/CreateAccModal";

export const EditEmployee = ({open, onClose, idUser, name, lastName, email, password, role, handleUpdate}) => {
    if (!open) return null;

    const userValues = {
        email: email,
        password: password,
        firstName: name,
        lastName: lastName,
        role: role
    };

    const saveInformation = (values) => {
        const userId = 'http://localhost:3333/users/' + idUser;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: idUser,
                name: values.firstName,
                lastName: values.lastName,
                email: values.email,
                roles: values.role,
                admin: values.role === 'Manager' ? true : false
            })
        };
        
        fetch(userId, requestOptions)
            .then(response => {
                console.log('hola');
                response.json();
                onClose();
                handleUpdate();
            })
            .catch(res => console.log(res))
    }

    return(
        <CreateAccModal open={open} 
            onClose={onClose} 
            saveInformation={saveInformation} 
            initialValues={userValues}
            titleText={'Edit employee'}
            buttonText={'Update information'}>
        </CreateAccModal>
    )
}