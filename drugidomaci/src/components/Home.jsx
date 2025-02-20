import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import marko from "../photos/marko.jpg";
import ana from "../photos/ana.jpg";
import margherita from "../photos/dish4.jpg";
import cheeseburger from "../photos/dish24.jpg";
import cheesecake from "../photos/dish34.png";


const Home = () => {


  const navigate = useNavigate();

  const handleSearch = (mealName) => {
    navigate(`/search?query=${encodeURIComponent(mealName)}`);
  };


  return (
    <div className="home">
      <section className="hero">
        <h1>Brza dostava, ukusna hrana – sve na klik od tebe!</h1>
        <p>Izaberi iz širokog asortimana jela i uživaj u brzoj dostavi iz najboljih restorana.</p>
        <Link to="/categories">
        <button className="cta-button">Počni sada!</button>
        </Link>
      </section>

      
      <section className="featured">
        <h2>Preporučujemo danas</h2>
        <div className="featured-items">
          <div className="item">
            <img src={margherita} alt="Pizza" />
            <h3>Margherita Pizza</h3>
            <p>Samo 920 RSD</p>
            <button className="cta-button" onClick={() => handleSearch("Margherita")}>Poruči</button>
          </div>
          <div className="item">
            <img src={cheeseburger} alt="Burger" />
            <h3>Cheeseburger</h3>
            <p>Od 990 RSD</p>
            <button className="cta-button" onClick={() => handleSearch("Cheeseburger")}>Poruči</button>
          </div>
          <div className="item">
            <img src={cheesecake} alt="Cheesecake" />
            <h3>Cheesecake</h3>
            <p>Od 350 RSD</p>
            <button className="cta-button" onClick={() => handleSearch("Cheesecake")}>Poruči</button>
          </div>
        </div>
      </section>

     
      <section className="how-it-works">
        <h2>Kako funkcioniše?</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Pretraži restorane</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Dodaj jela u korpu</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Potvrdi narudžbinu</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Prati dostavu u realnom vremenu</p>
          </div>
        </div>
      </section>

      
      <section className="reviews">
  <h2>Šta kažu naši korisnici?</h2>
  <div className="review">
    <div className="review-image">
      <img src={marko} alt="Marko" />
    </div>
    <p>"Odlična hrana i usluga!"</p>
    <span>- Marko, Beograd</span>
  </div>
  <div className="review">
    <div className="review-image">
      <img src={ana} alt="Ana" />
    </div>
    <p>"Odličan izbor, sve preporuke!"</p>
    <span>- Ana, Novi Sad</span>
  </div>
</section>
    </div>
  );
};

export default Home;