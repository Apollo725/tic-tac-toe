import { render, fireEvent, screen } from "@testing-library/react";
import Board from "../Board";

describe("Board", () => {
  test("renders without crashing", () => {
    render(<Board />);
  });

  test("displays the status properly", () => {
    render(<Board />);
    const statusElement = screen.getByRole("heading", {
      name: /Next player:/i,
    });
    expect(statusElement).toBeInTheDocument();
    expect(statusElement.textContent).toBe("Next player: X");
  });

  test("renders the reset button properly", () => {
    render(<Board />);
    const resetButton = screen.getByRole("button", {
      name: /Reset/i,
    });
    expect(resetButton).toBeInTheDocument();
  });

  test("declares the winner correctly", () => {
    render(<Board />);
    const buttons = screen.getAllByRole("button", { name: "" });
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[2]);
    expect(screen.getByText(/Winner:/i)).toBeInTheDocument();
    expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
  });

  test("resets the status and board when clicking the reset button", () => {
    render(<Board />);
    const resetButton = screen.getByRole("button", { name: /Reset/i });
    fireEvent.click(resetButton);
    expect(screen.getByText(/Next player:/i)).toBeInTheDocument();
    const buttons = screen.getAllByRole("button", { name: "" });
    for (let i = 0; i < 9; i++) {
      expect(buttons[i].textContent).toBe("");
    }
  });
});
