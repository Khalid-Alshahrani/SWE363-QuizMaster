import "./Navbar.css";
import React, { useState } from "react";
import ContactUsModal from "./ContactUsModal";
import GetStartedButton from "./GetStartedButton";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showContactUsModal, setContactUsModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openContactUsModal = () => {
        setContactUsModal(true);
      };
      
      const closeContactUsModal = () => {
        setContactUsModal(false);
      };

      const openSignUpModal = () => {
        setShowSignUpModal(true);
        setShowSignInModal(false);
    };
    
    const closeSignUpModal = () => {
        setShowSignUpModal(false);
    };
    
    const openSignInModal = () => {
      setShowSignInModal(true);
      setShowSignUpModal(false);
    };
    
    const closeSignInModal = () => {
      setShowSignInModal(false);
    };

    const navigate = useNavigate();
    function handleClick(){navigate('/');}
    return(
        <header className="header">
            <div className="logo" onClick={handleClick}>QuizMaster</div>
            <nav className={`navbar ${isOpen ? "open" : ""}`}>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            <a href="#about">About</a>
            <a onClick={openContactUsModal} >Contact Us</a>
            </nav>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
            {showContactUsModal && <ContactUsModal onClose={closeContactUsModal} />}
            {showSignInModal && <SignInModal onClose={closeSignInModal} />} {/* Sign-in modal */}
            {showSignUpModal && <SignUpModal onClose={closeSignUpModal} openModal={openSignInModal} />}

        </header>
    )

}
export default Navbar;