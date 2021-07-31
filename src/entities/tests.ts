import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Category from "./category";
import Subject from "./subject";
import Teacher from "./teacher";

@Entity('test')
export default class Tests {
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

  @JoinColumn({name:"teacherId"}) 
  @ManyToOne(() => Teacher, teacher => teacher.id )
  teacher: Teacher

  @JoinColumn({name:"subjectId"}) 
  @ManyToOne(() => Subject, subject => subject.id)
  subject: Subject

  @JoinColumn({name:"categoryId"}) 
  @ManyToOne(() => Category, category => category.id)
  category: Category

  @Column()
  link: string
}