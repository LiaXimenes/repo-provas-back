import supertest from "supertest";
import app, {init} from "../src/app";
import {getConnection} from "typeorm"

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /search-test/category", () =>{
    it("should return status 200", async () =>{
        const response = await supertest(app).get("/search-test/category");
        expect(response.status).toBe(200);
    })

    it("should return array with all categories", async () =>{
        const response = await supertest(app).get("/search-test/category");
        expect(response.body.length).not.toBe(0);
    })
})
