import React from "react";
import Navbar from "./Navbar";

export default function Dashboard() {
  return (
    <div data-testid="NavBar">
      <Navbar />
      <h1 className="ComponentHeader mt-4 mb-4 mx-5">Dashboard Goes Here</h1>
    </div>
  );
}
