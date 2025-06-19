import React from "react";
import { BiHeart, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

function DocCard({ data }) {
  return (
    <div className="bg-white border-[1px] border-blue-500 flex flex-row justify-start gap-10 mb-4 p-3 rounded-[10px]">
      <div className="w-fit relative">
        <div className="absolute  border-1 border-blue-500 bg-white p-2 rounded-full top-[-10px] right-[-10px]">
          <BiHeart color="red" className="h-6 w-6" />
        </div>
        <img
          src={`https://api.kasimovstudio.uz${data.photo}`}
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
        <Link to={`/doctor/${data.id}`}>
          <h1 className="font-bold text-[18px]">
            {data.last_name}
            {data.first_name}
            {data.middle_name}
          </h1>
        </Link>
        <div className="flex gap-4 text-gray-500 text-[14px] mb-2">
          <p>{data.specialties}</p>
        </div>
        <h1 className="text-[16px] mb-2">Experience: {data.experience_year}</h1>
        <div className="font-semibold text-[14px]">
          {data.initial_consultation_price === 0 ? (
            <p>Initial consultation-------free</p>
          ) : (
            <p>
              Initial consultation-------{data.initial_consultation_price} so'm
            </p>
          )}
          {data.follow_up_consultation_price === 0 ? (
            <p>Follow-up consultation----free</p>
          ) : (
            <p>
              Follow-up consultation----{data.follow_up_consultation_price} so'm
            </p>
          )}
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex justify-start gap-2 items-center">
          <img
            src={`https://api.kasimovstudio.uz${data.clinic.image}`}
            alt=""
            className="h-8 w-8"
          />
          <h1 className="text-gray-500 text-[16px] ">{data.clinic.name}</h1>
        </div>
        <div className="flex justify-start gap-2 items-center mb-2">
          <img src="/img/Departure.svg" alt="" className="h-8 w-8" />
          <h1 className="text-[14px]">{data.clinic.address}</h1>
        </div>

        <p className="text-[12px]">Doctor's appointment time at the clinic</p>
        <div className="flex justify-start gap-2 items-center">
          <img src="/img/Calendar.svg" alt="" className="7-6 w-7" />
          <h1 className="text-[14px]">
            {data.clinic.working_days},{data.clinic.working_hours}
          </h1>
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

export default DocCard;
