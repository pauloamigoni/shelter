import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from '../../address/interfaces/address.entity';
import { PetEntity } from 'src/pet/interfaces/pet.entity';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    phone: string;

    @Column({ nullable: false })
    cpf: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    type: number;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    birthplace: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    language: string;

    @Column({ nullable: true })
    profession: string;

    @Column({ nullable: true })
    company: string;

    @Column({ nullable: true })
    website: string;

    @Column({ nullable: true })
    relationship: string;

    @Column({ nullable: true })
    birthdate: string;

    @Column({ nullable: true })
    status: number;

    @Column({ nullable: true })
    active: boolean;

    @Column({ nullable: true })
    whatsApp: string;

    @Column({ nullable: true })
    img: string;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;

    @OneToMany(() => AddressEntity, (address) => address.user)
    addresses: AddressEntity[];

    @OneToMany(() => AddressEntity, (address) => address.createdBy)
    createdAddresses: AddressEntity[];

    @OneToMany(() => PetEntity, pet => pet.user)
    pets: PetEntity[];
}
