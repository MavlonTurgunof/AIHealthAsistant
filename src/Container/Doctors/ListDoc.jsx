import React from "react";
import Container from "../../Components/Container";
import { Doctors } from "../../../Data/Data";
import DocCard from "./DocCard";
import FilterBar from "./FilterBar";

function ListDoc() {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <FilterBar />
        </div>
        {/* <input
          type="text"
          className="border-1 px-10 py-2 rounded-full mr-2 border-gray-300 ring-1 ring-blue-500"
          placeholder="Search specialty..."
        /> */}
      </div>
      <div className="my-10">
        {Doctors.map((doc) => (
          <DocCard data={doc} />
        ))}
      </div>
    </Container>
  );
}

export default ListDoc;
