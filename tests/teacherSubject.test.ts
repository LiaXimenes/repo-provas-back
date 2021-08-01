import supertest from "supertest";
import app, {init} from "../src/app";
import {getConnection} from "typeorm"

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /search-test/teacher-subject/:subjectid", () =>{
    it("should return status 200", async () =>{
        const response = await supertest(app).get("/search-test/teacher");
        expect(response.status).toBe(200);
    })

    it("should return array with all teacher_subject", async () =>{
        const response = await supertest(app).get("/search-test/teacher-subject/1");
        expect(response.body.length).not.toBe(0);
    })
})