import React from 'react';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';

export default function NavBar({ setPage}) {

    return (
        
        <div>
            <nav className="navbar navbar-dark bg-primary d-flex justify-content-between">
                <h1 className="navbar-brand" >Navbar</h1>

                <div>
                    
                    <button onClick={() => setPage(<Projects />)}>Projects</button> 
                    <button onClick={() => setPage(<AboutMe />)}>About Me</button> 
                    <button onClick={() => setPage(<ContactMe />)}>Contact Me</button> 
                </div>
            </nav>

        </div>
    );
}
