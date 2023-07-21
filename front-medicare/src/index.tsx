import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import History from "./pages/users/history/History";
import Account from "./pages/users/Account";
import Payment from "./pages/users/Payment";
import Vaccine from "./pages/users/history/Vaccine";
import Radio from "./pages/users/history/Radio";
import Appointments from "./pages/users/Appointments";
import Ordonnances from "./pages/users/Ordonnance";
import AddDoctor from "./pages/admin/AddDoctor";
import AddPatient from "./pages/admin/AddPatient";
import Admin from "./pages/admin/Admin";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/histories" element={<History />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/account/payment" element={<Payment />}></Route>
          <Route path="/histories/vaccines" element={<Vaccine />}></Route>
          <Route path="/histories/radios" element={<Radio />}></Route>
          <Route path="/admin/patient" element={<AddPatient />}></Route>
          <Route path="/admin/doctor" element={<AddDoctor />}></Route>
          <Route path="/appointments" element={<Appointments />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route
            path="/histories/ordonnances"
            element={<Ordonnances />}
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