import { UserEntity } from 'src/user/interfaces/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'pet' })
export class PetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    age: number;

    @Column({ nullable: false })
    type: string;

    @Column({ nullable: false })
    breed: string;

    @Column({ nullable: false })
    gender: string;

    @Column({ nullable: false })
    weight: number;

    @Column({ nullable: false })
    color: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: false })
    vaccinated: boolean;

    @Column({ nullable: false })
    adopted: boolean;

    @Column({ nullable: false })
    neutered: boolean;

    @Column({ nullable: false })
    entry_date: Date;

    @Column({ nullable: false })
    status: string;

    @ManyToOne(() => UserEntity, user => user.pets, { nullable: false })
    user: UserEntity;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
