import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('test')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number

  @Column()
  subjectId: number
}