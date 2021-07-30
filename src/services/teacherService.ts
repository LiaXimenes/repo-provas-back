import { getRepository } from "typeorm";

import Teacher from "../entities/teacher";
import Test from "../entities/test";


async function gettingListOfTeachers(){
    const teachers = await getRepository(Teacher).find();
    return teachers;
}

async function gettingTestByTeacherId(teacherId : number){
    const testByTeacherId = await getRepository(Test).find({ teacherId }); 
    return testByTeacherId;
}

export{gettingListOfTeachers, gettingTestByTeacherId}