import request from "supertest";
import { app } from "../app";

describe("Test /tea API endpoint request", () => {
  test("GET /tea should return correct object for English Breakfast", async () => {
    const res = await request(app)
      .get("/tea")
      .query({ teaName: "English Breakfast" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "English Breakfast",
    });
  });
  test("GET /tea should return correct object for Matcha", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Matcha" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Matcha",
    });
  });
  test("GET /tea should return English Breakfast when no parameter defined", async () => {
    const res = await request(app).get("/tea");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "English Breakfast",
    });
  });
});
