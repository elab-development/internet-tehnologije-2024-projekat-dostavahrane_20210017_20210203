import React, { useState } from "react";
import axios from "axios";

function ReviewForm({ orderId, onSuccess, onSkip }) {
  const [foodRating, setFoodRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foodRating || !deliveryRating) {
      alert("Molimo ocenite i hranu i dostavu.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/api/reviews", {
        order_id: orderId,
        food_rating: foodRating,
        delivery_rating: deliveryRating,
        note: comment,
      });

      setLoading(false);
      alert("Recenzija uspešno poslata!");
      if (onSuccess) onSuccess(response.data);
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Došlo je do greške prilikom slanja recenzije."
      );
    }
  };

  return (
    <div className="review-form-container">
      <button
        onClick={() => {
          if (onSkip) onSkip();
        }}
        className="review-form-skip-button"
        aria-label="Preskoči ostavljanje recenzije"
      >
        ×
      </button>

      <h3 className="review-form-title">Ocenite isporuku i hranu</h3>

      <div className="review-form-rating-group">
        <label className="review-form-label">Ocena hrane:</label>
        <StarRating rating={foodRating} setRating={setFoodRating} />
      </div>

      <div className="review-form-rating-group">
        <label className="review-form-label">Ocena dostave:</label>
        <StarRating rating={deliveryRating} setRating={setDeliveryRating} />
      </div>

      <div className="review-form-comment-group">
        <label className="review-form-label">Komentar:</label>
        <textarea
          className="review-form-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Napišite komentar..."
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="review-form-submit-button"
      >
        {loading ? "Šaljem..." : "Pošalji recenziju"}
      </button>

      {error && <p className="review-form-error-message">{error}</p>}
    </div>
  );
}

function StarRating({ rating, setRating }) {
  return (
    <div className="review-form-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`review-form-star ${star <= rating ? "review-form-star-filled" : ""}`}
          onClick={() => setRating(star)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setRating(star);
          }}
          aria-label={`Ocena ${star} zvezdica`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default ReviewForm;
