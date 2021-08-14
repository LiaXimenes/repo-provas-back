import { getRepository } from "typeorm";

import Teacher from "../entities/teacher";
import Tests from "../entities/tests";


async function gettingListOfTeachers(){
    const teachers = await getRepository(Teacher).find({relations: ["tests", "tests.subject"]});
    return teachers;
}

async function gettingTestByTeacherId(teacherId : number){
    const testByTeacherId = await getRepository(Tests).find({relations: ["subject"], where:{teacherId}}); 
    return testByTeacherId;
}

export{gettingListOfTeachers, gettingTestByTeacherId}