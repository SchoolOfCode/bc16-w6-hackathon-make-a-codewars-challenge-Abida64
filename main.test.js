import { test, expect } from "vitest";
import { catTongue } from "./main.js";

//bare bones test
test('bare bones test should pass', () => {
})
//actual tests
test("upper case", function () {
    expect(catTongue("MEOW").toBe("Hurry up!"));
});

test("lowercase meow", function () {
    expect(catTongue("meow").toBe("I want pets"));
});

test("5 characters or more", function () {
    expect(catTongue("meowww").toBe("I'm hungry"));
});

test("string reversed", function () {
    expect(catTongue("woem").toBe("too much catnip"));
});

//Error handling
test("unsupported character", () => {
    expect(() => catTongue("!")).toThrowError(
      /^Unsupported character %$/
    );
  });