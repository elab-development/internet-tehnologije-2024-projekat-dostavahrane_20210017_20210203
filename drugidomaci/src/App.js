//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Restaurants from './components/Restaurants';
import borneopica from "./photos/borneopica.jpg";
import hiltonbiftek from "./photos/hiltonbiftek.jpg";
import pasta from "./photos/pasta.jpg";
import karadjordjeva from "./photos/karadjordjeva.jpg";
import Categories from './components/Categories';
import Home from './components/Home';

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
        categories: [1,2,3,4,5,6,8,9],
    },
    {
        id:2,
        name:"Vetrenjača",
        email:"vetrenjaca@gmail.com",
        address:"Tamiski kej",
        phone:"011222333",
        description:"200din - 35min",  
        pic: karadjordjeva,
        categories: [2,3,6,7,8],
    },
    {
        id:3,
        name:"Hilton",
        email:"hilton@gmail.com",
        address:"Beogradska ulica",
        phone:"013343555",
        description:"400din - 45min", 
        pic: hiltonbiftek,
        categories: [1,2,3,5,7,8,9],
    },
    {
        id:4,
        name:"Poco loco",
        email:"pocoloco@gmail.com",
        address:"Brace jovanovica",
        phone:"013343777",
        description:"300din - 40min",  
        pic: pasta, 
        categories: [1,2,3,4,6,8,9],
    }
]

  const categories = [
      {
        id:1,
        name:"Pizza 32cm",
        icon: require('./photos/smallpizza.png')
      },
      {
        id:2,
        name:"Paste",
        icon: require('./photos/pasta.png')
      },
      {
        id:3,
        name:"Roštilj",
        icon:require('./photos/rostilj.png')
      },
      {
        id:4,
        name:"Pizza 50cm",
        icon:require('./photos/pizza.png')
      },
      {
        id:5,
        name:"Burgeri",
        icon:require('./photos/burger.png')
      },
      {
        id:6,
        name:"Obrok salate",
        icon:require('./photos/salata.png')
      },
      {
        id:7,
        name:"Sendviči",
        icon:require('./photos/sendvic.png')
      },
      {
        id:8,
        name:"Pića",
        icon:require('./photos/pica.png')
      },
      {
        id:9,
        name:"Deserti",
        icon:require('./photos/desert.png')
      },

  ]

  const dishes = [
    { id: 1, name: "Capricciosa 32cm", description: "Pelat, gauda, sunka, sampinjoni, masline", category_id: 1, isPopular: false,},
    { id: 2, name: "Napolitana 32cm", description: "Pelat, gauda, sunka, masline", category_id: 1, isPopular: false,},
    { id: 3, name: "Funghi 32cm", description: "Pelat, gauda, sampinjoni, masline", category_id: 1, isPopular: false, },
    { id: 4, name: "Margherita 32cm", description: "Pelat, mocarela, bosiljak", category_id: 1, isPopular: true, pic: require('./photos/dish4.jpg')},
    { id: 5, name: "Quatro staggione 32cm", description: "Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline", category_id: 1, isPopular: false, },
    { id: 6, name: "Quatro formaggi 32cm", description: "Pelat, gorgonzola, mocarela, ementaler, parmezan, masline", category_id: 1, isPopular: false, },
    { id: 7, name: "Vegeterijana 32cm", description: "Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline", category_id: 1, isPopular: false, },
    { id: 8, name: "Veganska pizza 32cm", description: "Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline", category_id: 1, isPopular: true, pic: require('./photos/dish8.png') },
    { id: 9, name: "Capricciosa 50cm", description: "Pelat, gauda, sunka, sampinjoni, masline", category_id: 4, isPopular: true, pic: require('./photos/dish9.jpg')},
    { id: 10, name: "Napolitana 50cm", description: "Pelat, gauda, sunka, masline", category_id: 4, isPopular: false, },
    { id: 11, name: "Funghi 50cm", description: "Pelat, gauda, sampinjoni, masline", category_id: 4, isPopular: false, },
    { id: 12, name: "Margherita 50cm", description: "Pelat, mocarela, bosiljak", category_id: 4, isPopular: false, },
    { id: 13, name: "Quattro staggione 50cm", description: "Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline", category_id: 4, isPopular: true, pic: require('./photos/dish13.png')},
    { id: 14, name: "Quattro formaggi 50cm", description: "Pelat, gorgonzola, mocarela, ementaler, parmezan, masline", category_id: 4, isPopular: false, },
    { id: 15, name: "Vegeterijana 50cm", description: "Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline", category_id: 4, isPopular: false, },
    { id: 16, name: "Veganska pizza 50cm", description: "Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline", category_id: 4, isPopular: false, },
    { id: 17, name: "Carbonara", description: "Panceta, nautralna pavlaka, jaje, zacini", category_id: 2, isPopular: true, pic: require('./photos/dish17.jpg')},
    { id: 18, name: "Bolognese", description: "Sos od paradajza i mlevenog mesa, parmezan, zacini", category_id: 2, isPopular: true, pic: require('./photos/dish18.png')},
    { id: 19, name: "Pesto genovese", description: "Pileci file, pesto sos, neutralna pavlaka, zacini", category_id: 2, isPopular: false, },
    { id: 20, name: "Quatrro formaggi", description: "Gorgonzola, ementaler, parmezan, gauda, zacini", category_id: 2, isPopular: false, },
    { id: 21, name: "Pasta di mare", description: "Plodovi mora, paradajz, crni luk, zacini", category_id: 2, isPopular: false, }
  ];

  return <div className="App">
    <Router>
      <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurants" element={<Restaurants restaurants={restaurants}/>}></Route>
        <Route path="/categories" element={<Categories categories={categories} dishes={dishes} restaurants={restaurants}/>}></Route>
      </Routes>
    </Router>
  </div>;
    
}

export default App;
