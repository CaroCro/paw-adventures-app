import React, { useEffect, useState } from "react";
import Title from "./Title";
import { tours } from "../data";

const getSelectedTour = () => {
  return localStorage.getItem("selectedTour") || tours[0]?.title || "";
};

const Booking = ({ selectedTour }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tour: getSelectedTour(),
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (selectedTour) {
      setFormData((prevState) => ({
        ...prevState,
        tour: selectedTour,
      }));
    }
  }, [selectedTour]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.tour.trim()) {
      newErrors.tour = "Please select a tour.";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Please choose a preferred date.";
    } else if (formData.date < today) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please add a short message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setErrors({});
    localStorage.removeItem("selectedTour");

    setFormData({
      name: "",
      email: "",
      tour: tours[0]?.title || "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="section booking-section" id="booking">
      <Title title="book" subTitle=" a tour" />

      <div className="section-center booking-center">
        <div className="booking-info">
          <h3>Plan your next wildlife adventure</h3>
          <p>
            Complete the form below to request more information about one of our
            featured tours. This booking form demonstrates controlled inputs,
            validation, and interactive user flows in React.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <small className="form-error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <small className="form-error">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="tour">Select a tour</label>
            <select
              id="tour"
              name="tour"
              value={formData.tour}
              onChange={handleChange}
            >
              {tours.map((tour) => (
                <option key={tour.id} value={tour.title}>
                  {tour.title}
                </option>
              ))}
            </select>
            {errors.tour && <small className="form-error">{errors.tour}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
            />
            {errors.date && <small className="form-error">{errors.date}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your preferred travel plans..."
            ></textarea>
            {errors.message && (
              <small className="form-error">{errors.message}</small>
            )}
          </div>

          <button type="submit" className="btn booking-btn">
            Submit booking request
          </button>

          {isSubmitted && (
            <p className="form-success">
              Your booking request has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;
