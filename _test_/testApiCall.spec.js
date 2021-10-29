import { apiCall } from "../src/client/js/apiCall";
describe("Testing API Call functionality", () => {
  test("Making sure apiCalltoBeDefined", () => {
    expect(apiCall).toBeDefined();
  });
});
