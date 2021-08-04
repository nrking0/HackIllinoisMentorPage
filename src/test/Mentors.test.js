/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Mentors from "../Pages/Mentors/Mentors.jsx";

test("Test", () => {
    render(<Mentors />);
    expect(1).toBe(1);
});
