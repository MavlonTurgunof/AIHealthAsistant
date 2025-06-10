import React from "react";
import Container from "../../Components/Container";
import { ListClinics } from "../../../Data/Data";
import ClinicCard from "./ClinicCard";

function ListClinic() {
  return (
    <Container>
      {ListClinics.map((clinic) => (
        <ClinicCard data={clinic} />
      ))}
    </Container>
  );
}

export default ListClinic;
