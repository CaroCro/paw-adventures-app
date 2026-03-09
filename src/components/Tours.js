import React, { useMemo, useState } from "react";
import Title from "./Title";
import Tour from "./Tour";
import { tours } from "../data";

const Tours = ({ setSelectedTour }) => {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = useMemo(() => {
    return ["All", ...new Set(tours.map((tour) => tour.location))];
  }, []);

  const filteredTours =
    selectedLocation === "All"
      ? tours
      : tours.filter((tour) => tour.location === selectedLocation);

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle=" Animal tours" />

      <div className="tour-filters">
        {locations.map((location) => (
          <button
            key={location}
            type="button"
            className={`filter-btn ${
              selectedLocation === location ? "active-filter" : ""
            }`}
            onClick={() => setSelectedLocation(location)}
          >
            {location}
          </button>
        ))}
      </div>

      <div
        className={`section-center featured-center ${
          filteredTours.length === 1 ? "single-tour" : ""
        }`}
      >
        {filteredTours.map((tour) => (
          <Tour key={tour.id} {...tour} setSelectedTour={setSelectedTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
