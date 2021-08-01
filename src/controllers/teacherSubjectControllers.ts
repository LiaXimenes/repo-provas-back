import {Request, Response} from "express";

import * as teacherSubjectService from "../services/teacherSubjectService"


async function searchTeacherAfterSubject(req: Request, res: Response){
    try{
        const subjectId = Number(req.params.subjectid)
        console.log(subjectId)

        const teacherBySubjectId = await teacherSubjectService.gettingTeacherBySubjectId(subjectId)
        console.log(teacherBySubjectId)
        res.send(teacherBySubjectId);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

export {searchTeacherAfterSubject}