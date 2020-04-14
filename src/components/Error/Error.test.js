import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";


import { Error } from "./index";

afterEach(cleanup);

describe("Error", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Error />, div);
  });
  it("renderes message", () => {
    const { getByTestId } = render(<Error msg="Error message" />);
    expect(getByTestId("message").textContent).toBe("Error message");
  })
  it("renders icon", ()=> {
    const { getByTestId } = render(<Error />);
    expect(getByTestId("icon")).toBeTruthy();
  })
    it("renders all elements", ()=> {
    const { getByTestId } = render(<Error msg="Error message" />);
    expect(getByTestId("container").children.length).toBe(2);
  })

});
