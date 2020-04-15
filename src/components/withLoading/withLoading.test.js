import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import { withLoading } from "./index";

afterEach(cleanup);

const ExampleComponent = ({ name }) => {
  return <div>Example Component {name}</div>;
};

describe("withLoading", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const ExampleComponentLoading = withLoading(ExampleComponent);
    ReactDOM.render(<ExampleComponentLoading />, div);
  });
  it("renders error when it occurs", () => {
    const ExampleComponentLoading = withLoading(ExampleComponent);
    const { getByTestId } = render(<ExampleComponentLoading error={true} />);
    expect(getByTestId("error")).toBeTruthy();
  });
  it("renders loader when it's loading", () => {
    const ExampleComponentLoading = withLoading(ExampleComponent);
    const { getByTestId } = render(<ExampleComponentLoading loading={true} />);
    expect(getByTestId("loader")).toBeTruthy();
  });
  it("renders proper component with props", () => {
    const ExampleComponentLoading = withLoading(ExampleComponent);
    const { getByText } = render(<ExampleComponentLoading name={"John"} />);
    expect(getByText("Example Component John")).toBeTruthy();
  });
});
