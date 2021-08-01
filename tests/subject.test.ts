import supertest from "supertest";
import app, {init} from "../src/app";
import {getConnection} from "typeorm"

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /search-test/subject", () =>{
    it("should return status 200", async () =>{
        const response = await supertest(app).get("/search-test/subject");
        expect(response.status).toBe(200);
    })

    it("should return array with all subjects", async () =>{
        const response = await supertest(app).get("/search-test/subject");
        expect(response.body.length).not.toBe(0);
    })
})

describe("GET /search-test/subject/:subjectid", () =>{
    it("should return status 200", async () =>{
        const response = await supertest(app).get("/search-test/subject/1");
        expect(response.status).toBe(200);
    })

    it("should return array with all subjects", async () =>{
        const response = await supertest(app).get("/search-test/subject/1");
        expect(response.body.length).not.toBe(0);
    })
})