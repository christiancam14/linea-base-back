import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'rol'})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
