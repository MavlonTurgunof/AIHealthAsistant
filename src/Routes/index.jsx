import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../Components/AppLayout";
import Home from "../../Pages/Home";
import Doctors from "../../Pages/Doctors";
import Clinics from "../../Pages/Clinics";
import AIAsistent from "../../Pages/AIAsistent";
import AboutUs from "../../Pages/AboutUs";
import ListDoc from "../Container/Doctors/ListDoc";
import DocDetail from "../Container/Doctors/DocDetail";
import ListClinic from "../Container/Clinics/ListClinic";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />

          <Route path="/listDoc/:id" element={<ListDoc />} />
          <Route path="/clinics/:id" element={<ListClinic />} />
          <Route path="/doctor/:id" element={<DocDetail />} />

          <Route path="/clinics" element={<Clinics />} />
          <Route path="/aiasistent" element={<AIAsistent />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
