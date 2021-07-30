import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import connectDatabase from "./database";

import * as receiveingTestControllers from "./controllers/receiveingTestControllers"
import * as teacherControllers from "./controllers/teacherControllers"
import * as subjectControllers from "./controllers/subjectControllers"


const app = express();
app.use(cors());
app.use(express.json());

export async function init () {
  await connectDatabase();
}

app.post("/send-test", receiveingTestControllers.postingTest)

app.get("/search-test/teacher", teacherControllers.searchTeachers)

app.get("/search-test/:teacherid",teacherControllers.searchTestAfterTeacher)

app.get("/search-test/subject",subjectControllers.searchSubjects)

app.get("/search-test/:subjectid",subjectControllers.searchTestAfterSubjects)






export default app;
