import {Request, Response} from "express";

import * as receiveingTestService from "../services/receiveingTestService"

async function postingTest(req: Request, res: Response){

    try{
        const name: string = req.body.name
        const subjectId: number = req.body.subjectId
        const teacherId: number = req.body.teacherId
        const categoryId: number = req.body.categoryId
        const link: string = req.body.link

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

        if(!name || !subjectId || !teacherId || !categoryId || !link){
            return res.sendStatus(400)
        }

        const TestWasPosted = await receiveingTestService.postingTest(testInfos)
        res.sendStatus(200)
    } catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

export {postingTest}