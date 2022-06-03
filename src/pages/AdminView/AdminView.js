import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { useState, useEffect } from "react";
import { CreateAcc } from "../../components/CreateAcc/CreateAcc";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { ProductList } from "../../components/ProductList/ProductList";
import './AdminView.css';
import { AddProduct } from '../../components/AddProduct/AddProduct';

export const AdminView = () => {
    const [ view, setView ] = useState('employees');
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isOpenProd, setIsOpenProd ] = useState(false);
    const [ employees, setEmployees ] = useState();
    const [ updateEmployees, setUpdate ] = useState(0);
  
    useEffect(() => {
        fetch('http://localhost:3333/users')
            .then((response) => {
                return response.json()
            })
            .then((employees) => {
                setEmployees(employees);
                //console.log(employees)
            })
    }, [updateEmployees])

    const handleUpdate = () => {
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

                { view === 'employees' ? 
                    <button type="button" onClick={()=>setIsOpen(true)} className="add-acc-btn">+</button> :
                    <button type="button" onClick={()=>setIsOpenProd(true)} className="add-acc-btn">+</button> }
            </div>
            
            <section className="table-section">
                {view === 'employees' ? <EmployeesList employees={employees} handleUpdate={handleUpdate}/> : <ProductList /> }
            </section>

            <CreateAcc open={isOpen} handleUpdate={handleUpdate} onClose={() => setIsOpen(false)} />
            <AddProduct open={isOpenProd} onClose={() => setIsOpenProd(false)}/>

            <Footer />
        </>
    )
}
