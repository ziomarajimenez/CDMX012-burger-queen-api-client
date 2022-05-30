/* import { getEmployees } from "../../lib/firestore";
import { useEffect, useState } from "react"; */
import './EmployeesList.css';

export const EmployeesList = () => {
    /* const [ workers, setWorkers ] = useState();
    
    useEffect(()=>{
        getEmployees()
        .then(list => setWorkers(list));
    }, []) */

    //console.log(workers)

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
                    <tr>
                        <td>Zioma</td>
                        <td>Jimenez</td>
                        <td>zioma@gmail.com</td>
                        <td>Chef</td>
                    </tr>
                    <tr>
                        <td>Isabela</td>
                        <td>Huitrón</td>
                        <td>isa@gmail.com</td>
                        <td>Manager</td>
                    </tr>
                    <tr>
                        <td>Perla</td>
                        <td>Del Ángel</td>
                        <td>perladelangel@gmail.com</td>
                        <td>Waitress</td>
                    </tr>
                   
                    {/* { workers.map(person => {
                        return(
                            <tr key={person.id} >
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.role}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
                
            </table>
        </div>
    )
}
