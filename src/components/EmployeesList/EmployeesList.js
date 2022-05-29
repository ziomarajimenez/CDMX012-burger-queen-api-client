import { getEmployees } from "../../lib/firestore";
import { useEffect, useState } from "react";

export const EmployeesList = () => {
    const [ workers, setWorkers ] = useState();
    
    useEffect(()=>{
        getEmployees()
        .then(list => setWorkers(list));
    }, [])

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
                    </tr>
                </thead>
                <tbody>
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
