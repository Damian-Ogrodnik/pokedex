import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import { TypeInfo } from "./index";

const types = [{ type: { name: "grass" } }, { type: { name: "fire" } }];

afterEach(cleanup);

describe("TypeInfo", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TypeInfo />, div);
  });
  it("renders all elements", () => {
    const { getByTestId } = render(<TypeInfo types={types} />);
    expect(getByTestId("container").children.length).toBe(2);
  });
  it("renders proper names", () => {
    const { getByText } = render(<TypeInfo types={types} />);
    expect(getByText(types[0].type.name).textContent).toBe(types[0].type.name);
    expect(getByText(types[1].type.name).textContent).toBe(types[1].type.name);
  });
});
