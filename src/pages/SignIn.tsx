import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import '../App.css';
import loginImage from '../assets/login/login.png';

const SignIn: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (username !== '' && password !== '') {
            console.log(`Username: ${username}, Password: ${password}`);
            navigate('/profile', {state: {username}});
        } else {
            alert('Morate popuniti sva polja!');
        }

    };

    const handleRegisterClick = () => {
        console.log("Redirect to Register");
    };

    return (
        <div className="sign-in-container">
            <div className="image-container">
                <img src={loginImage} alt="Login Illustration" />
            </div>
            <div className="form-container">
                <h2>Prijavi se</h2>
                <TextInput 
                    type="text" 
                    placeholder="Korisničko ime" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <TextInput 
                    type="password" 
                    placeholder="Lozinka" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="button-group">
                    <Button label="Prijavi se" onClick={handleLoginClick} />
                    <Button label="Registruj se" onClick={handleRegisterClick} />
                </div>
            </div>
        </div>
    );
};

export default SignIn;