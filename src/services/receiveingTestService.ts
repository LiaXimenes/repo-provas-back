import { getRepository } from "typeorm";

import Test from "../entities/tests";

interface TestInterface {
    name: string; 
    subjectId: number;
    teacherId: number;
    categoryId: number;
    link: string;
}

async function postingTest(testInfos: TestInterface){
    await getRepository(Test).insert(testInfos)

}

export{postingTest}