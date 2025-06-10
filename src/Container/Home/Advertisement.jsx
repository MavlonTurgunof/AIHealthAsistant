import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";

const images = ["./img/Advertisment1.jpg", "./img/Advertisment2.jpg"];

function Advertisement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="w-full h-[400px] my-10  overflow-hidden rounded-xl shadow-md">
        <div
          className="w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        ></div>
      </div>
    </Container>
  );
}

export default Advertisement;
