import { CreateAccModal } from "../CreateAccModal/CreateAccModal";

export const EditEmployee = ({open, onClose, employee, handleUpdate}) => {
    if (!open) return null;

    const userValues = {
        email: employee.email,
        password: employee.password,
        firstName: employee.name,
        lastName: employee.lastName,
        role: employee.roles
    };

    const saveInformation = (values) => {

        const userId = 'https://62a22b92cd2e8da9b003f634.mockapi.io/users/' + employee.id;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: employee.id,
                name: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                roles: values.role,
                admin: values.role === 'Manager' ? true : false
            })
        };
        
        fetch(userId, requestOptions)
            .then(response => {
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