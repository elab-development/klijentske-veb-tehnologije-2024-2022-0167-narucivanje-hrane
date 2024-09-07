import React, {useState} from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import '../App.css'; 
import s from '../assets/slika 3.png';
import i1 from '../assets/icons/instagram icon.png';
import i2 from '../assets/icons/facebook icon.png';
import i3 from '../assets/icons/tiktok icon.webp';


const Contact: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendClick = () => {
        // Logika za slanje forme ili poruke
        console.log(`Email: ${email}, Poruka: ${message}`);
    };
    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-image">
                    <img src={s} alt="slika 3" />
                </div>
                <div className="contact-form">
                    <TextInput 
                        type="email" 
                        placeholder="E-adresa" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <TextInput 
                        type="text" 
                        placeholder="Postavite pitanje" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        isTextArea={true} 
                    />
                    <Button label="Pošalji" onClick={handleSendClick} />
                </div>
            </div>
            <div className="social-icons">
                <a href="#"><img src={i1} alt="Instagram" /></a>
                <a href="#"><img src={i3} alt="TikTok" /></a>
                <a href="#"><img src={i2} alt="Facebook" /></a>
            </div>
        </div>
    );
};

export default Contact;