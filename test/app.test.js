const request = require("supertest");
const app = require("../app");

test("GET / debe devolver HTML", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("DevOps Deploy Exitoso");
});
