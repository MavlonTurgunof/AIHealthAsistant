import React from "react";
import Container from "../src/Components/Container";

function AboutUs() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto py-10 px-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <p className="mb-4">
          Welcome to <strong>MedConnect</strong> — your trusted partner in
          finding the best medical specialists and clinics in Tashkent. Our
          mission is to make healthcare accessible, transparent, and easy to
          navigate for everyone.
        </p>

        <p className="mb-4">
          Whether you're searching for a skilled surgeon, a reliable
          pediatrician, or a nearby dental clinic, we’ve got you covered. Our
          platform brings together verified medical professionals and clinics
          with detailed information, ratings, working hours, and patient reviews
          — all in one place.
        </p>

        <p className="mb-4">
          We believe that finding quality healthcare should be simple and
          stress-free. That’s why we focus on creating an intuitive,
          user-friendly experience that helps you book appointments, compare
          services, and make informed decisions about your health.
        </p>

        <p className="mb-4">
          Our growing network of clinics and doctors is continuously updated to
          ensure you always have access to the most relevant and reliable
          medical options available in your area.
        </p>

        <p className="mb-4">
          Thank you for trusting MedConnect. Your health, your choice — made
          easier.
        </p>
      </div>
    </Container>
  );
}

export default AboutUs;
