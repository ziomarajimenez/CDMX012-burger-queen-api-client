import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { useState, useEffect } from "react";
import { CreateAcc } from "../../components/CreateAcc/CreateAcc";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { ProductList } from "../../components/ProductList/ProductList";
import './AdminView.css';

export const AdminView = () => {
    const [ view, setView ] = useState('employees');
    const [ isOpen, setIsOpen ] = useState(false);
    const [ employees, setEmployees ] = useState();
    const [ updateEmployees, setUpdate ] = useState(0);
  
    useEffect(() => {
        fetch('http://localhost:3333/users')
            .then((response) => {
                return response.json()
            })
            .then((employees) => {
                setEmployees(employees);
                console.log(employees)
            })
    }, [updateEmployees])

    const handleUpdate = (updateEmployees) => {
        console.log('saludines')
        setUpdate(updateEmployees + 1);
    }

    return (
        <>
            <Header />
            <div className="top-buttons">
                <div className="selection-buttons">
                    <button type="button" className="employees-btn" onClick={()=>setView('employees')}>Employees</button>
                    <button type="button" className="products-btn" onClick={()=>setView('products')}>Products</button>
                </div>

                <button type="button" onClick={()=>setIsOpen(true)} className="add-acc-btn">+</button>
            </div>
            
            <section className="table-section">
                {view === 'employees' ? <EmployeesList employees={employees} /> : <ProductList /> }
            </section>

            <CreateAcc open={isOpen} handleUpdate={handleUpdate} updateEmployees={updateEmployees} onClose={() => setIsOpen(false)} />
            <Footer />
        </>
    )
}
