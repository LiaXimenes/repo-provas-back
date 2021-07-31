import { getRepository } from "typeorm";

import Teacher from "../entities/teacher";
import Tests from "../entities/tests";


async function gettingListOfTeachers(){
    const teachers = await getRepository(Teacher).find();
    return teachers;
}

async function gettingTestByTeacherId(teacherId : number){
    const testByTeacherId = await getRepository(Tests).find({teacherId} ); 
    return testByTeacherId;
}

export{gettingListOfTeachers, gettingTestByTeacherId}