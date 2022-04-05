import React , {useState}from 'react' ;
import './App.css';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  const[page,setPage]= useState(<AboutMe/>)
  return (
    <>
      
      <NavBar setPage ={setPage} />
      <main>
{page}
        <Footer />
      </main>
    </>
    
  );
}

export default App;
