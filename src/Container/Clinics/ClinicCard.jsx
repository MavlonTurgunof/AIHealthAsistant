import React from "react";
import { BiHeart, BiStar } from "react-icons/bi";

function ClinicCard({ data }) {
  return (
    <div className="bg-white border-[1px] border-blue-500 flex flex-row justify-start gap-10 mb-4 p-3 rounded-[10px] my-10">
      <div className="w-fit relative">
        <div className="absolute  border-1 border-blue-500 bg-white p-2 rounded-full top-[-10px] right-[-10px]">
          <BiHeart color="red" className="h-6 w-6" />
        </div>
        <img
          src={`${data.image}`}
          alt="doctor"
          className="h-30 w-25 border-[1px] border-blue-500 object-cover"
        />
        <div className="flex gap-2 items-center mt-4">
          <h1 className=" font-semibold text-[14px] text-green-500">
            Rating: {data.rating}
          </h1>
          <BiStar color="red" className="h-5 w-5" />
        </div>
      </div>
      <div className="w-1/3  ">
        <h1 className="font-bold text-[18px]">{data.name}</h1>
        <div className="flex gap-4 text-gray-500 text-[14px] mb-2">
          <h1>{data.description}</h1>
        </div>
        <button className="bg-blue-400 py-1 px-2 rounded-full text-white mt-4">
          Read more
        </button>
      </div>
      <div className="w-1/3">
        <div className="flex justify-start gap-2 items-center mb-2">
          <img src="./img/Departure.svg" alt="" className="h-8 w-8" />
          <h1 className="text-[14px]">{data.address}</h1>
        </div>

        <p className="text-[12px]">Doctor's appointment time at the clinic</p>
        <div className="flex justify-start gap-2 items-center">
          <img src="./img/Calendar.svg" alt="" className="7-6 w-7" />
          <div className="text-sm text-gray-700">
            {Object.entries(data.workingHours).map(([day, time]) => (
              <div key={day}>
                <strong className="capitalize">
                  {day.replace("-", " - ")}
                </strong>
                : {time}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-10 mt-2">
          <button className="bg-blue-500 text-white py-2 px-3 rounded-full ">
            Call +998...
          </button>
          <button className="border-[2px] border-blue-500 py-2 px-3 rounded-full">
            Message{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
