import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('test')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @Column()
  semesterId: number
}