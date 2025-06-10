import React from "react";
import Container from "../../Components/Container";

function Services() {
  return (
    <Container>
      <h1 className="font-bold text-[35px] mb-[20px] border-b-2 border-blue-300 p-2 w-fit">
        Services
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#EDF3F7] rounded-[20px] p-[20px] w-full">
          <h1 className="font-semibold text-[25px] mb-[20px]">Tests</h1>
          <p className="font-medium text-gray-500 text-[15px] mb-[20px]">
            All types of analysis, 200+ laboratories
          </p>
          <img src="./img/Tests.svg" alt="Tests" className="h-50 w-full" />
          <button className="text-white rounded-full py-2 px-4 bg-blue-300 shadow-md shadow-blue-300">
            More
          </button>
        </div>
        <div className="bg-[#EBE3F5] rounded-[20px] p-[20px] w-full">
          <h1 className="font-semibold text-[25px] mb-[20px]">Diagnostics</h1>
          <p className="font-medium text-gray-500 text-[15px] mb-[20px]">
            MRI, CT, ultrasound, X-ray, ECG
          </p>
          <img src="./img/microscope.svg" alt="Tests" className="h-50 w-full" />
          <button className="text-white rounded-full py-2 px-4 bg-blue-300 shadow-md shadow-blue-300">
            More
          </button>
        </div>
        <div className="bg-[#DFF2E1] rounded-[20px] p-[20px] w-full">
          <h1 className="font-semibold text-[25px] mb-[20px]">
            Medical services
          </h1>
          <p className="font-medium text-gray-500 text-[15px] mb-[20px]">
            Order medical services with departure
          </p>
          <img src="./img/Departure.svg" alt="Tests" className="h-50 w-full" />
          <button className="text-white rounded-full py-2 px-4 bg-blue-300 shadow-md shadow-blue-300">
            More
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Services;
