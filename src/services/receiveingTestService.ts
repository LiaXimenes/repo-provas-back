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
    return (await getRepository(Test).insert(testInfos)).generatedMaps[0].id;
}

export{postingTest}