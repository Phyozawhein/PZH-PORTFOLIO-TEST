
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/layout.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>} />
      </Route>

    </Routes>
   
  
  );
}

export default App;
