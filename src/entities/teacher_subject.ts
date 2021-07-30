import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('test')
export default class TeacherSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number

  @Column()
  subjectId: number
}