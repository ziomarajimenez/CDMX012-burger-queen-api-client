import ReactDOM from 'react-dom';
import './ProfileModal.css';
import chefIcon from '../../assets/chef-icon.png';
import waiterIcon from '../../assets/waiter-red.png';
import managerIcon from '../../assets/manager.png';
import { useState, useEffect } from 'react';

export default function ProfileModal({ open, onClose, user, logOut, role }) {
    const [ pic, setPic ] = useState();

    useEffect(()=>{
        if (role === 'Waiter') {
            setPic(waiterIcon);
        } else if (role === 'Manager') {
            setPic(managerIcon);
        } else if (role === 'Chef') {
            setPic(chefIcon);
        };
    }, [role]);

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal profile-modal'>
                <button className="close-modal" onClick={onClose}> X </button>

                <img src={pic} alt="user's profile pic" className='profile-pic'></img>

                <div className='profile-txt'>
                    <p className='user-role'>{user.roles}</p>
                    <p className='display-name'>{user.name} {user.lastName}</p>
                    <p className='user-email'>{user.email}</p>
                </div>
                
                <button onClick={()=>{logOut()}} className='log-out-btn'>
                    Log out
                </button>
            </div>
        </>,
        document.getElementById('portal')
    )
}
