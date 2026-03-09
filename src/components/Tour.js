import React, { useEffect, useState } from "react";

const Tour = ({
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
  groupSize,
  difficulty,
  highlights,
  description,
  setSelectedTour,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  return (
    <>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>

        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>

          <p className="tour-text">{info}</p>

          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map-marked-alt"></i>
              </span>
              {location}
            </p>
            <p>From ${cost}</p>
            <p>{duration} days</p>
          </div>

          <button
            type="button"
            className="btn tour-details-btn"
            onClick={() => setShowModal(true)}
          >
            View details
          </button>
        </div>
      </article>

      {showModal && (
        <div
          className="tour-modal-overlay"
          onClick={() => setShowModal(false)}
          role="presentation"
        >
          <div
            className="tour-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`tour-title-${title}`}
          >
            <button
              type="button"
              className="tour-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            <img src={image} alt={title} className="tour-modal-img" />

            <div className="tour-modal-content">
              <p className="tour-modal-tag">Featured Wildlife Experience</p>
              <h3 id={`tour-title-${title}`}>{title}</h3>
              <p className="tour-modal-subtitle">{description}</p>

              <div className="tour-modal-details-grid">
                <div className="tour-modal-detail-card">
                  <span className="tour-detail-label">Location</span>
                  <p>{location}</p>
                </div>

                <div className="tour-modal-detail-card">
                  <span className="tour-detail-label">Departure</span>
                  <p>{date}</p>
                </div>

                <div className="tour-modal-detail-card">
                  <span className="tour-detail-label">Duration</span>
                  <p>{duration} days</p>
                </div>

                <div className="tour-modal-detail-card">
                  <span className="tour-detail-label">Price</span>
                  <p>From ${cost}</p>
                </div>

                <div className="tour-modal-detail-card">
                  <span className="tour-detail-label">Group Size</span>
                  <p>{groupSize}</p>
                </div>

                <div className="tour-modal-detail-card">
                  <span className="tour-detail-label">Difficulty</span>
                  <p>{difficulty}</p>
                </div>
              </div>

              <div className="tour-modal-highlights">
                <h4>Tour Highlights</h4>
                <ul>
                  {highlights?.map((highlight, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tour-modal-actions">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setSelectedTour(title);
                    setShowModal(false);

                    setTimeout(() => {
                      const bookingSection = document.getElementById("booking");
                      if (bookingSection) {
                        bookingSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Book now
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tour;
