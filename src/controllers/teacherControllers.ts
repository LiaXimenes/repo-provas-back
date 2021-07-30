import {Request, Response} from "express";

import * as teacherService from "../services/teacherService"

async function searchTeachers(req: Request, res: Response){
    try{
        const teachers = await teacherService.gettingListOfTeachers()
        res.send(teachers);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

async function searchTestAfterTeacher(req: Request, res: Response){
    try{
        const teacherId = Number(req.params.teacherid)

        const testByTeacherId = await teacherService.gettingTestByTeacherId(teacherId)
    
        res.send(testByTeacherId);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

export {searchTeachers, searchTestAfterTeacher}