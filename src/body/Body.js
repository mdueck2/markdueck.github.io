import React from 'react';
import '../common/style.scss';
import './Body.scss'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

const Body = () => {

    const handleClick = () => {
        console.log("welcome button clicked");
    }

    return (
        <div className="App-Body" onClick={handleClick}>
            <button className="nav-btn btn-slide-line center">Welcome</button>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Body;