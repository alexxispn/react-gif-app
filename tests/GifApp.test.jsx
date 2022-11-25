import {describe, expect, it} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {GifApp} from "../src/GifApp";

describe("GifApp", () => {
    it("renders", () => {
        const {getByText} = render(<GifApp/>);
        expect(getByText("GifApp")).toBeDefined();
    });
    it("renders categories", () => {
        const {getByText} = render(<GifApp/>);
        expect(getByText("Arcane")).toBeDefined();
        expect(getByText("Rick y morty")).toBeDefined();
        expect(getByText("Hunter x Hunter")).toBeDefined();
    });
    it("should add a new category when the user submits the form", async () => {
    });
});
