import { nameChecker } from "../src/client/js/nameChecker";
describe("Testing Name Is Not Blanck", () => {
  test("Testing nameChecker toBeDefined", () => {
    expect(nameChecker).toBeDefined();
  });
});
