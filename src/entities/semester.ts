import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('semester')
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string
}