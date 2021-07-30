import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('test')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @Column()
  teacherId: number

  @Column()
  subjectId: number

  @Column()
  categoryId: number

  @Column()
  link: string
}