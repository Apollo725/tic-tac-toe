import { calculateWinner } from "./helper";

const mockBoardForXWin = ["X", "X", "X", null, "O", "O", null, null, null];

const mockBoardForOWin = ["O", "X", null, "X", "O", "X", "X", "O", "O"];

const mockBoardForDraw = ["X", "X", "O", "O", "X", "X", "X", "O", "O"];

describe("calculateWinner", () => {
  test("returns winner is X", () => {
    const winner = calculateWinner(mockBoardForXWin);
    expect(winner).toBe("X");
  });
  test("returns winner is O", () => {
    const winner = calculateWinner(mockBoardForOWin);
    expect(winner).toBe("O");
  });
  test("returns a draw result", () => {
    const result = calculateWinner(mockBoardForDraw);
    expect(result).toBe(null);
  });
});
