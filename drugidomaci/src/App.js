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
import Search from './components/Search';

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
        categories: [1,2,3,6,7,8],
    },
    {
        id:3,
        name:"Hilton",
        email:"hilton@gmail.com",
        address:"Beogradska ulica",
        phone:"013343555",
        description:"400din - 45min", 
        pic: hiltonbiftek,
        categories: [2,3,5,7,8,9],
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
    { id: 21, name: "Pasta di mare", description: "Plodovi mora, paradajz, crni luk, zacini", category_id: 2, isPopular: false, },
    { id: 22, name: "Cevapi", description: "Mesavina junetina i svinjetina 200g", category_id: 3, isPopular: false, },
    { id: 23, name: "Batak na zaru", description: "Svezi socni batak pecena na cumuru 200g", category_id: 3, isPopular: false, },
    { id: 24, name: "Cheeseburger", description: "150g junetina, gauda, panceta, paradajz, burger sos, kiseli krastavcici", category_id: 5, isPopular: false, },
    { id: 25, name: "Chickenburger", description: "150g pohovana piletina, mocarela, panceta, zelena salata, burger sos", category_id: 5, isPopular: false, },
    { id: 26, name: "Cezar salata", description: "Dresing, zelena salata, domaci kackavalj, piletina, panceta", category_id: 6, isPopular: false, },
    { id: 27, name: "Tuna salata", description: "Tunjevina, zelena salata, posni majonez, posni sir, masline, paradajz", category_id: 6, isPopular: false, },
    { id: 28, name: "Club sendvic", description: "Mocarela, sunka, jaje, paradajz, zelena salata, majonez, pomfrit", category_id: 7, isPopular: false, },
    { id: 29, name: "Posni sendvic", description: "Zelena salata, posni namaz, paradajz, posni kackavalj, tunjevina", category_id: 7, isPopular: false, },
    { id: 30, name: "Coca cola 0.5", description: "Mala", category_id: 8, isPopular: false, },
    { id: 31, name: "Coca cola 1.5", description: "Velika", category_id: 8, isPopular: false, },
    { id: 32, name: "Fanta 0.5", description: "Mala", category_id: 8, isPopular: false, },
    { id: 33, name: "Fanta 1.5", description: "Velika", category_id: 8, isPopular: false, },
    { id: 34, name: "Cheesecake", description: "Malina, plazma, slatka pavlaka", category_id: 9, isPopular: false, },
    { id: 35, name: "Tiramisu", description: "Kafa, slag, piskote, vanila", category_id: 9, isPopular: false, },
  ];

  const restaurantdishes = [
    {restaurant_id: 1, dish_id: 2, price: 900 },
    {restaurant_id: 1, dish_id: 3, price: 900 },
    {restaurant_id: 1, dish_id: 9, price: 1400 },
    {restaurant_id: 1, dish_id: 10, price: 1450 },
    {restaurant_id: 1, dish_id: 18, price: 1000 },
    {restaurant_id: 1, dish_id: 19, price: 1050 },
    {restaurant_id: 1, dish_id: 22, price: 950 },
    {restaurant_id: 1, dish_id: 23, price: 1000 },
    {restaurant_id: 1, dish_id: 24, price: 1200 },
    {restaurant_id: 1, dish_id: 25, price: 1300 },
    {restaurant_id: 1, dish_id: 26, price: 1150 },
    {restaurant_id: 1, dish_id: 27, price: 1300 },
    {restaurant_id: 1, dish_id: 30, price: 120 },
    {restaurant_id: 1, dish_id: 31, price: 200 },
    {restaurant_id: 1, dish_id: 32, price: 120 },
    {restaurant_id: 1, dish_id: 33, price: 200 },
    {restaurant_id: 1, dish_id: 34, price: 550 },
    {restaurant_id: 1, dish_id: 35, price: 700},
    {restaurant_id: 2, dish_id: 2, price: 980 },
    {restaurant_id: 2, dish_id: 5, price: 850 },
    {restaurant_id: 2, dish_id: 19, price: 1100 },
    {restaurant_id: 2, dish_id: 20, price: 1300 },
    {restaurant_id: 2, dish_id: 22, price: 1000 },
    {restaurant_id: 2, dish_id: 23, price: 1130},
    {restaurant_id: 2, dish_id: 26, price: 1180 },
    {restaurant_id: 2, dish_id: 27, price: 1340 },
    {restaurant_id: 2, dish_id: 28, price: 650 },
    {restaurant_id: 2, dish_id: 29, price: 500 },
    {restaurant_id: 2, dish_id: 30, price: 100 },
    {restaurant_id: 2, dish_id: 31, price: 180 },
    {restaurant_id: 2, dish_id: 32, price: 100 },
    {restaurant_id: 2, dish_id: 33, price: 180 },
    {restaurant_id: 3, dish_id: 4, price: 920 },
    {restaurant_id: 3, dish_id: 8, price: 1040 },
    {restaurant_id: 3, dish_id: 20, price: 1450 },
    {restaurant_id: 3, dish_id: 21, price: 1600 },
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
        <Route path="/search" element={<Search restaurants={restaurants} dishes={dishes}/>}></Route>
      </Routes>
    </Router>
  </div>;
    
}

export default App;
