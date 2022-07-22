import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Allroutes;
