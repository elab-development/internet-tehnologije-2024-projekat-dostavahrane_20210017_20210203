//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Dishes from './components/Dishes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Restaurants from './components/Restaurants';
import borneopica from "./photos/borneopica.avif";
import hiltonbiftek from "./photos/hiltonbiftek.jpg";
import pasta from "./photos/pasta.jpg";
import karadjordjeva from "./photos/karadjordjeva.jpg";


function App() {
  const restaurants = [
    {
        id:1,
        name:"Borneo",
        email:"borneo@gmail.com",
        address:"Njegoseva",
        phone:"011333444",
        description:"250din - 30min",
        pic: borneopica,
    },
    {
        id:2,
        name:"Vetrenjaca",
        email:"vetrenjaca@gmail.com",
        address:"Tamiski kej",
        phone:"011222333",
        description:"200din - 35min",  
        pic: karadjordjeva,
    },
    {
        id:3,
        name:"Hilton",
        email:"hilton@gmail.com",
        address:"Beogradska ulica",
        phone:"013343555",
        description:"400din - 45min", 
        pic: hiltonbiftek, 
    },
    {
        id:4,
        name:"Poco loco",
        email:"pocoloco@gmail.com",
        address:"Brace jovanovica",
        phone:"013343777",
        description:"300din - 40min",  
        pic: pasta, 
    }
]
  return <div className="App">
    <Router>
      <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Dishes />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurants" element={<Restaurants restaurants={restaurants}/>}></Route>
      </Routes>
    </Router>
  </div>;
    
}

export default App;
