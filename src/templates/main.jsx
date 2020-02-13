import React from 'react';
import Nav from './nav'
import Profile from './profile';
const Main = () => {
    return(
        <div className="main">
            <Nav />
            <div className="content">
                <div className="img-block"></div>
                <Profile />
            </div>
        </div>
    );
}

export default Main;