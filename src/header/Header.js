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
            <div className="h-spacer"/>
            <button className="Menu-Btn nav-btn btn-slide-line center btn from-middle">About</button>
            <button className="Menu-Btn nav-btn btn-slide-line center btn from-middle">Experience</button>
            <button className="Menu-Btn nav-btn btn-slide-line center btn from-middle">Contact</button>
        </div>
    )
}

export default Header;