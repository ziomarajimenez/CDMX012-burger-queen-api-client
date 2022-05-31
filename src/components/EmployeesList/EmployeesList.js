import './EmployeesList.css';

export const EmployeesList = (props) => {

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                        <th>Opt</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees?.map(employee => {
                        return (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.roles}</td>
                        </tr>
                        );
                    })}

                </tbody>
                
            </table>
        </div>
    )
}
