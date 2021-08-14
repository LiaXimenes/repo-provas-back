import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import Semester from "./semester" 
import Tests from "./tests";
import TeacherSubject from "./teacher_subject";

@Entity('subject')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @ManyToOne(() => Semester, semester => semester.id)
  semester: Semester[];

  @OneToMany(() => Tests, (test) => test.subject)
  tests: Tests[];

  @OneToMany(() => TeacherSubject, (teacherSubject) => teacherSubject.subject)
  teacherSubject: TeacherSubject[];
}