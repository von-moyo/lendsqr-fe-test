import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginUI } from "features";

test("render login", ()=> {
  render(<LoginUI submit={() => { }} />);
const loginText = screen.queryByTestId('login');
expect(loginText).toBeInTheDocument();
});
