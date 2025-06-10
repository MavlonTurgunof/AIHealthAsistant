import React from "react";
import Container from "../../Components/Container";
import { Doctors } from "../../../Data/Data";
import DocCard from "./DocCard";

function ListDoc() {
  return (
    <Container>
      <div className="flex justify-between items-center mt-10">
        <div className="flex gap-4">
          <select>
            <option value="">Tashkent</option>
            <option value="">Chilonzor</option>
            <option value="">Olmazor</option>
            <option value="">Mirobod</option>
          </select>

          <select>
            <option value="">Tashkent</option>
            <option value="">Chilonzor</option>
            <option value="">Olmazor</option>
            <option value="">Mirobod</option>
          </select>
        </div>
        <input
          type="text"
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="border-1 px-10 py-2 rounded-full mr-2 border-gray-300 ring-1 ring-blue-500"
          placeholder="Search specialty..."
        />
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
