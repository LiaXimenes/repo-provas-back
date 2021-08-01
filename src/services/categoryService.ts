import { getRepository } from "typeorm";

import Category from "../entities/category";


async function gettingListOfCategory(){
    const categories = await getRepository(Category).find();
    return categories;
}

export {gettingListOfCategory}