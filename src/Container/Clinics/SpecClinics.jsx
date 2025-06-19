import React, { useState } from "react";
import { SpecClinic } from "../../../Data/Data";
import { Link } from "react-router-dom";
import request from "../../Components/config/Indes";
import { useEffect } from "react";

function SpecClinics() {
  const [data, setData] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // // Filter the specialties based on the search query
  // const filteredSpecClinic = SpecClinic.filter((spec) =>
  //   spec.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const getData = async () => {
    try {
      const res = await request.get("/clinics/category/list/");
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="my-10 font-bold text-[28px]">
          Clinics and medical centers in Tashkent
        </h1>
        <input
          type="text"
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="border-1 px-10 py-2 rounded-full mr-2 border-blue-600"
          placeholder="Search specialty..."
        />
      </div>

      <div className="grid grid-cols-3 gap-2 ">
        {data.length > 0 ? (
          data.map((spec) => (
            <div key={spec.id} className="flex gap-2 items-center">
              <h1 className="bg-blue-400 p-2 text-white rounded-[10px] w-10 text-center">
                {spec.count}
              </h1>
              <Link
                to={`/clinics/${spec.id}?name=${encodeURIComponent(spec.name)}`}
              >
                <h1>{spec.name}</h1>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No results found
          </p>
        )}
      </div>
    </div>
  );
}

export default SpecClinics;
