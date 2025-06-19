import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import { ListClinics } from "../../../Data/Data";
import ClinicCard from "./ClinicCard";
import FilterBar from "../Doctors/FilterBar";
import { useParams, useLocation } from "react-router-dom";
import request from "../../Components/config/Indes";

function ListClinic() {
  const { id } = useParams();
  const [listData, setListData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  const getData = async () => {
    try {
      const res = await request.get(`/clinics/category/${id}/clinic/list/`);
      setListData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(listData);
  return (
    <Container>
      <div className="flex justify-between items-center ">
        <div className="mt-10">
          <h1 className="font-bold text-[28px]">{name}s</h1>
        </div>
      </div>
      {listData.map((clinic) => (
        <ClinicCard data={clinic} />
      ))}
    </Container>
  );
}

export default ListClinic;
