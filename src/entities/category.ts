import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('category')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string
}