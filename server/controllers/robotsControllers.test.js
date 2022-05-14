const { find } = require("../../db/models/Robot");
const { getRobots } = require("./robotsControllers");

const expectedRobots = [
  {
    _id: "627e93e63ccb21d8cae171b2",
    name: "Terminator",
    speed: 2,
    resistance: 8,
    creation: 1984,
  },
];

jest.mock("../../db/models/robot", () => ({
  ...jest.requireActual("../../db/models/robot"),
  find: jest.fn().mockResolvedValue(expectedRobots),
}));

describe("Given a getRobots function", () => {
  describe("When its invoked with a response", () => {
    test("Then it should call the reponse's method status with a 200", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: () => {},
      };
      const expectedStatusCode = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the reponse's method json with a list of robots", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith({
        robots: expectedRobots,
      });
    });
  });
});
