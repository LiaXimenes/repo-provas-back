import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import Tests from "./tests";
import TeacherSubject from "./teacher_subject";

@Entity('teacher')
export default class Teacher {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @JoinColumn({name:"test"}) 
  @OneToMany(() => Tests, (test) => test.teacher)
  tests: Tests[];

  @OneToMany(() => TeacherSubject, (teacherSubject) => teacherSubject.teacher)
  teacherSubject: TeacherSubject[];
}