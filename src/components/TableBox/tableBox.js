import tableImg from '../../assets/table.png'
import './tableBox.css'
import DeliveredModal from '../Delivered Modal/DeliveredModal'
import { useState } from 'react';

export const TableBox = ({ tableObject }) => {
    let classStatus = ''

    const [isActive, setIsActive] = useState(false);

    if (tableObject.status !== 'ready' || isActive) {
        classStatus = "btn-table"
    } else {
        classStatus = "btn-table ready"
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={classStatus} id="btnTable" onClick={() => { if (tableObject.status === 'ready') { setIsOpen(true) } }}>
                Table: {tableObject.table}
                <img src={tableImg} alt="img-table" id="imgTable" />
            </button>
            <DeliveredModal open={isOpen} onClose={() => setIsOpen(false)} id={tableObject.id} accept={() => setIsActive(true)} >
            </DeliveredModal>
        </>

    );
}

