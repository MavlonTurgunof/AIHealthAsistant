import React, { useState } from "react";
import doctors from "../Data/doctors.json";
import clinics from "../Data/clinics.json";
import { analyzeSymptoms } from "../src/Utils/analyzeSymptoms";
import { BiHeart, BiStar } from "react-icons/bi";
import Container from "../src/Components/Container";

function AIAssistant() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const specialty = analyzeSymptoms(input);
    const matchedDoctors = doctors.filter((doc) => doc.specialty === specialty);
    const matchedClinics = clinics.filter((clinic) =>
      clinic.specialties.includes(specialty)
    );

    setResult({ specialty, matchedDoctors, matchedClinics });
  };

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Describe Your Symptoms
        </h1>
        <div className="max-w-3xl flex flex-col justify-center items-center mx-auto">
          <textarea
            className="w-full p-4 border rounded-lg"
            rows="5"
            placeholder="e.g. I have chest pain and feel tired"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4"
          >
            Find Doctor
          </button>
        </div>

        {result && (
          <div className="mt-8 space-y-6">
            <h2 className="text-xl font-semibold">
              Recommended Specialty: {result.specialty}
            </h2>

            {result.matchedDoctors.length > 0 ? (
              <div>
                <h3 className="font-semibold">Doctors:</h3>
                <ul className="list-disc ml-5">
                  {result.matchedDoctors.map((data) => (
                    <div className="bg-white border-[1px] border-blue-500 flex flex-row justify-start gap-10 mb-4 p-3 rounded-[10px]">
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
                          {data?.specialty}
                        </div>
                        <h1 className="text-[16px] mb-2">
                          Experience: {data.experience}
                        </h1>
                        <div className="font-semibold text-[14px]">
                          <p>
                            Initial consultation-------
                            {data.initialConsultation}
                          </p>
                          <p>
                            Follow-up consultation----
                            {data.followUpConsultation}
                          </p>
                        </div>
                        <button className="bg-blue-400 py-1 px-2 rounded-full text-white mt-4">
                          Read more
                        </button>
                      </div>
                      <div className="w-1/3">
                        <div className="flex justify-start gap-2 items-center">
                          <img
                            src="./img/Clinic.svg"
                            alt=""
                            className="h-8 w-8"
                          />
                          <h1 className="text-gray-500 text-[16px] ">
                            {data.clinic}
                          </h1>
                        </div>
                        <div className="flex justify-start gap-2 items-center mb-2">
                          <img
                            src="./img/Departure.svg"
                            alt=""
                            className="h-8 w-8"
                          />
                          <h1 className="text-[14px]">{data.location}</h1>
                        </div>

                        <p className="text-[12px]">
                          Doctor's appointment time at the clinic
                        </p>
                        <div className="flex justify-start gap-2 items-center">
                          <img
                            src="./img/Calendar.svg"
                            alt=""
                            className="7-6 w-7"
                          />
                          <h1 className="text-[14px]">{data.workingHours}</h1>
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
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-600">
                No doctors found. Please consult a {result.specialty}.
              </p>
            )}

            {result.matchedClinics.length > 0 && (
              <div>
                <h3 className="font-semibold">Clinics:</h3>
                <ul className="list-disc ml-5">
                  {result.matchedClinics.map((data) => (
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
                          <img
                            src="./img/Departure.svg"
                            alt=""
                            className="h-8 w-8"
                          />
                          <h1 className="text-[14px]">{data.address}</h1>
                        </div>

                        <p className="text-[12px]">
                          Doctor's appointment time at the clinic
                        </p>
                        <div className="flex justify-start gap-2 items-center">
                          <img
                            src="./img/Calendar.svg"
                            alt=""
                            className="7-6 w-7"
                          />
                          <div className="text-sm text-gray-700">
                            {Object.entries(data.workingHours).map(
                              ([day, time]) => (
                                <div key={day}>
                                  <strong className="capitalize">
                                    {day.replace("-", " - ")}
                                  </strong>
                                  : {time}
                                </div>
                              )
                            )}
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
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

export default AIAssistant;
