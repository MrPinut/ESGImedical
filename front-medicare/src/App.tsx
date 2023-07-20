import Navbar, { Navigation } from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="app bg-gray-20">
      <Navigation accounts={accounts} setAccounts={setAccounts} />

      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={<Home accounts={accounts} setAccounts={setAccounts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
