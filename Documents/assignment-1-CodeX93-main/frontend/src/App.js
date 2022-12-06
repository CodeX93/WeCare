import "./Component.css";

import "bootstrap/dist/css/bootstrap.min.css";

import OrderList from "./components/OrderList";
import InventoryReport from "./components/InventoryReport";
import Dashboard from "./components/Dashboard";
import Ingredient from "./components/Ingredient";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App"></div>

      <div>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/order" element={<OrderList />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="/inventory" element={<InventoryReport />} />
          //
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
