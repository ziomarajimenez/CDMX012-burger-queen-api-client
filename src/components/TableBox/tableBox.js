import tableImg from '../../assets/table.png'
import './tableBox.css'
import DeliveredModal from '../Delivered Modal/DeliveredModal'
import { useState } from 'react';

export const TableBox = ({ tableObject }) => {
    let classStatus = ''

    if (tableObject.status === 'ready') {
        classStatus = "btn-table ready"
    } else {
        classStatus = "btn-table"
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={classStatus} id="btnTable" onClick={() => { if (tableObject.status === 'ready') { setIsOpen(true) } }}>
                Table: {tableObject.table}
                <img src={tableImg} alt="img-table" id="imgTable" />
            </button>
            <DeliveredModal open={isOpen} onClose={() => setIsOpen(false)} id={tableObject.id} >
            </DeliveredModal>
        </>

    );
}

