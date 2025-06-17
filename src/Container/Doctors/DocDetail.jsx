import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import { BsPhone, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { PiPlus } from "react-icons/pi";
import { BiMinus, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import request from "../../Components/config/Indes";

const data = {
  id: 1,
  name: "Ernazarov Sirojjiddin Zievuddinovich",
  specialties: "Abdominal surgeon",
  experience: "10 years",
  category: "Doctor of the highest category",
  clinic: "Expert Medical Clinic - Pro Surgery",
  location: "Yunusabad district, Tashkent, Small ring road, 112A",
  landmark: "EVOS Sofia",
  workingHours: "Mon - Sat 10:00-17:00",
  initialConsultation: "120,000 UZS",
  followUpConsultation: "100,000 UZS",
  phone: "+998901234567",
  Email: "doctorx@gmail.com",
  image: "./img/Doctor.jpeg",
  rating: 4.5,
  profile: {
    title: "About the Doctor",
    degree: "Doctor of Medicine (MD)",
    position: "Surgeon of the highest category",
    memberships: [
      "Independent expert on surgery of the Republic of Kazakhstan",
      "Member of the Society of Bariatric and Metabolic Surgeons of Kazakhstan",
      "Member of the International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO)",
    ],
    education: [
      "2000–2006: Higher School of Public Health, Master's degree in Public Health Management, Kazakh-Russian Medical University",
    ],
    workActivities: [
      "2010–2014: General practice, City Clinical Hospital No. 7, Surgeon",
      "2012–2017: Tau Sunkar Clinic, Head of the Department of Multidisciplinary Surgery",
      "2017: Medical Center 'RADA', Deputy Chief Physician for Surgery",
      "2018–2019: Hospital of the Ministry of Internal Affairs of the Republic of Kazakhstan, Surgeon",
      "2018–Present: Chief Physician, Multidisciplinary Medical Center 'Keruen-Medicus'",
    ],
    refresherCourses: [
      "2007: Obstetrics and Gynecology. Antibiotic therapy in obstetric practice, Higher School of Public Health",
      "2007: Endoscopic surgery, KRMU",
      "2010: Modern approaches in proctology, St. Petersburg",
      "2010: Inflammatory diseases of the rectum, AGIUV",
      "2011: Primary specialization in general surgery, AGIUM",
      "2011: Improving therapy for microvascular complications of diabetes mellitus",
      "2012: Instrumental and innovative principles in surgery, KNMU (Asfendiyarov)",
      "2013: Surgical tactics for mechanical jaundice, Syzganov National Center of Surgery",
      "2014: Portal hypertension issues, KNMU (Asfendiyarov)",
      "2014: Operative mammology and urgent surgery in abdominal oncology, KAZNIIOiR, Almaty",
      "2016: Emergency conditions in surgery, RIPOV Almaty",
      "2016: Chronic venous insufficiency treatment principles, AGIUV",
      "2016: Primary specialization in Oncology (chemotherapy, adult mammology), MINOC",
      "2017: Primary specialization in angiosurgery, Ministry of Emergency Surgery",
      "2017: Procedural issues, MINOC",
      "2019: Pediatric gynecology and endoscopy, Higher School of Public Health",
      "2020: Innovative technologies in angiosurgery, VSHOZ",
      "2020: Oncology and oncological surgery, VSHOZ",
      "2021: Organization of healthcare expert activities (independent expertise), VSHOZ",
    ],
    certificates: [
      "2015: Diagnostics and treatment of chronic venous diseases, KAZMNO Almaty",
      "2016: Hernioplasty anatomy, City Clinical Hospital No. 1 named after Pirogov, Moscow",
      "2016: Minimally invasive treatment methods, State Scientific Center of Proctology, Moscow",
      "2018: Phlebology, First Kazakhstan Venous Forum",
    ],
  },
};

function DocDetail() {
  const [openMenu, setOpenMenu] = useState(false);
  const { id } = useParams();
  const handleMenu = () => {
    return setOpenMenu((prev) => !prev);
  };

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await request.get(`/doctors/doctor/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <Container>
      <div className="my-10">
        <div className="flex gap-4 ">
          <div className="max-w-[270px]">
            <div>
              <img
                src={`https://api.kasimovstudio.uz${data.photo}`}
                alt=""
                className="w-[270px] h-[350px] object-cover rounded-[20px] border-[10px] border-blue-300 shadow-md shadow-blue-400"
              />
            </div>
            <div className="w-full rounded-[20px] shadow-md shadow-blue-400 p-4 mt-4 border-1 border-blue-300 ">
              <h1 className="mb-2">Contact info:</h1>
              <div className="flex gap-2 mb-3">
                <img src="/img/Clinic.svg" alt="" className="h-8 w-8" />
                <h1 className="text-[14px] font-bold">{data?.clinic?.name}</h1>
              </div>
              <div className="flex gap-2 mb-3">
                <img src="/img/Departure.svg" alt="" className="h-8 w-8" />
                <h1 className="text-[12px] text-gray-600">
                  {data?.clinic?.address}
                </h1>
              </div>
              <div className="flex gap-3 items-center mb-3">
                <BsPhone className="w-6 h-6" color="rgb(249,192,192)" />
                <p className="text-[16px] text-gray-600">{data.phone_number}</p>
              </div>
              <div className="flex gap-3 items-center">
                <BsTelegram className="w-6 h-6" color="rgb(249,192,192)" />
                <p className="text-[16px] text-gray-600">{data.telegram_url}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="rounded-[20px] w-full p-5 border-1 border-blue-400 shadow-md shadow-blue-400">
              <h1 className="text-[23px] font-extrabold border-l-6 border-blue-500 pl-4">
                {data.last_name}
                {data.first_name}
                {data.middle_name}
              </h1>
              <div className="ml-6 grid grid-cols-2 my-10 gap-5">
                <div className="">
                  <div className="flex gap-2 items-center mb-2">
                    <img
                      src="/img/svg/IdCard.svg"
                      alt=""
                      className="w-10 h-10"
                    />
                    <h1 className=" font-semibold text-[18px] text-gray-600">
                      Speciality:
                    </h1>
                  </div>
                  <p className="text-[16px] font-bold">-{data?.specialties}</p>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center mb-2">
                    <img
                      src="/img/svg/Calendar.svg"
                      alt=""
                      className="w-8 h-8 "
                    />
                    <h1 className=" font-semibold text-[18px] text-gray-600">
                      Experience:
                    </h1>
                  </div>
                  <p className="text-[16px] font-bold">
                    {data.experience_years} years
                  </p>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center mb-2">
                    <img src="/img/money.svg" alt="" className="w-8 h-8 " />
                    <h1 className="font-semibold text-[18px] text-gray-600">
                      Initial consultation
                    </h1>
                  </div>
                  <p className="text-[16px] font-bold">
                    {data.initial_consultation_price === 0 ? (
                      <p>-free</p>
                    ) : (
                      <p>{data.initial_consultation_price} so'm</p>
                    )}
                  </p>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center mb-2">
                    <img src="/img/money.svg" alt="" className="w-8 h-8 " />
                    <h1 className="mb-1 font-semibold text-[18px] text-gray-600">
                      Follow-up consultation
                    </h1>
                  </div>
                  <p className="text-[16px] font-bold">
                    {data.follow_up_consultation_price === 0 ? (
                      <p>-free</p>
                    ) : (
                      <p>{data.follow_up_consultation_price} so'm</p>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] w-full p-5 border-1 border-blue-400 shadow-md shadow-blue-400 mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold mb-2">
                  About the Doctor
                </h2>
                <button onClick={() => handleMenu()}>
                  {openMenu === false ? (
                    <BiPlusCircle className="w-10 h-10" />
                  ) : (
                    <BiMinusCircle className="w-10 h-10" />
                  )}
                </button>
              </div>
              <div className={`${openMenu === true ? "mt-4" : "hidden"}`}>
                <Section title="WORK ACTIVITIES" items={data.description} />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  );
}

export default DocDetail;

const Section = ({ title, items }) => (
  <div className="mt-6">
    <h3 className="text-md font-semibold uppercase tracking-wide text-blue-800 mb-2">
      {title}:
    </h3>
    <div className="list-disc pl-6 space-y-1 text-gray-700">
      <p>{items}</p>
    </div>
  </div>
);
