import React from "react";
import Container from "../../Components/Container";
import { ListClinics } from "../../../Data/Data";
import ClinicCard from "./ClinicCard";
import FilterBar from "../Doctors/FilterBar";

function ListClinic() {
  return (
    <Container>
      <div className="flex justify-between items-center ">
        <div className="flex gap-4">
          <FilterBar />
        </div>
      </div>
      {ListClinics.map((clinic) => (
        <ClinicCard data={clinic} />
      ))}
    </Container>
  );
}

export default ListClinic;
