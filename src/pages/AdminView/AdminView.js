import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { useState } from "react";
import { CreateAcc } from "../../components/CreateAcc/CreateAcc";

export const AdminView = () => {
    const [ view, setView ] = useState('employees');
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <Header />
            <div>
                <button type="button" className="employees-btn" onClick={()=>setView('employees')}>Employees</button>
                <button type="button" className="products-btn" onClick={()=>setView('products')}>Products</button>
            </div>

            <button type="button" onClick={()=>setIsOpen(true)}>+</button>

            <section className="table-section">
                { /* view === 'employees' ? Employees : ProductList */}
            </section>

            <CreateAcc open={isOpen} onClose={() => setIsOpen(false)} />
            <Footer />
        </>
    )
}
