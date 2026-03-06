import React from "react";
import "./Home.css"; // We'll style it separately

const Home = () => {
  return (
    <div className="home">
      {/* Festival Offer Banner */}
      <section className="banner">
        <h1>🎉 Festival Special Offers! 🎉</h1>
        <p>Get 20% off on all services this season!</p>
        <button>Book Now</button>
      </section>

      {/* Introduction / Welcome */}
      <section className="welcome">
        <h2>Welcome to Diva Beauty Care</h2>
        <p>
          Experience the best beauty treatments in town! Our expert staff will
          pamper you with premium services at affordable prices.
        </p>
      </section>
    </div>
  );
};

export default Home;
