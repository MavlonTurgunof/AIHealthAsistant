import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import request from "../../Components/config/Indes";

function Speciality() {
  const [docSpeciality, setDocSpeciality] = useState([]);

  const getSpecialities = async () => {
    try {
      let res = await request.get("/doctors/category/list/");
      setDocSpeciality(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecialities();
  }, []);

  console.log(docSpeciality);

  return (
    <Container>
      <div>
        <div className="flex justify-between items-center mt-10">
          <h1 className="font-bold text-[28px]">Doctors by specialty</h1>
        </div>

        {docSpeciality?.length === 0 ? (
          <p className="text-center mt-10 text-gray-500">
            No specialties found.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-4 my-20">
            {docSpeciality?.map(([letter, specialties]) => (
              <div key={letter}>
                <div className="bg-blue-400 inline-block px-4 py-2 text-white rounded-[10px] mb-4">
                  <h3 className="font-bold">{letter}</h3>
                </div>
                <ul className="text-gray-600">
                  {specialties?.map((spec) => (
                    <Link
                      to={`/listDoc/${spec.id}?name=${encodeURIComponent(
                        spec.name
                      )}`}
                      key={spec.id}
                    >
                      <li className="cursor-pointer hover:text-black">
                        {spec?.name}
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
