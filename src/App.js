// import logo from './logo.svg';
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
// import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      {/* <Projects /> */}
      {/* <Contacts /> */}
      <Footer />
    </>
  );
}

export default App;
