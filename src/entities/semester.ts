import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('semester')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string
}