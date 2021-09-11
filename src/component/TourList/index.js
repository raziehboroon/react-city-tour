import React, { useState, useEffect } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

function TourList() {
  const [tours, setTours] = useState([]);
  const [showTour, setShowTour] = useState(true);
  useEffect(() => {
    setTours(tourData);
  }, []);

  const removeTour = (id) => {
    const sortedtours = tours.filter((tour) => tour.id !== id);
    setTours(sortedtours);
  };
  return (
    <section className="tourList">
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default TourList;
