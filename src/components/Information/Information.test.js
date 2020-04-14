import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import pikachuImg from "../../assets/pikachu.png";

import { Information } from "./index";

afterEach(cleanup);

describe("Information", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Information />, div);
  });

  it("renders text", () => {
    const { getByTestId } = render(<Information text="Information message" />);
    expect(getByTestId("text").textContent).toBe("Information message");
  });

  it("renders seconds text", () => {
    const { getByTestId } = render(
      <Information secondText="Information message" />
    );
    expect(getByTestId("second-text").textContent).toBe("Information message");
  });

  it("renders img", () => {
    const { getByTestId } = render(<Information imgPath={pikachuImg} />);
    expect(getByTestId("img")).toBeTruthy();
  });
});
