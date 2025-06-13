import React, { useState } from "react";
import { Specialty } from "../../../Data/Data";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";

function Speciality() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredSpecialties = Specialty.map((group) => {
    const filtered = group.specialties.filter((spec) =>
      spec.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      specialties: filtered,
    };
  }).filter((group) => group.specialties.length > 0);

  return (
    <Container>
      <div>
        <div className="flex justify-between items-center mt-10">
          <h1 className=" font-bold text-[28px]">Doctors by specialty</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-1 px-10 py-2 rounded-full mr-2 border-gray-300"
            placeholder="Search specialty..."
          />
        </div>

        {filteredSpecialties.length === 0 ? (
          <p className="text-center mt-10 text-gray-500">
            No specialties found.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-4 my-20">
            {filteredSpecialties.map((group) => (
              <div key={group.letter}>
                <div className="bg-blue-400 inline-block px-4 py-2 text-white rounded-[10px] mb-4">
                  <h3 className="font-bold">{group.letter}</h3>
                </div>
                <ul className="text-gray-600">
                  {group.specialties.map((spec, idx) => (
                    <Link to={"/listDoc"}>
                      <li className="cursor-pointer hover:text-black" key={idx}>
                        {spec}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Speciality;
