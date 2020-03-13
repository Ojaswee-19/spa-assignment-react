import React from 'react';
import logo from '../../images/1145.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
                <img src={logo} alt=""/>
                <nav>
                <a href="/members">Members</a>
                <a href="/appointment">Appointment</a>
                <a href="/shop">Shop</a>  
                </nav>
            
            
        </div>
    );
};

export default Header;