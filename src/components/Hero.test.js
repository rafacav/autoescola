import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero witch children", () => {
  const { getByText } = render(
    <Hero>
      <p>Test Children</p>
    </Hero>
  );

  expect(getByText("Test Children")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/test.jpg";

  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
