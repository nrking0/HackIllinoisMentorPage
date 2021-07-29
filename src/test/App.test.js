/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import App from "../App.jsx";

test("Test", () => {
    render(<App />);
    expect(1).toBe(1);
});
