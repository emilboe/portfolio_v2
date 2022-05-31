import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar';
import About from './components/about';
import Title from './components/title';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Project from './components/project';


function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  // const handleFollow = () => {
  //   setScrollY(window.pageYOffset);
  // }


  // useEffect(() => {
  //   const watch = () => {
  //     window.addEventListener('scroll', handleFollow);
  //   }
  //   watch();
  //   return () => {
  //     window.removeEventListener('scroll', handleFollow);
  //   }
  // })

  const handleScroll = (myTop) => {
    let Top = 0;
    if (myTop === 'about') {
      Top = aboutRef.current.offsetTop - 60;
    } else if (myTop === 'skills') {
      Top = skillsRef.current.offsetTop - 60;
    } else if (myTop === 'portfolio') {
      Top = portfolioRef.current.offsetTop - 60;
    }
    window.scrollTo({
      top: Top,
      behavior: "smooth"
    });
    // setScrollY(Top);
  }

  return (
    <Router>

      <Routes>
        <Route path="/project/:id" element={
          <>
            <Navbar hideButtons={true} handleScroll={handleScroll} />
            <Project handleScroll={handleScroll}/>
          </>
        } />

        <Route path="/" element={
          <>
            <Navbar hideButtons={false} handleScroll={handleScroll} />
            <Title />
            <div className="container">
              <About refs={aboutRef} />
              <Skills refs={skillsRef} />
              <Portfolio refs={portfolioRef} />
            </div>
          </>
        } />
      </Routes>

      <Footer handleScroll={handleScroll} />
    </Router>
  );
}

export default App;
