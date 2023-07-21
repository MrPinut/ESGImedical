import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datetime/css/react-datetime.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./pages/users/history/History";
import Account from "./pages/users/Account";
import Payment from "./pages/users/Payment";
import Vaccine from "./pages/users/history/Vaccine";
import Radio from "./pages/users/history/Radio";
import Ordonnances from "./pages/users/Ordonnance";
import AddDoctor from "./pages/admin/AddDoctor";
import AddPatient from "./pages/admin/AddPatient";
import Admin from "./pages/admin/Admin";
import FormConsultation from "./pages/doctor/FormConsultation";
import FormOrdonnance from "./pages/doctor/FormOrdonnance";
import DoctorHistory from "./pages/doctor/DoctorHistory";
import DoctorDetailConsultation from "./pages/doctor/DoctorDetailConsultation";
import Consultation from "./pages/users/Consultations";
import Patients from "./pages/doctor/Patients";
import DetailPatient from "./pages/doctor/DetailPatient";
import UpdatePatient from "./pages/doctor/UpdatePatient";
import ListPatients from "./pages/admin/ListPatients";
import ListDoctors from "./pages/admin/ListDoctor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* PATIENT */}
          <Route path="/" element={<App />}></Route>
          <Route path="/histories" element={<History />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/account/payment" element={<Payment />}></Route>
          <Route path="/histories/vaccines" element={<Vaccine />}></Route>
          <Route path="/histories/radios" element={<Radio />}></Route>
          <Route
            path="/histories/consultationDetail"
            element={<Consultation />}
          ></Route>
          {/* <Route path="/appointments" element={<Appointments />}></Route> */}
          <Route
            path="/histories/ordonnances"
            element={<Ordonnances />}
          ></Route>
          {/* ADMIN */}
          <Route path="/admin/patient/add" element={<AddPatient />}></Route>
          <Route path="/admin/doctor/add" element={<AddDoctor />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/patients" element={<ListPatients />}></Route>
          <Route path="/admin/doctors" element={<ListDoctors />}></Route>

          {/* DOCTOR */}
          <Route
            path="/doctor/writeConsultation"
            element={<FormConsultation />}
          ></Route>
          <Route
            path="/doctor/consultation/ordonnance"
            element={<FormOrdonnance />}
          ></Route>
          <Route path="/doctor/patients" element={<Patients />}></Route>
          <Route
            path="/doctor/patient/update"
            element={<UpdatePatient />}
          ></Route>
          <Route
            path="/doctor/patient/info"
            element={<DetailPatient />}
          ></Route>
          <Route path="/doctor/histories" element={<DoctorHistory />}></Route>
          <Route
            path="/doctor/consultation/detailConsultation"
            element={<DoctorDetailConsultation />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
