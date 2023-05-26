import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("displays the app title correctly", () => {
    render(<App />);

    const titleElement = screen.getByRole("heading", {
      name: /Tic Tac Toe/i,
    });
    expect(titleElement).toBeInTheDocument();
  });
});
