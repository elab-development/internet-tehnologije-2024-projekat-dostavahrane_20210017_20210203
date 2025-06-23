import React, { useState } from 'react';

const ReviewsInnerCarousel = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  if (reviews.length === 0) {
    return <p className="no-reviews-text">Nema recenzija još uvek.</p>;
  }

  const prev = () => {
    setIndex(i => (i === 0 ? reviews.length - 1 : i - 1));
  };

  const next = () => {
    setIndex(i => (i === reviews.length - 1 ? 0 : i + 1));
  };

  const currentReview = reviews[index];

  return (
    <div className="reviews-inner-carousel-container">
      <div className="restaurant-review-item">
        <div className="stars-line">
          <span>Hrana: <span className="star">{'★'.repeat(currentReview.food_rating)}</span></span>
          <span>Dostava: <span className="star">{'★'.repeat(currentReview.delivery_rating)}</span></span>
        </div>
        {currentReview.note && <p className="review-note">"{currentReview.note}"</p>}
      </div>

      {reviews.length > 1 && (
        <div className="reviews-inner-carousel-arrows">
          <button
            className="inner-carousel-arrow left"
            onClick={prev}
            aria-label="Prethodna recenzija"
          >
            &lt;
          </button>
          <button
            className="inner-carousel-arrow right"
            onClick={next}
            aria-label="Sledeća recenzija"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsInnerCarousel;
