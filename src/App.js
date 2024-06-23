import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CAT from './components/CAT';
import Services from './pages/Services';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar/>
      {/* <Routes>
        <Route element={<Home/> } path='/'/>    
      </Routes> */}
      <CAT/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
