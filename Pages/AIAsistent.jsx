import React, { useState } from "react";
import { BiHeart, BiStar } from "react-icons/bi";
import Container from "../src/Components/Container";
import axios from "axios";
import { Link } from "react-router-dom";

function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Step 1: Get AI specialist suggestion
      const res1 = await axios.post(
        "https://api.kasimovstudio.uz/api/v1/ai/descripbe_your_symptoms/",
        { text: input },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN":
              "059zpA0A28qsMjsurfDuEV8AFTm8SJy1wJteNLLYs3GK5cGQ7NAeOaV4QMWjRjLv",
          },
        }
      );

      const aiMessage = {
        role: "ai",
        text: res1.data.ai,
      };

      setMessages((prev) => [...prev, aiMessage]);

      const fullSpecialist = res1.data.specialist?.[0] || "";
      const specialist = fullSpecialist.split(/[ (]/)[0];
      console.log(specialist);

      // Step 2: Find doctors and clinics
      const res2 = await axios.post(
        "https://api.kasimovstudio.uz/api/v1/ai/find_doctors_and_clinics/",
        { text: specialist },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN":
              "059zpA0A28qsMjsurfDuEV8AFTm8SJy1wJteNLLYs3GK5cGQ7NAeOaV4QMWjRjLv",
          },
        }
      );

      setResult(res2.data); // Should contain doctors and clinics
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Sorry, something went wrong. Try again." },
      ]);
    }

    setInput(""); // Clear input
  };

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Describe Your Symptoms
        </h1>
        <div className="max-w-3xl flex flex-col justify-center items-center mx-auto">
          {/* Messenger-style box */}
          <div className="min-w-full rounded-lg border h-[300px] p-4 overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-3 w-full justify-between items-center mt-3">
            <input
              type="text"
              className="p-2 border rounded-lg w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your symptoms..."
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-full"
            >
              Send
            </button>
          </div>
        </div>

        {/* Doctors and Clinics */}
        {result && (
          <div className="mt-8 space-y-6">
            <h2 className="text-xl font-semibold">Search Results</h2>

            {result.doctors && result.doctors.length > 0 ? (
              <div>
                <h3 className="font-bold text-2xl">Doctors</h3>
                {result?.doctors?.map((data) => (
                  <div className="mt-5 bg-white border-[1px] border-blue-500 flex flex-row justify-start gap-10 mb-4 p-3 rounded-[10px]">
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
                          {data.last_name} {data.first_name} {data.middle_name}
                        </h1>
                      </Link>
                      <div className="flex gap-4 text-gray-500 text-[14px] mb-2">
                        <p>{data.specialties}</p>
                      </div>
                      <h1 className="text-[16px] mb-2">
                        Experience: {data.experience_year}
                      </h1>
                      <div className="font-semibold text-[14px]">
                        {data.initial_consultation_price === 0 ? (
                          <p>Initial consultation-------free</p>
                        ) : (
                          <p>
                            Initial consultation-------
                            {data.initial_consultation_price} so'm
                          </p>
                        )}
                        {data.follow_up_consultation_price === 0 ? (
                          <p>Follow-up consultation----free</p>
                        ) : (
                          <p>
                            Follow-up consultation----
                            {data.follow_up_consultation_price} so'm
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
                        <h1 className="text-gray-500 text-[16px] ">
                          {data.clinic.name}
                        </h1>
                      </div>
                      <div className="flex justify-start gap-2 items-center mb-2">
                        <img
                          src="/img/Departure.svg"
                          alt=""
                          className="h-8 w-8"
                        />
                        <h1 className="text-[14px]">{data.clinic.address}</h1>
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
                ))}
              </div>
            ) : (
              <p>No doctors found.</p>
            )}

            {/* {result.clinics && result.clinics.length > 0 && (
              <div>
                <h3 className="font-bold">Clinics</h3>
                {result.clinics.map((clinic, i) => (
                  <div key={i} className="p-4 border rounded-lg mb-2">
                    <p className="font-semibold">{clinic.name}</p>
                    <p>{clinic.specialties?.join(", ")}</p>
                    <p className="text-sm text-gray-500">{clinic.address}</p>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        )}
      </div>
    </Container>
  );
}

export default AIAssistant;
