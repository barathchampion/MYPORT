import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/pages/landing/index';
import Mainpage from './components/pages/MainPage';
import Content from './components/pages/Content';
import NavBar from './components/pages/Navbar';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Landing />} path='/'/>
        <Route element={<Mainpage />} path='/myportfolio'/>
        <Route element={<Content />} path='/content'/>
        <Route element={<NavBar />} path='/navbar'/>
      </Routes>
    </div>
  );
}

export default App;
