import React from 'react';
import menu_icon from './menu_icon_white.ico';
import dm_logo from './dm_logo_white.ico';
import './Header.scss';
import '../common/style.scss'

const Header = () => {

    const handleClick = () => {
        console.log("header button clicked");
    }

    return ( 
        <div className="App-Header">
            <button className="Logo-Btn" onClick={handleClick}>
                <img src={dm_logo} alt="logo_image" />
            </button>
            <button className="Menu-Btn nav-btn btn-slide-line center">About Me</button>
            <button className="Menu-Btn nav-btn btn-slide-line center">Project Work</button>
            <button className="Menu-Btn nav-btn btn-slide-line center">Contact</button>
            <button className="Menu-Btn" onClick={handleClick}>
                <img src={menu_icon} alt="menu_image"/>
            </button>
        </div>
    )
}

export default Header;