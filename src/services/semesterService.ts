import { getRepository } from "typeorm";


import Semester from "../entities/semester"


async function gettingListOfSemester(){
    const categories = await getRepository(Semester).find({relations: [
        "subjects",
        "subjects.tests",
        "subjects.tests.teacher"
    ],
    });
    return categories;
}

export {gettingListOfSemester}