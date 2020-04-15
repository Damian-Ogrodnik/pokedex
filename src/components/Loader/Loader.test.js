import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import { Loader } from "./index";

afterEach(cleanup);

describe("Loader", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader />, div);
  });

  it("renders img", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("img")).toBeTruthy();
  });
});
