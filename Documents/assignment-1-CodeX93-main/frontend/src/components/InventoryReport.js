import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Navbar from "./Navbar";

import Inventory from "../InventoryData";

export default function InventoryReport() {
  const [Inventory, setInventory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "54.249.143.57:3001/inventory/getInventory"
      );
      setInventory(result.data);
    };
    fetchData();
  }, []);

  return (
    <div data-testid="NavBar">
      <Navbar />
      <h1 className="ComponentHeader mt-4 mb-4 mx-5">Inventory Statistics</h1>
      <div data-testid="ReportID">
        {Inventory.map((inv) => (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Type</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inv.Type}</td>
                <td>{inv.Product}</td>
                {inv.Quantity > 10 ? (
                  <td>{inv.Quantity}</td>
                ) : (
                  <td style={{ color: "red" }}>{inv.Quantity}</td>
                )}

                {inv.Quantity > 10 ? (
                  <td>OK</td>
                ) : (
                  <td style={{ color: "red" }}>Supply Needed</td>
                )}
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </div>
  );
}
