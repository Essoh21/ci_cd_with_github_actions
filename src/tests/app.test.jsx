import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("should render content", () => {
    render(<App />);
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
