import React, { useRef, useEffect, useState } from 'react';
import OneRestaurant from './OneRestaurant';
import MyMap from './MyMap';
import ReviewsInnerCarousel from './ReviewsInnerCarousel';
import axios from "axios";

const Restaurants = () => {
  const restaurantCarouselRef = useRef(null);
  const reviewsCarouselRef = useRef(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewsByRestaurant, setReviewsByRestaurant] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/restaurants")
      .then((res) => {
        const fetchedRestaurants = res.data;
        setRestaurants(fetchedRestaurants);
        setLoading(false);

        fetchedRestaurants.forEach((restaurant) => {
          axios
            .get(`http://localhost:8000/api/restaurants/${restaurant.id}/reviews`)
            .then((res) => {
              setReviewsByRestaurant(prev => ({
                ...prev,
                [restaurant.id]: res.data,
              }));
            })
            .catch(err => {
              console.error(`Greška pri dohvatanju recenzija za restoran ${restaurant.id}:`, err);
            });
        });
      })
      .catch((err) => {
        console.error("Greška pri dohvaćanju restorana:", err);
        setLoading(false);
      });
  }, []);

  const scrollRestaurantsLeft = () => {
    if (restaurantCarouselRef.current) {
      restaurantCarouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRestaurantsRight = () => {
    if (restaurantCarouselRef.current) {
      restaurantCarouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const scrollReviewsLeft = () => {
    if (reviewsCarouselRef.current) {
      reviewsCarouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollReviewsRight = () => {
    if (reviewsCarouselRef.current) {
      reviewsCarouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const calculateAverage = (reviews, type) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + (type === 'food' ? r.food_rating : r.delivery_rating), 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <div className="restaurants-page">
      <h1 className="restaurants-title">Restorani</h1>
      <p className="restaurants-subtitle">
        Pregledaj našu raznoliku ponudu restorana i pronađi baš ono što želiš!
      </p>

      {loading ? (
        <p className="restaurants-loading">Učitavanje restorana...</p>
      ) : (
        <div className="restaurants-carousel-container">
          <button className="carousel-arrow left" onClick={scrollRestaurantsLeft}>
            &#10094;
          </button>
          <div className="restaurants-carousel" ref={restaurantCarouselRef}>
            {restaurants.map((restaurant) => (
              <OneRestaurant key={restaurant.id} restaurant={restaurant} cat={0} />
            ))}
          </div>
          <button className="carousel-arrow right" onClick={scrollRestaurantsRight}>
            &#10095;
          </button>
        </div>
      )}

      <div className="restaurants-reviews-section">
        <h2 className="restaurants-reviews-title">Utisci korisnika</h2>

        <div className="reviews-carousel-container">
          <button className="reviews-carousel-arrow left" onClick={scrollReviewsLeft}>
            &#10094;
          </button>
          <div className="reviews-carousel" ref={reviewsCarouselRef}>
            {restaurants.map((restaurant) => {
              const reviews = reviewsByRestaurant[restaurant.id] || [];
              const avgFood = calculateAverage(reviews, 'food');
              const avgDelivery = calculateAverage(reviews, 'delivery');

              return (
                <div key={restaurant.id} className="restaurant-review-card">
                  <h3 className="restaurant-name">{restaurant.name}</h3>

                  {reviews.length > 0 ? (
                    <>
                      <div className="restaurant-averages">
                        <span>🍽 Hrana: <strong>{avgFood}★</strong></span>
                        <span>🚚 Dostava: <strong>{avgDelivery}★</strong></span>
                      </div>

                      <ReviewsInnerCarousel reviews={reviews} />
                    </>
                  ) : (
                    <p className="no-reviews-text">Nema recenzija još uvek.</p>
                  )}
                </div>
              );
            })}
          </div>
          <button className="reviews-carousel-arrow right" onClick={scrollReviewsRight}>
            &#10095;
          </button>
        </div>
      </div>

      <MyMap />
    </div>
  );
};

export default Restaurants;
