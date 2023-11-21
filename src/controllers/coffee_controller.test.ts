import request from "supertest";
import { app } from "../app";

describe("Test /coffee API endpoint request", () => {
  test("GET /coffee should return correct object for Latte", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });

  test("GET /coffee should return correct object for Flat White", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Flat White" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Flat White",
    });
  });

  test("GET /coffee should return Latte when no parameter specified", async () => {
    const res = await request(app).get("/coffee");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
});

describe("Test coffee lover API endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});
