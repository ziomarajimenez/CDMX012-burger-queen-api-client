import logo from '../../assets/BQ logo sin fondo.png'
import purchaseIcon from '../../assets/purchaseicon.png';
/* import profileIcon from '../../assets/Profile.png'; */
import logOutIcon from '../../assets/log-out-icon.png';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useState, useEffect } from 'react';
import { currentUser, logOut } from '../../lib/firebaseAuth';
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../lib/firebaseConfig';

export const Header = () => {
    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);
    const [ userInf, setUserInf ] = useState();
    const [ userRole, setUserRole ] = useState();

    const user = currentUser();

    useEffect(()=>{
        const getUser = () => {
            const docRef = doc(db, "employees", user.uid);
            const docSnap = getDoc(docRef);
            return docSnap;
        }

        getUser().then((res) => {
            if (res.exists()) {
                setUserInf(res.data());
                setUserRole(res.data().roles)
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [user.uid]);
    
    return (
        <header className='header'>
            <img src={logo} alt="burger queen logo" className='bq-logo-header' onClick={() => navigate('/')}></img>

            {userRole  === 'Waiter' ? 
                <img src={purchaseIcon} alt="purchase icon" className='icon' id="purchaseIcon" onClick={() => navigate('/activeorders')}></img> 
                :null}

            <img src={logOutIcon} alt="profile icon" className='icon' onClick={() => setIsOpen(true)}></img>

            <ProfileModal 
                open={isOpen} 
                onClose={() => setIsOpen(false)} 
                user={userInf} 
                logOut={logOut} 
                role={userRole}
            />
        </header>
    );
}
