import React from "react";
import "./Services.css";

const servicesData = [
  {
    name: "Facial",
    price: "₹500",
    description: "Refreshing facial treatment for glowing skin."
  },
  {
    name: "Haircut & Styling",
    price: "₹300",
    description: "Trendy haircuts and professional styling."
  },
  {
    name: "Bridal Makeup",
    price: "₹2000",
    description: "Perfect bridal makeup for your special day."
  },
  {
    name: "Manicure & Pedicure",
    price: "₹400",
    description: "Pamper your hands and feet with expert care."
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
