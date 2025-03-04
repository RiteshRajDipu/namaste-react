import { sum } from "../sum";

test("some function calculate sum of two numbers", () => {
    const result = sum(3,5);
    //Assertion
    expect(result).toBe(8);
});
