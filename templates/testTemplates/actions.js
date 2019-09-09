//Place here your imports (connectors, helpers...)

import {} from "../../../actionTypes";
import {} from "../$ACTION";

describe("$ACTION test suite", () => {
  it("", () => {
    const payload = "payload";
    const actual = {
      type: YOUR_ACTION_TO_CALL,
      payload: { payload }
    };
    const expected = yourFunction(payload);
    expect(actual).toEqual(expected);
  });
});
