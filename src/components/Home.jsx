import React from "react";
import HomeHeroSection from "./HomeHero";
import ProductServicesPage from "./ProductServicesPage";
import ServicesCarousel from "./ServicesCarousel";
import GoogleMap from "./GoogleMap";

const HomePage = () => {
  return (
    <div className="relative">
      <h1 className="sr-only">Best Digital Marketing Agency in Jaipur</h1>
      <HomeHeroSection />
      <ProductServicesPage />
      <ServicesCarousel />
      <GoogleMap />
    </div>
  );
};

export default HomePage;
