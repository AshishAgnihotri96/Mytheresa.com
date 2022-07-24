import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Items from "../Pages/Items";

import Login from "../Pages/Login";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
}

export default Allroutes;
