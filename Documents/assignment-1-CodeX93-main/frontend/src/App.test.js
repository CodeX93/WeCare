import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import Ingredient from "./components/Ingredient";
import LoginPage from "./components/LoginPage";
import InventoryReport from "./components/InventoryReport";

test("NavBar Test 1", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Bakery");
});

test("NavBar Test 2", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Home");
});
test("NavBar Test 3", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Order");
});
test("NavBar Test 4", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Ingredients");
});
test("NavBar Test 5", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("InventoryReport");
});
test("NavBar Test 6", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "LogOut" })).toBeInTheDocument;
});

test("Login Test 1", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("email");
  expect(linkElement).toHaveTextContent("Email address");
});
test("Login Test 2", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("password");
  expect(linkElement).toHaveTextContent("Password");
});

test("LoginPage Test 3", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("Login");

  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument;
});

test("InventoryReport Test 1", () => {
  render(
    <MemoryRouter>
      <InventoryReport />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("ReportID");
  const linkElement2 = screen.getByTestId("NavBar");
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument("Type");
});
