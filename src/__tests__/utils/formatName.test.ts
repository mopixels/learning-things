import { formatName } from "../../utils/formatName";

test("formatName", () => {
  expect(formatName("John Johnson123")).toBe("john-johnson123");
});
