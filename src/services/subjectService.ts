import { getRepository } from "typeorm";

import Subject from "../entities/subject";
import Test from "../entities/tests";

async function gettingListOfSubjects(){
    const subject = await getRepository(Subject).find();
    console.log(subject)
    return subject;
}

async function gettingTestBySubject(subjectId: number){
    const testBySubjectId = await getRepository(Test).find({ subjectId });
    return testBySubjectId;
}

export{gettingListOfSubjects, gettingTestBySubject}