import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import { Doctors } from "../../../Data/Data";
import DocCard from "./DocCard";
import FilterBar from "./FilterBar";
import { useLocation, useParams } from "react-router-dom";
import request from "../../Components/config/Indes";

function ListDoc() {
  const { id } = useParams();
  const [docList, setDocList] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  const getList = async () => {
    try {
      let res = await request.get(`/doctors/category/${id}/doctor/list/`);
      setDocList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  console.log(docList);

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="mt-10">
          <h1 className="font-bold text-[28px]">{name}s</h1>
        </div>
      </div>
      <div>
        {docList.length === 0 && <p>{name}s not available right now</p>}
        <div className="my-10">
          {docList?.map((doc) => (
            <DocCard key={doc.id} data={doc} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ListDoc;
