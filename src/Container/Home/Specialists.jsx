import React, { useRef } from "react";
import Container from "../../Components/Container";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const specialists = [
  { name: "Cardiologist", image: "./img/heart.png" },
  { name: "Traumatologist", image: "./img/plaster.png" },
  { name: "Pulmonologist", image: "./img/lungs.png" },
  { name: "Dentist", image: "./img/tooth.png" },
];

const length = specialists.length;

function SpecialistsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <div className="my-20">
        <h1 className="font-bold text-[35px] mb-[20px] border-b-2 border-blue-300 p-2 w-fit">
          Services
        </h1>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 ${
              length < 5 ? "hidden" : ""
            }`}
          >
            <BsArrowLeft className="w-5 h-5" />
          </button>

          {/* Scrollable list */}
          <div
            ref={scrollRef}
            className={`  ${
              length < 5
                ? "grid grid-cols-4 gap-4"
                : "flex gap-4 p-10 overflow-x-auto no-scrollbar scroll-smooth"
            }`}
          >
            {specialists.map((item, idx) => (
              <div
                key={idx}
                className={`${
                  length < 5 ? "w-full" : "min-w-[250px] w-[250px]"
                }  bg-gray-50 rounded-2xl shadow p-4 flex flex-col items-center justify-center shrink-0`}
              >
                <h3 className="font-semibold mb-2 text-center">{item.name}</h3>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-30 w-30 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 ${
              length < 5 ? "hidden" : ""
            }`}
          >
            <BsArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default SpecialistsCarousel;
