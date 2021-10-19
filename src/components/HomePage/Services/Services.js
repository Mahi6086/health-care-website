import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./Services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container-md mt-5">
      <div>
        <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
          What we do
        </h4>
        <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
          Our Lifesaver Services
        </h1>
        <p className="text-black-50 text-center mb-5">
          We give services to patients Cadiology, Gastroenteriogy, Neurology,
          Dental, Pulmonology, <br /> Medicine, Arthopedics & ensure to give top
          class qualitiful doctors.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
