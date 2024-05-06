import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("deve renderizar titulo login", () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test("deve renderizar botao acessar", () => {
  render(<App />);
  const linkElement = screen.getByText(/acessar/i);
  expect(linkElement).toBeInTheDocument();
});
