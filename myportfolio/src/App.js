import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/pages/landing/index';
import Mainpage from './components/pages/MainPage';
import Content from './components/pages/Content';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route element={<Landing />} path='/'/>
        <Route element={<Mainpage />} path='/myportfolio'/>
        <Route element={<Content />} path='/content'/>
      </Routes>
    </div>
  );
}

export default App;
