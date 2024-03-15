import { test, expect } from "vitest";
import { catTongue } from "./main.js";

//bare bones test
test('bare bones test should pass', () => {
})
//actual tests
test("uppercase meow means to hurry up", function () {
    expect(catTongue("MEOW").toBe("Hurry up!"));
});

test("lowercase meow means they want pets", function () {
    expect(catTongue("meow").toBe("I want pets"));
});

test("5 characters or more mean hungry", function () {
    expect(catTongue("meowww").toBe("I'm hungry"));
});

test("string reversed meow means too much catnip", function () {
    expect(catTongue("woem").toBe("too much catnip"));
});

//INVALID CHARACTERS
test("any other char will return invalid character", function () {
    expect(catTongue("cat").toBe("Invalid character"));
});

test("any other char will return invalid character", function () {
    expect(catTongue("luna").toBe("Invalid character"));
});

test("any other char will return invalid character", function () {
    expect(catTongue("cleo").toBe("Invalid character"));
});

test("any other char will return invalid character", function () {
    expect(catTongue("tongue").toBe("Invalid character"));
});

test("any other char will return invalid character", function () {
    expect(catTongue("me0w").toBe("Invalid character"));
});