import { CreateAccModal } from "../CreateAccModal/CreateAccModal";

export const EditEmployee = ({open, onClose, idUser, name, lastName, email, role}) => {
    if (!open) return null;

    const userValues = {
        email: email,
        password: '',
        firstName: name,
        lastName: lastName,
        role: role
    };

    const saveInformation = (errorArea, values, setValues) => {
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
        fetch('http://localhost:3333/users', requestOptions)
            .then(response => {
                console.log('hola');
                response.json();
            })
            .catch(res => console.log(res))
    }

    return(
        <CreateAccModal open={open} 
            onClose={onClose} 
            saveInformation={saveInformation} 
            initialValues={userValues}>
        </CreateAccModal>
    )
}