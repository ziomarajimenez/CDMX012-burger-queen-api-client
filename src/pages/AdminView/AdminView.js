import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { useState } from "react";
import { CreateAcc } from "../../components/CreateAcc/CreateAcc";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { ProductList } from "../../components/ProductList/ProductList";
import './AdminView.css';

export const AdminView = () => {
    const [ view, setView ] = useState('employees');
    const [ isOpen, setIsOpen ] = useState(false);

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
                {view === 'employees' ? <EmployeesList /> : <ProductList /> }
            </section>

            <CreateAcc open={isOpen} onClose={() => setIsOpen(false)} />
            <Footer />
        </>
    )
}
