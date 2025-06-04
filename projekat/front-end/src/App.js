//import logo from './logo.svg';
import { useState, useEffect } from "react"
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Restaurants from './components/Restaurants';
import Categories from './components/Categories';
import Home from './components/Home';
import Search from './components/Search';
import RestaurantMenu from './components/RestaurantMenu';
import UserProfile from './components/UserProfile';
import Cart from './components/Cart';
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  let [cartNum, setCartNum] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    }
  }, []);
  
  const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem("cartItems");
  return saved ? JSON.parse(saved) : [];
  });
  
  const handleLogin = (backendResponse) => {
  if (backendResponse.access_token) {
    const userData = {
      token: backendResponse.access_token,
      token_type: backendResponse.token_type,
      username: backendResponse.username, 
    };

    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("auth_token", backendResponse.access_token);
  } else {
    alert("Nevalidan odgovor sa servera.");
  }
};

  
  const handleLogout = () => {
  setUser(null);
  setIsLoggedIn(false);
  setCartItems([]);
  setCartNum(0); 
  localStorage.removeItem("user");
  window.sessionStorage.removeItem("auth_token");
};

  const handlePlaceOrder = () => {
    if (user) {
      const updatedUser = { ...user, orders: (user.orders || 0) + 1 };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
    setCartItems([]);
  };
  

  const addDish = (name, keyd, keyr) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.dish_id === keyd && item.restaurant_id === keyr);
  
      if (existingItem) {
        return prevItems.map(item => 
          item.dish_id === keyd && item.restaurant_id === keyr ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { name, quantity: 1, dish_id: keyd, restaurant_id: keyr }];
      }
    });
  
   /* restaurantdishes.forEach((rdish) => {
      if (rdish.dish_id === keyd && rdish.restaurant_id === keyr) {
        rdish.amount++;
      }
    });*/
  };
  
  const removeDish = (name, keyd, keyr) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.dish_id === keyd && item.restaurant_id === keyr);
  
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item => 
          item.dish_id === keyd && item.restaurant_id === keyr ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else if (existingItem && existingItem.quantity === 1) {
        return prevItems.filter(item => item.dish_id !== keyd || item.restaurant_id !== keyr);
      }
      return prevItems;
    });
   /* restaurantdishes.forEach((rdish) => {
      if (rdish.dish_id === keyd && rdish.restaurant_id === keyr && rdish.amount > 0) {
        rdish.amount--;
      }
    });*/
  };

 
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartNum(totalItems);
  }, [cartItems]);

  return (<div className="App">
    <Router>
      <NavBar user ={ user } cartNum={cartNum} ></NavBar>
      <Breadcrumbs /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={isLoggedIn ? <UserProfile userData={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}/>
        <Route path="/restaurants" element={<Restaurants />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/restaurants/:id" element={<RestaurantMenu user={user} onAdd={addDish} onMin={removeDish}/>} />
        <Route path="/cart" element={isLoggedIn ? <Cart items={cartItems} onAdd={addDish} onMin={removeDish} onPlaceOrder={handlePlaceOrder} />: <Login onLogin={handleLogin} />}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;

