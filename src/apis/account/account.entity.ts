import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Account extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
    @Column('varchar', { length: 30 })
    password!:String;
    @Column('varchar')
    name:String
    
}