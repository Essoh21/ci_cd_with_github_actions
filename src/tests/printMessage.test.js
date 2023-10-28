import { describe, expect, it } from "vitest";
import printMessage from "../printMessage";

describe("printMessage", () => {
  it("should return message", () => {
    const welcome = printMessage("Welcome");
    expect(welcome).toBe("Welcome");
  });
});
