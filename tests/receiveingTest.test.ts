import supertest from "supertest";
import app, {init} from "../src/app";
import {getConnection} from "typeorm"

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("POST /send-test", () =>{
    // it("should return array with all subjects and status 200", async () =>{
    //     const body = {
    //         name: '2019.1',
    //         subjectId: '10',
    //         teacherId: '6',
    //         categoryId: '1',
    //         link: 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf'
    //     }

    //     const response = await supertest(app).post("/send-test").send(body);
    //     expect(response.status).toBe(200);
    // });

    it("should return status 400 to empty name", async () =>{
        const body = {
            name: "" ,
            subjectId: '10',
            teacherId: '6',
            categoryId: '1',
            link: 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf'
        }

        const response = await supertest(app).post("/send-test").send(body);
        expect(response.status).toBe(400);
    });

    it("should return status 400 to empty subjectId", async () =>{
        const body = {
            name: "2020.1" ,
            subjectId: '',
            teacherId: '6',
            categoryId: '1',
            link: 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf'
        }

        const response = await supertest(app).post("/send-test").send(body);
        expect(response.status).toBe(400);
    });

    it("should return status 400 to empty teacherId", async () =>{
        const body = {
            name: "2020.1" ,
            subjectId: '10',
            teacherId: '',
            categoryId: '1',
            link: 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf'
        }

        const response = await supertest(app).post("/send-test").send(body);
        expect(response.status).toBe(400);
    });

    it("should return status 400 to empty categoryId", async () =>{
        const body = {
            name: "2020.1" ,
            subjectId: '10',
            teacherId: '6',
            categoryId: '',
            link: 'http://www.dominiopublico.gov.br/download/texto/ua000180.pdf'
        }

        const response = await supertest(app).post("/send-test").send(body);
        expect(response.status).toBe(400);
    });

    it("should return status 400 to empty link", async () =>{
        const body = {
            name: "2020.1" ,
            subjectId: '10',
            teacherId: '6',
            categoryId: '1',
            link: ''
        }

        const response = await supertest(app).post("/send-test").send(body);
        expect(response.status).toBe(400);
    });
});
  
  
  
  
   