import { fireEvent, render, screen } from "@testing-library/react";
import App1Component from "./App1Component";

it("renders the App1Component", () => {
  render(<App1Component />);
  expect(
    screen.getByText(/This is a component that is specific to App1/i)
  ).toBeTruthy();
});
