import React from 'react';
import ProfilePic from '../../images/Profile_Pic.png'
export default function AboutMe() {
    return (
        <div>
            <div className="row">

                <div className="col">


                    <img className="profilePic" src={ProfilePic} style={{
                        resizeMode: "contain",
                        borderTopRightRadius: 20,
                        height: 200,
                        width: 200}} alt="biopic"></img>
                </div>

                <div className="col">
                    <p>
                        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                    </p>

                </div>
            </div>


        </div>
    );
}
