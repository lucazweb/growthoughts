import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./logo";

describe("first test", () => {
  test("render component correctlly", () => {
    const { getByTestId } = render(<Logo />);

    expect(getByTestId("logo")).toBeTruthy();
  });
});
