import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'userFiles' })
export class UserFile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 255,
        unique: true
    })
    name: string;

    @Column('varchar')
    img: string;

    @Column('boolean', {
        default: true
    })
    isActive: boolean;

    @ManyToOne(
        () => User,
        (user) => user.file,
        {
            onDelete: "CASCADE"
        }
    )
    user: User;
}
