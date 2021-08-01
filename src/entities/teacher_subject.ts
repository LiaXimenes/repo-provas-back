import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";

import Teacher from "./teacher";
import Subject from "./subject";

@Entity('teacher_subject')
export default class TeacherSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number

  @Column()
  subjectId: number

  @JoinColumn({name:"teacherId"}) 
  @ManyToOne(() => Teacher, teacher => teacher.id )
  teacher: Teacher

  @JoinColumn({name:"subjectId"}) 
  @ManyToOne(() => Subject, subject => subject.id)
  subject: Subject
}