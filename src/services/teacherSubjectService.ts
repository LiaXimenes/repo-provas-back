import { getRepository } from "typeorm";

import TeacherSubject from "../entities/teacher_subject";

async function gettingTeacherBySubjectId(subjectId: number){
    const teacherBySubjectId = await getRepository(TeacherSubject).find({ relations: ["teacher"], where: {subjectId}});
    return teacherBySubjectId;
}

export {gettingTeacherBySubjectId}