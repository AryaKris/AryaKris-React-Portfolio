import React from 'react';
import ProfilePic from '../../images/Profile_Pic.png'
export default function AboutMe() {
    return (
        <div>
            <div className="row">

                <div className="col">


                    <img className = "profilePic" src={ProfilePic} alt="biopic"></img>
                </div>

                <div className="col">
                    <h1>Arya Krishna</h1>
                    <p>Get to know me</p>

                </div>
            </div>


        </div>
    );
}
