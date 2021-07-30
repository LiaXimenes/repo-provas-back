import {Request, Response} from "express";

import * as receiveingTestService from "../services/receiveingTestService"

async function postingTest(req: Request, res: Response){

    try{
        const name: string = req.body.name
        const subjectId: number = req.body.subject
        const teacherId: number = req.body.teacher
        const categoryId: number = req.body.category
        const link: string = req.body.link


        if(!name || !subjectId || !teacherId || !categoryId || !link){
            return res.sendStatus(400)
        }

        interface TestInterface {
            name: string; 
            subjectId: number;
            teacherId: number;
            categoryId: number;
            link: string;
        }

        const testInfos: TestInterface = {
            name,
            subjectId,
            teacherId,
            categoryId,
            link
        }

        const TestWasPosted = await receiveingTestService.postingTest(testInfos)

    } catch(err){
        console.error(err)
        res.sendStatus(500)
    }
    
}

export {postingTest}