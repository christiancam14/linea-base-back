import { IsOptional } from "class-validator";
import { UserFile } from "src/files/entities/file.entity";
import { Role } from "src/role/entities/role.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        unique: true
    })
    email: string;

    @Column('varchar', {
        select: false
    })
    password: string;

    @Column('varchar')
    fullName: string;

    @Column('bool', {
        default: true
    })
    isActive: boolean;

    @Column('varchar', {
        default: 'user'
    })
    profileImg: string;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];


    @OneToMany(
        () => UserFile,
        (file) => file.user,
        {
            eager: true
        }
    )
    file: UserFile[];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.email = this.email.toLowerCase().trim();
    }
}
