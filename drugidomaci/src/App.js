//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Dishes from './components/Dishes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  
  return <div className="App">
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Dishes />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  </div>;
    
}

export default App;
