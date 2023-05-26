import { render, fireEvent, screen } from "@testing-library/react";
import Square from "../Square";

const mockProps = {
  index: 1,
  mark: "X",
  onClick: jest.fn(),
};

describe("Square", () => {
  test("renders without crashing", () => {
    render(<Square {...mockProps} />);
  });

  test("allows players to make moves", () => {
    render(<Square {...mockProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });
});
