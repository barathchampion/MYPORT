import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/pages/landing/index';
import Myportfolio from './components/pages/Myportfolio';
import NavBar from './components/pages/Navbar';


function App() {
  return (
    <div className="App">
    <Router>
       {/* <Landing /> */}
      <Routes>
        <Route element={<Landing />} path='/'/>
        <Route element={<NavBar />} path='/navbar'/>
        <Route element={<Myportfolio />} path='/myportfolio'/>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
