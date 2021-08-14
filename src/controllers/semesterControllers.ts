import {Request, Response} from "express";

import * as semesterService from "../services/semesterService"

async function searchSemester(req: Request, res: Response){
    try{
        const semester = await semesterService.gettingListOfSemester()
        res.send(semester);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}


export {searchSemester}