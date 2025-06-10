import React, { useState } from "react";
import { SpecClinic } from "../../../Data/Data";
import { Link } from "react-router-dom";

function SpecClinics() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the specialties based on the search query
  const filteredSpecClinic = SpecClinic.filter((spec) =>
    spec.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="my-10 font-bold text-[28px]">
          Clinics and medical centers in Tashkent
        </h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-1 px-10 py-2 rounded-full mr-2 border-blue-600"
          placeholder="Search specialty..."
        />
      </div>

      <div className="grid grid-cols-3 gap-2 ">
        {filteredSpecClinic.length > 0 ? (
          filteredSpecClinic.map((spec) => (
            <div key={spec.name} className="flex gap-2 items-center">
              <h1 className="bg-blue-400 p-2 text-white rounded-[10px] w-10 text-center">
                {spec.count}
              </h1>
              <Link to={"/listClinic"}>
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
