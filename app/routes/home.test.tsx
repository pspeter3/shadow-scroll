import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { expect, test } from "vitest";
import HomeRoute from "./home";

test("home", async () => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: HomeRoute,
    },
  ]);
  render(<Stub initialEntries={["/"]} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Shadow Scroll");
});
