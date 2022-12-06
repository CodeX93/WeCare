import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

import OrderData from "../OrderData";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "54.249.143.57:3001/inventory/getorderdata"
      );
      setOrders(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 data-testid="comp">Orders</h1>
      {orders.map((ord) => (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Order Date</th>
                <th>Order Day</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ord.OrderId}</td>
                <td>{ord.OrderDate}</td>
                <td>{ord.OrderDay}</td>
                <td>{ord.OrderAddress}</td>
                <td>{ord.OrderPrice}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ))}
    </div>
  );
}
