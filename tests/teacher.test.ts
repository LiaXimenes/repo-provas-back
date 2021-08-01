import supertest from "supertest";
import app, {init} from "../src/app";
import {getConnection} from "typeorm"

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /search-test/teacher", () =>{
    it("should return status 200", async () =>{
        const response = await supertest(app).get("/search-test/teacher");
        expect(response.status).toBe(200);
    })

    it("should return array with all teachers", async () =>{
        const response = await supertest(app).get("/search-test/teacher");
        expect(response.body.length).not.toBe(0);
    })
})

describe("GET /search-test/teacher/:teacherid", () =>{
    it("should return status 200", async () =>{
        const response = await supertest(app).get("/search-test/teacher/1");
        expect(response.status).toBe(200);
    })

    it("should return array with all teachers", async () =>{
        const response = await supertest(app).get("/search-test/teacher/1");
        expect(response.body.length).not.toBe(0);
    })
})