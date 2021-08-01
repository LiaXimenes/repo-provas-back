import {Request, Response} from "express";

import * as categoryService from "../services/categoryService"

async function searchCategory(req: Request, res: Response){
    try{
        const categories = await categoryService.gettingListOfCategory()
        res.send(categories);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}

export {searchCategory}