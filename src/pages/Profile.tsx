import '../App.css';
import profileImage from '../assets/profile/profile.png';

const Profile = () => {

    return (

        <div className="profile-container">
        <img src={profileImage} alt="Profile" />
        <div className="text-container">
            <h1>Ime Prezime</h1>
            <div className="details">
                <h2>Email</h2>
                <h2>Broj telefona</h2>
            </div>
            <div className="contact-info">
                <span>mailadresa@gmail.com</span>
                <span>+381601111111</span>
            </div>
        </div>
    </div>
    );
};

export default Profile;