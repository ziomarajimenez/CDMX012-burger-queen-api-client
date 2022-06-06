import ReactDOM from 'react-dom';
import './ProfileModal.css';
import profilepic from '../../assets/Profile-pic-placeholder.png';
import logoutIcon from '../../assets/Log-out-icon.png';

export default function ProfileModal({ open, onClose, user, logOut }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='wrapper' />
            <div className='modal profile-modal'>
                <button className="close-modal" onClick={onClose}> X </button>

                <img src={profilepic} alt="user's profile pic" className='profile-pic'></img>

                <div className='profile-txt'>
                    <p className='user-role'>{user.roles}</p>
                    <p className='display-name'>{user.name} {user.lastName}</p>
                    <p className='user-email'>{user.email}</p>
                </div>
                

                <button onClick={()=>{logOut()}} className='log-out-btn'>
                    Log out
                    <img src={logoutIcon} alt='logout-icon' className='logout-icon'></img>
                </button>
            </div>
        </>,
        document.getElementById('portal')
    )
}
