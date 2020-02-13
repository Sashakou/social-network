import React from 'react';
const Profile = () => {
    return(
        <div className="profile flex">
            <div className="profile__avatar">
                <img className="profile__img"  src={require('../img/avatar.png')} alt=""/>
            </div>
            <div className="profile__info">
                <h3>Bober H.</h3>
                <p>05.07.92</p>
                <p>City: Kyiv</p>
                <p>Education: DUT</p>
                <p>Web site: google.com</p>
            </div>
        </div>
    );
}


export default Profile;