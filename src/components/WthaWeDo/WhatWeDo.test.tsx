import { render, screen } from "@testing-library/react";
import { WhatWeDo } from ".";

describe( "Test What we do Component", () => {

    test("render component", () => {
        render(<WhatWeDo />);
        const element = screen.getByTestId("section");
        expect(element).toBeInTheDocument();
    });

    test("Click Button", () => {
        render(<WhatWeDo />);
        const buttons = screen.getAllByRole("button");
        for (let button of buttons) {
            expect(button).toBeInTheDocument()
        };
    });
})