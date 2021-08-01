import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import "./setup"
import connectDatabase from "./database";

import * as receiveingTestControllers from "./controllers/receiveingTestControllers"
import * as teacherControllers from "./controllers/teacherControllers"
import * as subjectControllers from "./controllers/subjectControllers"
import * as categoryControllers from "./controllers/categoryController"
import * as teacherSubjectControllers from "./controllers/teacherSubjectControllers"


const app = express();
app.use(cors());
app.use(express.json());

export async function init () {
  await connectDatabase();
}

app.post("/send-test", receiveingTestControllers.postingTest)

app.get("/search-test/category", categoryControllers.searchCategory)

app.get("/search-test/teacher", teacherControllers.searchTeachers)

app.get("/search-test/teacher/:teacherid",teacherControllers.searchTestAfterTeacher)

app.get("/search-test/teacher-subject/:subjectid", teacherSubjectControllers.searchTeacherAfterSubject)

app.get("/search-test/subject",subjectControllers.searchSubjects)

app.get("/search-test/subject/:subjectid",subjectControllers.searchTestAfterSubjects)

export default app;