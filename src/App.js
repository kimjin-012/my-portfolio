import './App.css';
import {Router} from '@reach/router'

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project />
    </>
  );
}

export default App;
