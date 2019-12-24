import React from 'react';
import './Body.scss';

const Body = () => {

    const handleClick = () => {
        console.log("welcome button clicked");
    }

    return (
        <div className="App-Body" onClick={handleClick}>
            <button>Welcome</button>
        </div>
    )
}

export default Body;