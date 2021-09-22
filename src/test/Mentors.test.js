/* eslint-disable no-undef */
import React from "react";
import Mentors from "../Pages/Mentors/Mentors.jsx";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Testing Mentor Tiles with API Data", async () => {
    const mentorData = {
        id: "mentors",
        data: [
            {
                description:
                    "Pablo is a computer scientist working as a lead software engineer at MindYourRights, where he's co-authoring a disruptive, common platform for global music rights management. He's passionate about computer programming, cycling, and coffee. He's been an active open source contributor for at least 15 years, writing mostly in Python, Go, and JavaScript. For the last few years, he found himself in love with Elixir and Rust. He's very excited to return to HackIllinois as a mentor for the 4th consecutive year!",
                firstName: "Pablo",
                lastName: "Aguiar",
                profile:
                    "https://hackillinois-upload.s3.amazonaws.com/photos/mentors/pablo_aguiar.png"
            }
        ]
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mentorData)
        })
    );

    await act(async () => {
        render(<Mentors />, container);
    });
    expect(container.querySelector("p").textContent).toBe(mentorData.data[0].description);
    expect(container.textContent).toContain(mentorData.data[0].firstName);
    expect(container.textContent).toContain(mentorData.data[0].lastName);

    global.fetch.mockRestore();
});
