import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Tests from "./tests";

@Entity('category')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @OneToMany(() => Tests, (test) => test.categoryId)
  tests: Tests[];
}