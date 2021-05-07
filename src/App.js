import './App.css';
import {Router} from '@reach/router'

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar path="/" />
      <Main />
      <About />
      <Skills />
    </>
  );
}

export default App;
