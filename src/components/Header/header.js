import logo from '../../assets/BQ logo sin fondo.png'
import purchaseIcon from '../../assets/purchaseicon.png';
import profileIcon from '../../assets/Profile.png';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useState } from 'react';
import { currentUser, logOut } from '../../lib/firebaseAuth';
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header'>
            <img src={logo} alt="burger queen logo" className='bq-logo-header'></img>
            {<img src={purchaseIcon} alt="purchase icon" className='icon' id="purchaseIcon" onClick={() => navigate('/activeorders')}></img>}
            <img src={profileIcon} alt="profile icon" className='icon' onClick={() => setIsOpen(true)}></img>
            <ProfileModal open={isOpen} onClose={() => setIsOpen(false)} user={currentUser()} logOut={logOut} />
        </header>
    );
}
