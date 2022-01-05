import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact';
import Home from './components/views/Home';

function App(){
  return (
    //routes or paths on how the code runs
    <BrowserRouter>
    <Navbar/>
    <div className='App'>
    </div>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/contacts" exact element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
