import {Request, Response} from "express";

import * as subjectService from "../services/subjectService"


async function searchSubjects(req: Request, res: Response){
    try{
        const subject = await subjectService.gettingListOfSubjects()
        res.send(subject);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

async function searchTestAfterSubjects(req: Request, res: Response){
    try{
        const subjectId = Number(req.params.subjectId)

        const testBySubjectId = await subjectService.gettingTestBySubject(subjectId)
    
        res.send(testBySubjectId);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

export {searchSubjects, searchTestAfterSubjects}