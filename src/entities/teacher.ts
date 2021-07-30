import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('teacher')
export default class Teacher {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string
}